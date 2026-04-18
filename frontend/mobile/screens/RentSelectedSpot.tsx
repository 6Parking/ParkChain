import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config';

export default function RentSelectedSpot({ route, navigation }: any) {
    const spot = route?.params?.spot || {
        id: null,
        address: 'No data',
        price: '4.50',
        size: '-'
    };

    const [selectedHours, setSelectedHours] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const basePrice = parseFloat(spot.price || 0);
    const totalPrice = (basePrice * selectedHours).toFixed(2);
    const deposit = (basePrice * selectedHours * 0.7).toFixed(2);
    const timeOptions = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleRentConfirm = async () => {
        if (!spot.id) {
            Alert.alert("Error", "No parking ID. Check once again spot on a map.");
            return;
        }

        setIsLoading(true);

        try {
            const token = await SecureStore.getItemAsync('userToken');
            if (!token) {
                Alert.alert('Authorisation error', 'You have to be logged in to rent a spot.');
                setIsLoading(false);
                return;
            }

            const response = await fetch(`${URL}/parking/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    spotId: spot.id,
                    hours: selectedHours,
                    totalPrice: totalPrice,
                    deposit: deposit
                })
            });

            const data = await response.json();

            if (response.ok) {
                navigation.navigate('RentResult', {
                    spot: spot,
                    totalPrice: totalPrice,
                    bookingId: data.booking.id
                });
            } else {
                Alert.alert('Reservation error', data.error || 'Could not rent the spot.');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            Alert.alert('Connection error', 'Could not connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.label}>Address</Text>
                    <Text style={styles.valueText}>{spot.address}</Text>
                </View>

                <View style={[styles.card, styles.pickerCard]}>
                    <View style={styles.priceRow}>
                        <Text style={styles.label}>Rate</Text>
                        <Text style={styles.priceText}>
                            <Text style={styles.priceNumber}>{spot.price}</Text> zł / h
                        </Text>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedHours}
                            onValueChange={(itemValue) => setSelectedHours(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            {timeOptions.map(hour => (
                                <Picker.Item
                                    key={hour}
                                    label={`${hour} ${hour === 1 ? 'hour' : 'hours'}`}
                                    value={hour}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Size</Text>
                    <Text style={styles.valueText}>{spot.size}</Text>
                </View>

                <TouchableOpacity
                    style={[styles.rentButton, isLoading && { backgroundColor: '#66a3ff' }]}
                    onPress={handleRentConfirm}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.rentButtonText}>Rent for {totalPrice} zł</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
    container: { flex: 1, padding: 20 },
    card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    pickerCard: { flexDirection: 'column', alignItems: 'stretch', paddingVertical: 15 },
    priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    label: { fontSize: 13, color: '#666', width: 70, textTransform: 'capitalize' },
    valueText: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', flex: 1 },
    priceNumber: { fontSize: 18, fontWeight: '800', color: '#007AFF' },
    priceText: { fontSize: 14, color: '#666', fontWeight: '600' },
    pickerContainer: { height: 140, justifyContent: 'center', overflow: 'hidden' },
    picker: { width: '100%' },
    pickerItem: { fontSize: 20, fontWeight: '700', color: '#1A1A1A', height: 140 },
    rentButton: { backgroundColor: '#007AFF', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 'auto', shadowColor: '#007AFF', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 4 },
    rentButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800' }
});
