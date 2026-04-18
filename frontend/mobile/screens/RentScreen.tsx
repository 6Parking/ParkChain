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
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { URL } from '../config'; // Imported from teammate's code

// Added navigation prop to the component
export default function RentScreen({ navigation }: any) {
    // UI State (Yours)
    const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
    const [selectedSpot, setSelectedSpot] = useState<any | null>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 52.231,
        longitude: 21.001,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    // Data State (Teammate's)
    const [spots, setSpots] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Fetch data from real backend
    const fetchSpots = async () => {
        try {
            const response = await fetch(`${URL}/parking`);
            const data = await response.json();

            if (response.ok) {
                setSpots(data);
            } else {
                console.error("Server Error:", data.error);
            }
        } catch (error) {
            console.error("Connection Error:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    // Initialize location and fetch spots on mount
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let currentLocation = await Location.getCurrentPositionAsync({});
                setMapRegion({
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                });
            }
        })();

        fetchSpots(); // Call teammate's fetch function
    }, []);

    // Pull-to-refresh logic
    const onRefresh = () => {
        setRefreshing(true);
        fetchSpots();
    };

    // Navigation function used by both list and map button
    const handleBookSpot = (spot: any) => {
        // Map backend schema (hourlyRate) to what RentSelectedSpot expects (price)
        const formattedSpot = {
            ...spot,
            price: spot.hourlyRate.toString(), // RentSelectedSpot expects a string for basePrice parsing
        };
        navigation.navigate('RentSelectedSpot', { spot: formattedSpot });
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={{ marginTop: 10 }}>Loading spots...</Text>
            </View>
        );
    }

    // Teammate's updated List View rendering function
    const renderList = () => (
        <FlatList
            data={spots}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 20, paddingTop: 80 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No parking spots available right now.</Text>
            }
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.spotCard}
                    activeOpacity={0.7}
                    // Changed onPress to navigate directly
                    onPress={() => handleBookSpot(item)}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.address}>{item.address}</Text>
                        <Text style={styles.city}>{item.city}</Text>
                        {item.description ? (
                            <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
                        ) : null}
                    </View>
                    <View style={styles.priceTag}>
                        {/* Updated to teammate's database schema: hourlyRate */}
                        <Text style={styles.price}>{item.hourlyRate} PLN</Text>
                        <Text style={styles.perHour}>/h</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Google Places Search Bar */}
            <View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                    placeholder="Where do you want to park?"
                    fetchDetails={true}
                    onPress={(data: any, details: any = null) => {
                        if (details) {
                            setMapRegion({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.02,
                                longitudeDelta: 0.02,
                            });
                            setViewMode('map');
                        }
                    }}
                    query={{
                        key: 'YOUR_GOOGLE_CLOUD_API_KEY_HERE', // <--- REPLACE THIS!
                        language: 'en',
                    }}
                    styles={{
                        textInput: styles.searchInput,
                        container: { flex: 0 },
                        listView: { backgroundColor: 'white', borderRadius: 10, elevation: 5 }
                    }}
                />
            </View>

            {/* Render Map or List */}
            {viewMode === 'map' ? (
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={true}
                        region={mapRegion}
                        onPress={() => setSelectedSpot(null)}
                    >
                        {spots.map((spot) => (
                            // IMPORTANT: Backend must provide spot.latitude and spot.longitude!
                            <Marker
                                key={spot.id}
                                coordinate={{
                                    latitude: spot.latitude || 52.231, // Fallback to prevent crash if backend is missing data
                                    longitude: spot.longitude || 21.001
                                }}
                                onPress={(e: any) => {
                                    e.stopPropagation();
                                    setSelectedSpot(spot);
                                }}
                            >
                                <View style={styles.markerContainer}>
                                    <Text style={styles.markerText} numberOfLines={1}>
                                        {spot.hourlyRate} PLN
                                    </Text>
                                </View>
                            </Marker>
                        ))}
                    </MapView>
                </View>
            ) : (
                renderList()
            )}

            {/* Selected Spot Bottom Sheet */}
            {selectedSpot && viewMode === 'map' && (
                <View style={styles.bottomSheet}>
                    <View style={styles.bottomSheetHeader}>
                        <Text style={styles.sheetAddress}>{selectedSpot.address}</Text>
                        <Text style={styles.sheetPrice}>{selectedSpot.hourlyRate} PLN/h</Text>
                    </View>
                    <Text style={styles.sheetCity}>{selectedSpot.city}</Text>

                    {/* Changed onPress to navigate with the selectedSpot */}
                    <TouchableOpacity
                        style={styles.bookButton}
                        onPress={() => handleBookSpot(selectedSpot)}
                    >
                        <Text style={styles.bookButtonText}>Book This Spot</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Toggle Button */}
            <TouchableOpacity
                style={[
                    styles.toggleButton,
                    selectedSpot && viewMode === 'map' ? { bottom: 200 } : {}
                ]}
                onPress={() => setViewMode(prev => prev === 'map' ? 'list' : 'map')}
            >
                <Text style={styles.toggleButtonText}>
                    {viewMode === 'map' ? '📄 Show List' : '🗺️ Show Map'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    searchContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        paddingHorizontal: 20,
        zIndex: 10,
    },
    searchInput: {
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    mapContainer: { flex: 1 },
    map: { ...StyleSheet.absoluteFillObject },
    markerContainer: {
        backgroundColor: '#28A745',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        //minWidth: 50,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerText: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 14, },

    // Combined List Styles
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
    emptyText: { textAlign: 'center', color: '#999', marginTop: 50, fontSize: 16 },

    // Bottom Sheet Styles
    bottomSheet: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    bottomSheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    sheetAddress: { fontSize: 18, fontWeight: '800', color: '#1A1A1A', flex: 1 },
    sheetPrice: { fontSize: 22, fontWeight: '800', color: '#28A745' },
    sheetCity: { color: '#007AFF', marginTop: 5, marginBottom: 15, fontWeight: '600' },
    bookButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 12, alignItems: 'center' },
    bookButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

    toggleButton: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        backgroundColor: '#1A1A1A',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    toggleButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});