import React, { useState } from 'react';
import { URL } from '../config';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    FlatList
} from 'react-native';

export default function RentResult({route, navigation}: any) {
    const spot = route?.params?.spot || {}
    const totalPrice = route?.params?.totalPrice;
    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.headerTitle}>You have succesfully rent parking spot at {spot.address} for {totalPrice}zł.</Text>
            <TouchableOpacity 
                style={styles.rentButton} 
                onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.rentButtonText}>Go to main menu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
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
    size: { color: '#666', marginTop: 4 },
    priceTag: { alignItems: 'flex-end' },
    price: { fontSize: 18, fontWeight: '800', color: '#007AFF' },
    perHour: { fontSize: 12, color: '#666' },
    rentButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 'auto', // Wypycha przycisk na dół ekranu
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    rentButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
    }
});
