import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Alert
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config';

interface Availability {
    dayOfWeek: number | null;
    startTime: string | null;
    endTime: string | null;
    startDateTime: string | null;
    endDateTime: string | null;
}

interface ParkingSpot {
    id: number;
    address: string;
    city: string;
    hourlyRate: number;
    isActive: boolean;
    availabilityMode: '24_7' | 'RECURRING' | 'ONCE';
    availabilities: Availability[];
}

export default function ManageRentOutScreen({ navigation }: any) {
    const [mySpots, setMySpots] = useState<ParkingSpot[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchMySpots = async () => {
        try {
            const token = await SecureStore.getItemAsync('userToken');
            const response = await fetch(`${URL}/parking/my-spots`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();

            if (response.ok) {
                setMySpots(data);
            } else {
                Alert.alert('Error', data.error || 'Failed to fetch your spots');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchMySpots();
        });
        return unsubscribe;
    }, [navigation]);


    const renderTimeInfo = (item: ParkingSpot) => {
        if (item.availabilityMode === '24_7') {
            return <Text style={styles.timeDetail}>Always available 24/7</Text>;
        }

        if (item.availabilityMode === 'RECURRING' && item.availabilities.length > 0) {
            const daysMap = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
            const days = item.availabilities
                .map(a => daysMap[a.dayOfWeek as number])
                .join(', ');
            const { startTime, endTime } = item.availabilities[0];
            return <Text style={styles.timeDetail}>{days} • {startTime}-{endTime}</Text>;
        }

        if (item.availabilityMode === 'ONCE' && item.availabilities.length > 0) {
            const start = new Date(item.availabilities[0].startDateTime as string);
            const end = new Date(item.availabilities[0].endDateTime as string);
            return (
                <Text style={styles.timeDetail}>
                    {start.toLocaleDateString()} {start.getHours()}:00 - {end.toLocaleDateString()} {end.getHours()}:00
                </Text>
            );
        }
        return null;
    };

    const getModeBadge = (mode: string) => {
        const stylesMap: any = {
            '24_7': { label: '24/7', color: '#007AFF', bg: '#E3F2FD' },
            'RECURRING': { label: 'Recurring', color: '#5856D6', bg: '#F3E5F5' },
            'ONCE': { label: 'One-time', color: '#FF9500', bg: '#FFF3E0' },
        };
        const config = stylesMap[mode] || stylesMap['24_7'];
        return (
            <View style={[styles.modeBadge, { backgroundColor: config.bg }]}>
                <Text style={[styles.modeBadgeText, { color: config.color }]}>{config.label}</Text>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#FF9500" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Listings</Text>
                <Text style={styles.count}>{mySpots.length} spots listed</Text>
            </View>

            <FlatList
                data={mySpots}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchMySpots(); }} />
                }
                contentContainerStyle={{ padding: 20 }}
                ListEmptyComponent={<Text style={styles.empty}>You haven't added any spots yet.</Text>}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.spotCard}
                        onPress={() => navigation.navigate('RentOut', { spot: item })}
                    >
                        <View style={{ flex: 1 }}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.address} numberOfLines={1}>{item.address}</Text>
                                {getModeBadge(item.availabilityMode)}
                            </View>

                            <Text style={styles.city}>{item.city}</Text>

                            <View style={styles.timeInfoRow}>
                                <Text style={styles.clockIcon}>🕒</Text>
                                {renderTimeInfo(item)}
                            </View>

                            <View style={styles.statusRow}>
                                <Text style={[styles.statusText, !item.isActive && styles.statusHidden]}>
                                    {item.isActive ? '● Active' : '● Rented'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{item.hourlyRate} zł</Text>
                            <Text style={styles.perHour}>/h</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { padding: 25, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
    headerTitle: { fontSize: 26, fontWeight: '900', color: '#1A1A1A' },
    count: { color: '#666', marginTop: 4, fontWeight: '500' },
    spotCard: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 },
    address: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', flex: 1, marginRight: 10 },
    city: { color: '#888', fontSize: 13, marginBottom: 8 },
    modeBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
    modeBadgeText: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase' },
    timeInfoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, backgroundColor: '#F3F4F6', padding: 6, borderRadius: 8, alignSelf: 'flex-start' },
    clockIcon: { fontSize: 12, marginRight: 5 },
    timeDetail: { fontSize: 12, color: '#444', fontWeight: '500' },
    statusRow: { marginTop: 4 },
    statusText: { fontSize: 12, fontWeight: '700', color: '#28A745' },
    statusHidden: { color: '#FF3B30' },
    priceContainer: { alignItems: 'flex-end', marginLeft: 12 },
    price: { fontSize: 19, fontWeight: '900', color: '#FF9500' },
    perHour: { fontSize: 11, color: '#999', fontWeight: '600' },
    empty: { textAlign: 'center', marginTop: 50, color: '#999', fontSize: 16 }
});