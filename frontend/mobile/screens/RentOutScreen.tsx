import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { URL } from '../config';
import { SegmentedButtons } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function RentOutScreen() {
    // State for address components
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('medium');
    const [evcharger, setEvcharger] = useState('no');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const handlePublish = async () => {
        if (!city.trim() || !street.trim() || !houseNumber.trim() || !price.trim()) {
            Alert.alert('Error', 'Please fill in the city, street, number, and price.');
            return;
        }

        setLoading(true);

        try {
            const token = await SecureStore.getItemAsync('userToken');

            if (!token) {
                Alert.alert('Error', 'You must be logged in to add a spot.');
                setLoading(false);
                return;
            }

            // Sending split address data to backend
            const response = await fetch(`${URL}/parking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    city: city.trim(),
                    street: street.trim(),
                    houseNumber: houseNumber.trim(),
                    hourlyRate: parseFloat(price.replace(',', '.')),
                    description: description.trim()
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Your spot has been added!');
                setCity('');
                setStreet('');
                setHouseNumber('');
                setPrice('');
                setDescription('');
            } else {
                Alert.alert('Error', data.error || 'Failed to add the spot.');
            }
        } catch (error) {
            console.error(error);
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
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>List Your Spot</Text>
                        <Text style={styles.subtitle}>Provide a precise address to help with location</Text>
                    </View>

                    <View style={styles.form}>
                        {/* CITY FIELD */}
                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. London"
                            value={city}
                            onChangeText={setCity}
                        />

                        {/* STREET AND NUMBER ROW */}
                        <View style={styles.row}>
                            <View style={{ flex: 0.7 }}>
                                <Text style={styles.label}>Street</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="e.g. Baker St"
                                    value={street}
                                    onChangeText={setStreet}
                                />
                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={styles.label}>No.</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="221B"
                                    value={houseNumber}
                                    onChangeText={setHouseNumber}
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>Price per hour ($)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. 4.50"
                            keyboardType="numeric"
                            value={price}
                            onChangeText={setPrice}
                        />

                        <Text style={styles.label}>Size</Text>
                        <SegmentedButtons
                            style={styles.SegmentedButtons}
                            value={size}
                            onValueChange={setSize}
                            buttons={[
                                { value: 'small', label: 'Small' },
                                { value: 'medium', label: 'Medium' },
                                { value: 'big', label: 'Big' },
                            ]}
                            theme={{ colors: { secondaryContainer: '#4c4d4c' } }}
                        />

                        <Text style={styles.label}>EV charger</Text>
                        <SegmentedButtons
                            style={styles.SegmentedButtons}
                            value={evcharger}
                            onValueChange={setEvcharger}
                            buttons={[
                                { value: 'no', label: 'No' },
                                { value: 'yes', label: 'Yes' },
                            ]}
                            theme={{ colors: { secondaryContainer: '#4c4d4c' } }}
                        />

                        <Text style={styles.label}>Additional Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Describe how to find it, gate access, etc."
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <Text style={styles.label}>Photo</Text>
                        <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.previewImage} />
                            ) : (
                                <Text>Click to add photo</Text>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.submitButton, loading && styles.disabledButton]}
                            onPress={handlePublish}
                            disabled={loading}
                        >
                            <Text style={styles.submitText}>
                                {loading ? 'Locating address...' : 'Publish Spot'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

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
    label: { fontSize: 13, fontWeight: '700', color: '#444', marginBottom: 6, marginLeft: 2 },
    input: {
        backgroundColor: '#F3F4F6',
        padding: 14,
        borderRadius: 10,
        marginBottom: 18,
        fontSize: 16
    },
    textArea: { height: 80, textAlignVertical: 'top' },
    submitButton: {
        backgroundColor: '#28A745',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5
    },
    disabledButton: { backgroundColor: '#94d3a2' },
    submitText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    SegmentedButtons: { marginBottom: 20 },
    imagePlaceholder: {
        backgroundColor: '#F3F4F6',
        height: 150,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
        overflow: 'hidden'
    },
    previewImage: { width: '100%', height: '100%', },
});