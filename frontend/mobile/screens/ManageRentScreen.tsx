import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, FlatList, TouchableOpacity,
    SafeAreaView, ActivityIndicator, RefreshControl, Alert
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { URL } from '../config';


interface MyRent {
    id: number;
    startTime: string;
    endTime: string;
    totalPrice: number;
    status: string;
    spot: {
        address: string;
        city: string;
        size: string;
    };
}

const formatPL = (dateString: string) => {
    return new Date(dateString).toLocaleString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export default function ManageRentScreen({ navigation }: any) {
    const [mySpots, setMySpots] = useState<MyRent[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchMyRents = async () => {
        try {
            const token = await SecureStore.getItemAsync('userToken');
            const response = await fetch(`${URL}/parking/my-rents`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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
        fetchMyRents();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#FF9500" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Listings</Text>
                <Text style={styles.count}>{mySpots.length} rents listed</Text>
            </View>

            <FlatList
                data={mySpots}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchMyRents(); }} />
                }
                contentContainerStyle={{ padding: 20 }}
                ListEmptyComponent={<Text style={styles.empty}>You haven't added any spots yet.</Text>}
                renderItem={({ item }) => (
                    <View style={styles.spotCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.address}>{item.spot.address}</Text>
                            <Text style={styles.smallText}>{item.spot.size}</Text>
                            <Text style={styles.smallText}>{formatPL(item.startTime)}</Text>
                            <Text style={styles.smallText}>{formatPL(item.endTime)}</Text>
                        </View>
                        <Text style={styles.price}>${item.totalPrice}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { padding: 20 },
    headerTitle: { fontSize: 26, fontWeight: '800', color: '#1A1A1A' },
    count: { color: '#666', marginTop: 4 },
    spotCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
    },
    address: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
    smallText: { color: '#666', fontSize: 13, marginBottom: 8 },
    price: { fontSize: 18, fontWeight: '800', color: '#FF9500' },
    statusBadge: { alignSelf: 'flex-start', paddingVertical: 4 },
    statusText: { fontSize: 12, fontWeight: '600', color: '#28A745' },
    empty: { textAlign: 'center', marginTop: 50, color: '#999' }
});