import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const MOCK_PARKINGS = [
    { id: '1', address: 'Warsaw, Złota 44', price: '5.00', distance: '200m' },
    { id: '2', address: 'Kraków, Rynek Główny', price: '7.50', distance: '1.2km' },
    { id: '3', address: 'Gdańsk, Długa 12', price: '4.20', distance: '500m' },
];

export default function RentScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Available Spots</Text>
            <FlatList
                data={MOCK_PARKINGS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.spotCard}>
                        <View>
                            <Text style={styles.address}>{item.address}</Text>
                            <Text style={styles.distance}>{item.distance} away</Text>
                        </View>
                        <View style={styles.priceTag}>
                            <Text style={styles.price}>${item.price}</Text>
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
    distance: { color: '#666', marginTop: 4 },
    priceTag: { alignItems: 'flex-end' },
    price: { fontSize: 18, fontWeight: '800', color: '#007AFF' },
    perHour: { fontSize: 12, color: '#666' }
});