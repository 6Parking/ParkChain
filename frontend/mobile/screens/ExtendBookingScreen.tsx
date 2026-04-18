import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config';

export default function ExtendBookingScreen({ route, navigation }: any) {
    const { booking, maxEndTime } = route.params;

    const [hoursToAdd, setHoursToAdd] = useState(1);
    const [loading, setLoading] = useState(false);

    const originalEnd = new Date(booking.endTime);
    const limit = maxEndTime ? new Date(maxEndTime) : null;

    const maxHoursAllowed = limit
        ? Math.floor((limit.getTime() - originalEnd.getTime()) / 3600000)
        : 24;

    const [newEndTime, setNewEndTime] = useState(new Date(booking.endTime));

    useEffect(() => {
        const date = new Date(booking.endTime);
        date.setHours(date.getHours() + hoursToAdd);
        setNewEndTime(date);
    }, [hoursToAdd]);

    const hourlyRate = booking.totalPrice /
        ((new Date(booking.endTime).getTime() - new Date(booking.startTime).getTime()) / 3600000);

    const additionalCost = Math.round(hoursToAdd * hourlyRate * 100) / 100;
    const canAddMore = hoursToAdd < maxHoursAllowed;

    const handleExtend = async () => {
        setLoading(true);
        try {
            const token = await SecureStore.getItemAsync('userToken');
            const response = await fetch(`${URL}/parking/extend-booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    bookingId: booking.id,
                    newEndTime: newEndTime.toISOString(),
                    additionalCost: additionalCost
                }),
            });

            if (response.ok) {
                Alert.alert('Success', `Extended by ${hoursToAdd} hour(s)!`);
                navigation.navigate('ManageRent');
            } else {
                const data = await response.json();
                Alert.alert('Error', data.error || 'Extension unavailable.');
            }
        } catch (error) {
            Alert.alert('Error', 'Connection failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Extend Stay</Text>
                <Text style={styles.address}>{booking.spot.address}</Text>

                <View style={styles.stepperContainer}>
                    <Text style={styles.label}>Extend by how many hours?</Text>
                    <View style={styles.stepper}>
                        <TouchableOpacity
                            style={styles.stepButton}
                            onPress={() => setHoursToAdd(Math.max(1, hoursToAdd - 1))}
                        >
                            <Text style={styles.stepText}>-</Text>
                        </TouchableOpacity>

                        <View style={styles.hourDisplay}>
                            <Text style={styles.hourText}>{hoursToAdd}</Text>
                            <Text style={styles.hourSub}>hrs</Text>
                        </View>

                        <TouchableOpacity
                            style={[styles.stepButton, !canAddMore && styles.disabledStepButton]}
                            onPress={() => {
                                if (canAddMore) setHoursToAdd(hoursToAdd + 1);
                                else Alert.alert("Limit Reached", "The spot is not available after this time.");
                            }}
                        >
                            <Text style={[styles.stepText, !canAddMore && { color: '#ccc' }]}>+</Text>
                        </TouchableOpacity>
                    </View>
                    {!canAddMore && (
                        <Text style={styles.limitText}>Maximum availability reached</Text>
                    )}
                </View>

                <View style={styles.summary}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>New End Time:</Text>
                        <Text style={styles.summaryValue}>
                            {newEndTime.toLocaleString('pl-PL', {
                                day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                            })}
                        </Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Additional Cost:</Text>
                        <Text style={styles.priceValue}>{additionalCost.toFixed(2)} PLN</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.confirmButton, loading && { opacity: 0.7 }]}
                    onPress={handleExtend}
                    disabled={loading}
                >
                    {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.confirmText}>Confirm & Pay</Text>}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { padding: 30, flex: 1 },
    title: { fontSize: 32, fontWeight: '900', color: '#1A1A1A' },
    address: { fontSize: 16, color: '#666', marginBottom: 40 },
    stepperContainer: { alignItems: 'center', marginBottom: 40 },
    label: { fontSize: 14, fontWeight: '700', color: '#999', textTransform: 'uppercase', marginBottom: 20 },
    stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    stepButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' },
    stepText: { fontSize: 30, fontWeight: '300', color: '#1A1A1A' },
    hourDisplay: { width: 120, alignItems: 'center' },
    hourText: { fontSize: 48, fontWeight: '900', color: '#6C63FF' },
    hourSub: { fontSize: 14, fontWeight: '700', color: '#6C63FF' },
    summary: { backgroundColor: '#F9F9FF', padding: 20, borderRadius: 20, marginBottom: 30 },
    summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    summaryLabel: { color: '#666', fontWeight: '600' },
    summaryValue: { fontWeight: '700', color: '#1A1A1A' },
    priceValue: { fontWeight: '900', color: '#FF9500', fontSize: 18 },
    confirmButton: { backgroundColor: '#28A745', padding: 20, borderRadius: 15, alignItems: 'center' },
    confirmText: { color: '#fff', fontSize: 18, fontWeight: '800' },
    disabledStepButton: { backgroundColor: '#F0F0F0' },
    limitText: { color: '#FF3B30', fontSize: 12, fontWeight: '700', marginTop: 10 },
});
