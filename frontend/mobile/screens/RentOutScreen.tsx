import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity,
    Alert, ScrollView, KeyboardAvoidingView,
    Platform, Image, ActivityIndicator
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import DateTimePickerModal from "react-native-modal-datetime-picker";
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
    const [roofed, setRoofed] = useState('no');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestingPrice, setSuggestingPrice] = useState(false);
    const [image, setImage] = useState<string | null>(null);
    const [availabilityMode, setAvailabilityMode] = useState('24_7');
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [specificDate, setSpecificDate] = useState('');

    const getMidnightDate = () => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    };

    const [startTime, setStartTime] = useState(getMidnightDate());
    const [endTime, setEndTime] = useState(getMidnightDate());
    const [startOnce, setStartOnce] = useState(getMidnightDate());
    const [endOnce, setEndOnce] = useState(getMidnightDate());
    const [showPicker, setShowPicker] = useState<{show: boolean, field: string}>({show: false, field: ''});

    const [coordinate, setCoordinate] = useState({
        latitude: 52.2297,
        longitude: 21.0122,
    });

    const spot = route.params?.spot;
    const getValidDate = (d: any) => {
        if (d instanceof Date && !isNaN(d.getTime())) return d;
        if (typeof d === 'string') {
            const parsed = new Date(d);
            return isNaN(parsed.getTime()) ? new Date() : parsed;
        }
        return new Date();
    };

    useEffect(() => {
        if (spot?.id) {
            updateFields(spot);
            fetchFreshSpotData(spot.id);
        } else {
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status === 'granted') {
                    let loc = await Location.getCurrentPositionAsync({});
                    setCoordinate({ latitude: loc.coords.latitude, longitude: loc.coords.longitude });
                    handleReverseGeocode(loc.coords.latitude, loc.coords.longitude);
                }
            })();
        }
    }, [spot?.id])


    const fetchFreshSpotData = async (id: number) => {
        try {
            const token = await SecureStore.getItemAsync('userToken');
            const response = await fetch(`${URL}/parking/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });

            const contentType = response.headers.get("content-type");
            if (response.ok && contentType && contentType.indexOf("application/json") !== -1) {
                const freshData = await response.json();
                updateFields(freshData);
            } else {
                const errorText = await response.text();
                console.error("Server returned non-JSON response. Check endpoint URL.", errorText);
            }
        } catch (error) {
            console.error("Error fetching fresh spot data:", error);
        }
    };


    const updateFields = (data: any) => {
        setCity(data.city || '');
        setStreet(data.street || '');
        setHouseNumber(data.houseNumber || '');
        setPrice(data.hourlyRate?.toString() || '');
        setSize(data.size || 'medium');
        setEvcharger(data.hasCharger ? 'yes' : 'no');
        setRoofed(data.hasRoof ? 'yes' : 'no');
        setDescription(data.description || '');
        if (data.availabilityMode) setAvailabilityMode(data.availabilityMode);

        if (data.availabilities && data.availabilities.length > 0) {
            if (data.availabilityMode === 'RECURRING') {
                const days = data.availabilities.map((a: any) => a.dayOfWeek);
                setSelectedDays(days);

                const [sh, sm] = (data.availabilities[0].startTime || "00:00").split(':');
                const startD = new Date();
                startD.setHours(parseInt(sh), parseInt(sm), 0, 0);
                setStartTime(startD);

                const [eh, em] = (data.availabilities[0].endTime || "00:00").split(':');
                const endD = new Date();
                endD.setHours(parseInt(eh), parseInt(em), 0, 0);
                setEndTime(endD);
            }
            if (data.availabilityMode === 'ONCE' && data.availabilities[0].startDateTime) {
                setStartOnce(new Date(data.availabilities[0].startDateTime));
                setEndOnce(new Date(data.availabilities[0].endDateTime));
            }
        }
        if (data.latitude && data.longitude) {
            setCoordinate({ latitude: data.latitude, longitude: data.longitude });
        }
    };
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


    const handleMapPress = (e: any) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setCoordinate({ latitude, longitude });
        handleReverseGeocode(latitude, longitude);
    };


    const handleSuggestPrice = async () => {
        setSuggestingPrice(true);
        try {

            const currentHour = new Date().getHours() + ":00";
            const response = await fetch(`${URL}/pricing/suggestPrice`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    lat: coordinate.latitude,
                    lng: coordinate.longitude,
                    standardPrice: 5.0,
                    hour: currentHour,
                    weather: 'sunny',
                    isEventNearby: false
                }),
            });

            const data = await response.json();
            if (data.price) {
                setPrice(data.price.toString());
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
    const handleConfirm = (date: Date) => {
        const adjustedDate = new Date(date);

        if (showPicker.field === 'startRec') setStartTime(adjustedDate);
        else if (showPicker.field === 'endRec') setEndTime(adjustedDate);
        else if (showPicker.field === 'startOnce') setStartOnce(adjustedDate);
        else if (showPicker.field === 'endOnce') setEndOnce(adjustedDate);

        setShowPicker({ show: false, field: '' });
    };

    const hidePicker = () => {
        setShowPicker({ show: false, field: '' });
    };
    const handlePublish = async () => {
        if (!city.trim() || !street.trim() || !houseNumber.trim() || !price.trim()) {
            Alert.alert('Error', 'Please fill in the city, street, number, and price.');
            return;
        }


        if (availabilityMode === 'RECURRING') {
            if (selectedDays.length === 0) {
                Alert.alert('Validation Error', 'Please select at least one day.');
                return;
            }

            if (startTime.getTime() >= endTime.getTime()) {
                Alert.alert('Validation Error', 'End time must be after start time.');
                return;
            }
        }

        if (availabilityMode === 'ONCE') {
            if (startOnce.getTime() >= endOnce.getTime()) {
                Alert.alert('Validation Error', 'The end date/time must be after the start date/time.');
                return;
            }

            if (startOnce.getTime() < new Date().getTime()) {
                Alert.alert('Validation Error', 'Start time cannot be in the past.');
                return;
            }
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
                    hasRoof: roofed === 'yes',
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    availabilityMode: availabilityMode,
                    availabilityData: availabilityMode === 'RECURRING'
                        ? {
                            days: selectedDays,
                            start: startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}),
                            end: endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})
                        }
                        : availabilityMode === 'ONCE'
                            ? { start: startOnce.toISOString(), end: endOnce.toISOString() }
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
    const onDateChange = (event: any, selectedDate?: Date) => {
        if (event.type === 'dismissed') {
            setShowPicker({ show: false, field: '' });
            return;
        }

        if (selectedDate) {
            if (showPicker.field === 'startRec') setStartTime(selectedDate);
            else if (showPicker.field === 'endRec') setEndTime(selectedDate);
            else if (showPicker.field === 'startOnce') setStartOnce(selectedDate);
            else if (showPicker.field === 'endOnce') setEndOnce(selectedDate);
        }

        if (Platform.OS === 'android') {
            setTimeout(() => {
                setShowPicker({ show: false, field: '' });
            }, 100);
        } else {
            if (event.type === 'set' && !showPicker.field.includes('Once')) {
                setShowPicker({ show: false, field: '' });
            }
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

                        <Text style={styles.label}>Roofed</Text>
                        <SegmentedButtons
                            style={styles.segmentedButtons}
                            value={roofed}
                            onValueChange={setRoofed}
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
                            theme={{ colors: { secondaryContainer: '#4c4d4c', onSecondaryContainer: 'white' } }}
                        />


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
                                        <TouchableOpacity
                                            style={styles.timePickerButton}
                                            onPress={() => setShowPicker({show: true, field: 'startRec'})}
                                        >
                                            <Text style={styles.timeText}>{startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.48 }}>
                                        <Text style={styles.subLabel}>To</Text>
                                        <TouchableOpacity
                                            style={styles.timePickerButton}
                                            onPress={() => setShowPicker({show: true, field: 'endRec'})}
                                        >
                                            <Text style={styles.timeText}>{endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}

                        {availabilityMode === 'ONCE' && (
                            <View style={styles.subForm}>
                                <Text style={styles.subLabel}>Start Date & Time</Text>
                                <TouchableOpacity
                                    style={styles.timePickerButton}
                                    onPress={() => setShowPicker({show: true, field: 'startOnce'})}
                                >
                                    <Text style={styles.timeText}>
                                        {startOnce.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                                    </Text>
                                </TouchableOpacity>

                                <Text style={[styles.subLabel, {marginTop: 15}]}>End Date & Time</Text>
                                <TouchableOpacity
                                    style={styles.timePickerButton}
                                    onPress={() => setShowPicker({show: true, field: 'endOnce'})}
                                >
                                    <Text style={styles.timeText}>
                                        {endOnce.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                                    </Text>
                                </TouchableOpacity>
                                {Platform.OS === 'ios' && showPicker.show && (
                                    <TouchableOpacity
                                        onPress={() => setShowPicker({show: false, field: ''})}
                                        style={{ marginTop: 10, alignItems: 'center' }}
                                    >
                                        <Text style={{ color: '#6C63FF', fontWeight: 'bold' }}>Done</Text>
                                    </TouchableOpacity>
                                )}
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
                        <DateTimePickerModal
                            isVisible={showPicker.show}
                            mode={showPicker.field.includes('Once') ? "datetime" : "time"}
                            date={
                                showPicker.field === 'startOnce' ? getValidDate(startOnce) :
                                    showPicker.field === 'endOnce' ? getValidDate(endOnce) :
                                        showPicker.field === 'startRec' ? getValidDate(startTime) : getValidDate(endTime)
                            }
                            onConfirm={handleConfirm}
                            onCancel={hidePicker}
                            is24Hour={true}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        />
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
    priceRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    aiButton: {
        backgroundColor: '#6C63FF',
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
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
    timePickerButton: {
        backgroundColor: '#F3F4F6',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A'
    },
});