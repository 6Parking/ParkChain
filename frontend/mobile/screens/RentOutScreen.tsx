import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity,
    Alert, ScrollView, KeyboardAvoidingView,
    Platform, Image, ActivityIndicator
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { URL } from '../config';
import { SegmentedButtons } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RentOutScreen({ route, navigation }: any) {
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('medium');
    const [evcharger, setEvcharger] = useState('no');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestingPrice, setSuggestingPrice] = useState(false);
    const [image, setImage] = useState<string | null>(null);
    const [availabilityMode, setAvailabilityMode] = useState('24_7');
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [specificDate, setSpecificDate] = useState('');
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('16:00');
    const [startOnce, setStartOnce] = useState('');
    const [endOnce, setEndOnce] = useState('');

    // Map State
    const [coordinate, setCoordinate] = useState({
        latitude: 52.2297, // Default Warsaw
        longitude: 21.0122,
    });

    const spot = route.params?.spot;

    // Initialize data if editing an existing spot, or grab user's GPS if creating a new one
    useEffect(() => {
        if (spot) {
            setCity(spot.city || '');
            setStreet(spot.street || '');
            setHouseNumber(spot.houseNumber || '');
            setPrice(spot.hourlyRate?.toString() || '');
            setSize(spot.size || 'medium');
            setEvcharger(spot.hasCharger ? 'yes' : 'no');
            setDescription(spot.description || '');
            if (spot.availabilityMode) setAvailabilityMode(spot.availabilityMode);
            if (spot.availabilities && spot.availabilities.length > 0) {
                if (spot.availabilityMode === 'RECURRING') {
                    const days = spot.availabilities.map((a: any) => a.dayOfWeek);
                    setSelectedDays(days);
                }
                if (spot.availabilityMode === 'ONCE' && spot.availabilities[0].specificDate) {
                    const dateStr = spot.availabilities[0].specificDate.split('T')[0];
                    setSpecificDate(dateStr);
                }
                setStartTime(spot.availabilities[0].startTime || '08:00');
                setEndTime(spot.availabilities[0].endTime || '16:00');
            }
            if (spot.latitude && spot.longitude) {
                setCoordinate({ latitude: spot.latitude, longitude: spot.longitude });
            }
        } else {
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status === 'granted') {
                    let loc = await Location.getCurrentPositionAsync({});
                    setCoordinate({
                        latitude: loc.coords.latitude,
                        longitude: loc.coords.longitude
                    });
                    // Reverse geocode initial location
                    handleReverseGeocode(loc.coords.latitude, loc.coords.longitude);
                }
            })();
        }
    }, [spot]);

    // Reverse Geocoding: translates GPS coordinates to real addresses
    const handleReverseGeocode = async (lat: number, lng: number) => {
        try {
            const addressArray = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lng });
            if (addressArray.length > 0) {
                const addr = addressArray[0];
                setCity(addr.city || addr.subregion || '');
                setStreet(addr.street || '');
                setHouseNumber(addr.streetNumber || '');
            }
        } catch (error) {
            console.error('Geocoding error:', error);
        }
    };

    // Update pin location and fetch address when user taps the map
    const handleMapPress = (e: any) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setCoordinate({ latitude, longitude });
        handleReverseGeocode(latitude, longitude);
    };

    // ✨ OPTIMIZED AI FUNCTION: Now uses exact map coordinates instantly!
    const handleSuggestPrice = async () => {
        setSuggestingPrice(true);
        try {
            // 2. Zapytanie do Twojego backendu AI
            const currentHour = new Date().getHours() + ":00";
            const response = await fetch(`${URL}/pricing/suggestPrice`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    lat: coordinate.latitude,   // We now use map coordinates directly!
                    lng: coordinate.longitude,
                    standardPrice: 5.0, // egz. price
                    hour: currentHour,
                    weather: 'sunny', // statistic weather
                    isEventNearby: false

                }),
            });

            const data = await response.json();
            if (data.price) {
                setPrice(data.price.toString()); // Wpisanie ceny do pola
            } else {
                Alert.alert('Error', 'AI could not generate a price.');
            }

        } catch (error) {
            console.error(error);
            Alert.alert('Connection Error', 'Could not reach the AI pricing server.');
        } finally {
            setSuggestingPrice(false);
        }
    };

    const handlePublish = async () => {
        if (!city.trim() || !street.trim() || !houseNumber.trim() || !price.trim()) {
            Alert.alert('Error', 'Please fill in the city, street, number, and price.');
            return;
        }

        setLoading(true);
        try {
            const token = await SecureStore.getItemAsync('userToken');

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
                    hasCharger: evcharger === 'yes',
                    // Sending exact map coordinates to the backend!
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    availabilityMode: availabilityMode,
                    availabilityData: availabilityMode === 'RECURRING'
                        ? { days: selectedDays, start: startTime, end: endTime }
                        : availabilityMode === 'ONCE'
                            ? {
                                start: startOnce,
                                end: endOnce
                            }
                            : null
                }),
            });

            if (response.ok) {
                Alert.alert('Success', spot ? 'Spot updated!' : 'Spot added!');
                navigation.goBack();
            } else {
                const data = await response.json();
                Alert.alert('Error', data.error || 'Failed to save.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Connection Error', 'Check if backend is running and URL is correct.');
        } finally {
            setLoading(false);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{spot ? 'Edit Your Spot' : 'List Your Spot'}</Text>
                        <Text style={styles.subtitle}>Provide details about your parking space</Text>
                    </View>

                    {/* INTERACTIVE MAP FOR DROPPING PIN */}
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{
                                latitude: coordinate.latitude,
                                longitude: coordinate.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                            region={{
                                latitude: coordinate.latitude,
                                longitude: coordinate.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                            onPress={handleMapPress}
                        >
                            <Marker coordinate={coordinate} title="Your Parking Spot" />
                        </MapView>
                        <View style={styles.mapOverlay}>
                            <Text style={styles.mapInstruction}>Tap map to set location 📍</Text>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>City</Text>
                        <TextInput style={styles.input} placeholder="e.g. Warsaw" value={city} onChangeText={setCity} />

                        <View style={styles.row}>
                            <View style={{ flex: 0.7 }}>
                                <Text style={styles.label}>Street</Text>
                                <TextInput style={styles.input} placeholder="e.g. Długa" value={street} onChangeText={setStreet} />
                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={styles.label}>No.</Text>
                                <TextInput style={styles.input} placeholder="12" value={houseNumber} onChangeText={setHouseNumber} />
                            </View>
                        </View>

                        {/* Prize section and AI button */}
                        <Text style={styles.label}>Price per hour (PLN)</Text>
                        <View style={styles.priceRowContainer}>
                            <TextInput
                                style={[styles.input, { flex: 1, marginBottom: 0 }]}
                                placeholder="e.g. 5.50"
                                keyboardType="numeric"
                                value={price}
                                onChangeText={setPrice}
                            />
                            <TouchableOpacity
                                style={styles.aiButton}
                                onPress={handleSuggestPrice}
                                disabled={suggestingPrice}
                            >
                                {suggestingPrice ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <Text style={styles.aiButtonText}>✨ AI Suggest</Text>
                                )}
                            </TouchableOpacity>
                        </View>

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
                        <Text style={styles.label}>Availability Mode</Text>
                        <SegmentedButtons
                            style={styles.segmentedButtons}
                            value={availabilityMode}
                            onValueChange={setAvailabilityMode}
                            buttons={[
                                { value: '24_7', label: '24/7' },
                                { value: 'RECURRING', label: 'Days' },
                                { value: 'ONCE', label: 'Once' },
                            ]}
                            theme={{ colors: { secondaryContainer: '#6C63FF', onSecondaryContainer: 'white' } }}
                        />

                        {/* Tryb RECURRING: Wybór dni tygodnia */}
                        {availabilityMode === 'RECURRING' && (
                            <View style={styles.subForm}>
                                <Text style={styles.subLabel}>Active Days</Text>
                                <View style={styles.daysRow}>
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={[styles.dayButton, selectedDays.includes(index) && styles.dayButtonActive]}
                                            onPress={() => {
                                                setSelectedDays(prev =>
                                                    prev.includes(index) ? prev.filter(d => d !== index) : [...prev, index]
                                                );
                                            }}
                                        >
                                            <Text style={[styles.dayButtonText, selectedDays.includes(index) && styles.dayButtonTextActive]}>
                                                {day}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.row}>
                                    <View style={{ flex: 0.48 }}>
                                        <Text style={styles.subLabel}>From</Text>
                                        <TextInput style={styles.input} placeholder="08:00" value={startTime} onChangeText={setStartTime} />
                                    </View>
                                    <View style={{ flex: 0.48 }}>
                                        <Text style={styles.subLabel}>To</Text>
                                        <TextInput style={styles.input} placeholder="16:00" value={endTime} onChangeText={setEndTime} />
                                    </View>
                                </View>
                            </View>
                        )}

                        {/* Tryb ONCE: Wybór konkretnej daty */}
                        {availabilityMode === 'ONCE' && (
                            <View style={styles.subForm}>
                                <Text style={styles.subLabel}>From (Date and Time)</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="YYYY-MM-DD HH:MM"
                                    value={startOnce}
                                    onChangeText={setStartOnce}
                                />
                                <Text style={styles.subLabel}>To (Date and Time)</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="YYYY-MM-DD HH:MM"
                                    value={endOnce}
                                    onChangeText={setEndOnce}
                                />
                            </View>
                        )}
                        <Text style={styles.label}>Additional Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Describe gate access, etc."
                            multiline
                            value={description}
                            onChangeText={setDescription}
                        />

                        {/* FAKE PHOTO UPLOAD FOR PITCHING / DEMO PURPOSES */}
                        <Text style={styles.label}>Photo (Demo UI)</Text>
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

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    scrollContent: { padding: 25 },
    header: { marginBottom: 25 },
    title: { fontSize: 26, fontWeight: '800', color: '#1A1A1A' },
    subtitle: { fontSize: 15, color: '#666', marginTop: 5 },

    // Map Styles
    mapContainer: {
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapOverlay: {
        position: 'absolute',
        top: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    mapInstruction: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1A1A1A',
    },

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
    label: { fontSize: 13, fontWeight: '700', color: '#444', marginBottom: 8, marginLeft: 2, marginTop: 10 },
    input: {
        backgroundColor: '#F3F4F6',
        padding: 14,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#1A1A1A'
    },
    // STYLE DLA RZĘDU Z CENĄ I PRZYCISKIEM AI:
    priceRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    aiButton: {
        backgroundColor: '#6C63FF', // Ładny fioletowy kolor pod AI
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 52, // Dopasowanie wysokości do TextInput
    },
    aiButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
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
    segmentedButtons: { marginBottom: 10 },
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
    subForm: {
        backgroundColor: '#F9F9FF',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0E0FF'
    },
    subLabel: { fontSize: 12, fontWeight: '600', color: '#666', marginBottom: 5 },
    daysRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    dayButton: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayButtonActive: { backgroundColor: '#6C63FF', borderColor: '#6C63FF' },
    dayButtonText: { fontSize: 12, fontWeight: '700', color: '#444' },
    dayButtonTextActive: { color: '#fff' },
});