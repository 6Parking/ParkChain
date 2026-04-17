import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function RentOutScreen() {
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAddSpot = () => {
        if (!address || !price) {
            Alert.alert('Error', 'Address and price are required!');
            return;
        }
        Alert.alert('Success', 'Parking spot listed correctly!');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 25 }}>
            <Text style={styles.title}>List Your Spot</Text>
            <Text style={styles.subtitle}>Enter details about your parking space</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Street, City"
                    value={address}
                    onChangeText={setAddress}
                />

                <Text style={styles.label}>Price per hour ($)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. 4.50"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={setPrice}
                />

                <Text style={styles.label}>Description (Optional)</Text>
                <TextInput
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Tell users more about the spot..."
                    multiline
                    value={description}
                    onChangeText={setDescription}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleAddSpot}>
                    <Text style={styles.submitText}>Publish Listing</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    title: { fontSize: 28, fontWeight: '800', color: '#1A1A1A' },
    subtitle: { fontSize: 16, color: '#666', marginBottom: 30 },
    form: { backgroundColor: '#fff', padding: 20, borderRadius: 20, elevation: 4 },
    label: { fontSize: 14, fontWeight: '600', color: '#444', marginBottom: 8 },
    input: { backgroundColor: '#F3F4F6', padding: 15, borderRadius: 12, marginBottom: 20 },
    submitButton: { backgroundColor: '#28A745', padding: 18, borderRadius: 12, alignItems: 'center' },
    submitText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});