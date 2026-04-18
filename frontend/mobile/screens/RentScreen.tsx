import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { URL } from '../config'; // Upewnij się, że ścieżka jest poprawna

export default function RentScreen() {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Funkcja pobierająca dane z API
    const fetchSpots = async () => {
        try {
            const response = await fetch(`${URL}/parking`);
            const data = await response.json();

            if (response.ok) {
                setSpots(data);
            } else {
                console.error("Błąd serwera:", data.error);
            }
        } catch (error) {
            console.error("Błąd połączenia:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    // Pobierz dane przy pierwszym uruchomieniu
    useEffect(() => {
        fetchSpots();
    }, []);

    // Funkcja do odświeżania (pull-to-refresh)
    const onRefresh = () => {
        setRefreshing(true);
        fetchSpots();
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={{ marginTop: 10 }}>Loading spots...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Available Spots</Text>

            <FlatList
                data={spots}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 20 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No parking spots available right now.</Text>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.spotCard} activeOpacity={0.7}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.address}>{item.address}</Text>
                            <Text style={styles.city}>{item.city}</Text>
                            {item.description ? (
                                <Text style={styles.description} numberOfLines={1}>
                                    {item.description}
                                </Text>
                            ) : null}
                        </View>
                        <View style={styles.priceTag}>
                            <Text style={styles.price}>${item.hourlyRate}</Text>
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
    headerTitle: { fontSize: 24, fontWeight: '800', padding: 20, color: '#1A1A1A' },
    spotCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    address: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
    city: { color: '#007AFF', fontSize: 13, fontWeight: '600', marginTop: 2 },
    description: { color: '#666', fontSize: 12, marginTop: 4, fontStyle: 'italic' },
    priceTag: { alignItems: 'flex-end', marginLeft: 10 },
    price: { fontSize: 18, fontWeight: '800', color: '#28A745' },
    perHour: { fontSize: 12, color: '#666' },
    emptyText: { textAlign: 'center', color: '#999', marginTop: 50, fontSize: 16 }
});