import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity,
    Alert, ScrollView, SafeAreaView, KeyboardAvoidingView,
    Platform, Image,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { URL } from '../config';
import { SegmentedButtons } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function RentOutScreen({ route, navigation }: any) {
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('medium');
    const [evcharger, setEvcharger] = useState('no');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    // Pobieramy spot z parametrów (jeśli edycja)
    const spot = route.params?.spot;

    useEffect(() => {
        if (spot) {
            setCity(spot.city || '');
            // Jeśli adres jest złączony, a chcesz go edytować, wpisujemy go w ulicę:
            setStreet(spot.street || '');
            setHouseNumber(spot.houseNumber || ''); // Uzupełnij jeśli masz to w backendzie osobo
            setPrice(spot.hourlyRate?.toString() || '');
            setSize(spot.size || 'medium');
            setEvcharger(spot.hasCharger ? 'yes' : 'no');
            setDescription(spot.description || '');
        } else {
            // Czyścimy formularz jeśli wchodzimy w tryb "Dodaj"
            setCity(''); setStreet(''); setHouseNumber(''); setPrice('');
            setDescription(''); setSize('medium'); setEvcharger('no');
        }
    }, [spot]);

    const handlePublish = async () => {
        if (!city.trim() || !street.trim() || !houseNumber.trim() || !price.trim()) {
            Alert.alert('Error', 'Please fill in the city, street, number, and price.');
            return;
        }

        setLoading(true);
        try {
            const token = await SecureStore.getItemAsync('userToken');
            if (!token) {
                Alert.alert('Error', 'You must be logged in.');
                setLoading(false);
                return;
            }

            // Decydujemy czy to POST (nowy) czy PUT (edycja)
            const method = spot ? 'PUT' : 'POST';
            const endpoint = spot ? `${URL}/parking/${spot.id}` : `${URL}/parking`;

            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    city: city.trim(),
                    street: street.trim(),
                    houseNumber: houseNumber.trim(),
                    hourlyRate: parseFloat(price.replace(',', '.')),
                    description: description.trim(),
                    size: size,
                    hasCharger: evcharger === 'yes'
                }),
            });

            if (response.ok) {
                Alert.alert('Success', spot ? 'Spot updated!' : 'Spot added!');
                navigation.goBack(); // Wraca do listy
            } else {
                const data = await response.json();
                Alert.alert('Error', data.error || 'Failed to save.');
            }
        } catch (error) {
            Alert.alert('Connection Error', 'Server is unreachable.');
        } finally {
            setLoading(false);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5, // Kompresja dla bazy danych
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{spot ? 'Edit Your Spot' : 'List Your Spot'}</Text>
                        <Text style={styles.subtitle}>Provide details about your parking space</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>City</Text>
                        <TextInput style={styles.input} placeholder="e.g. London" value={city} onChangeText={setCity} />

                        <View style={styles.row}>
                            <View style={{ flex: 0.7 }}>
                                <Text style={styles.label}>Street</Text>
                                <TextInput style={styles.input} placeholder="e.g. Baker St" value={street} onChangeText={setStreet} />
                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={styles.label}>No.</Text>
                                <TextInput style={styles.input} placeholder="221B" value={houseNumber} onChangeText={setHouseNumber} />
                            </View>
                        </View>

                        <Text style={styles.label}>Price per hour ($)</Text>
                        <TextInput style={styles.input} placeholder="e.g. 4.50" keyboardType="numeric" value={price} onChangeText={setPrice} />

                        <Text style={styles.label}>Spot Size</Text>
                        <SegmentedButtons
                            style={styles.segmentedButtons}
                            value={size}
                            onValueChange={setSize}
                            buttons={[
                                { value: 'small', label: 'Small' },
                                { value: 'medium', label: 'Medium' },
                                { value: 'big', label: 'Big' },
                            ]}
                            theme={{ colors: { secondaryContainer: '#4c4d4c', onSecondaryContainer: 'white' } }}
                        />

                        <Text style={styles.label}>EV Charger</Text>
                        <SegmentedButtons
                            style={styles.segmentedButtons}
                            value={evcharger}
                            onValueChange={setEvcharger}
                            buttons={[
                                { value: 'no', label: 'No' },
                                { value: 'yes', label: 'Yes' },
                            ]}
                            theme={{ colors: { secondaryContainer: '#4c4d4c', onSecondaryContainer: 'white' } }}
                        />

                        <Text style={styles.label}>Additional Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Describe gate access, etc."
                            multiline
                            value={description}
                            onChangeText={setDescription}
                        />

                        <Text style={styles.label}>Photo</Text>
                        <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.previewImage} />
                            ) : (
                                <View style={styles.placeholderContainer}>
                                    <Text style={styles.placeholderEmoji}>📷</Text>
                                    <Text style={styles.placeholderText}>Click to add photo</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.submitButton, loading && styles.disabledButton]}
                            onPress={handlePublish}
                            disabled={loading}
                        >
                            <Text style={styles.submitText}>
                                {loading ? 'Processing...' : spot ? 'Update Listing' : 'Publish Listing'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

// ... styles bez zmian

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    scrollContent: { padding: 25 },
    header: { marginBottom: 25 },
    title: { fontSize: 26, fontWeight: '800', color: '#1A1A1A' },
    subtitle: { fontSize: 15, color: '#666', marginTop: 5 },
    form: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    label: { fontSize: 13, fontWeight: '700', color: '#444', marginBottom: 8, marginLeft: 2 },
    input: {
        backgroundColor: '#F3F4F6',
        padding: 14,
        borderRadius: 10,
        marginBottom: 18,
        fontSize: 16,
        color: '#1A1A1A'
    },
    textArea: { height: 80, textAlignVertical: 'top' },
    submitButton: {
        backgroundColor: '#28A745',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10
    },
    disabledButton: { backgroundColor: '#94d3a2' },
    submitText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    segmentedButtons: { marginBottom: 20 },
    imagePlaceholder: {
        backgroundColor: '#F3F4F6',
        height: 160,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
        overflow: 'hidden'
    },
    placeholderContainer: { alignItems: 'center' },
    placeholderEmoji: { fontSize: 30, marginBottom: 5 },
    placeholderText: { color: '#888', fontSize: 14 },
    previewImage: { width: '100%', height: '100%' },
});