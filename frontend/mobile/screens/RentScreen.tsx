import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config'; // Imported from teammate's code

// IMPORT TWOJEGO NOWEGO KOMPONENTU
import PriceMarker from '../components/PriceMarker';

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

        fetchSpots(); 
    }, []);

    const handleBookSpot = (spot: any) => {
        navigation.navigate('RentSelectedSpot', {
            spot: { ...spot, price: spot.hourlyRate.toString() }
        });
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                    placeholder="Where do you want to park?"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
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
                    query={{ key: 'YOUR_API_KEY', language: 'en' }}
                    styles={{ textInput: styles.searchInput }}
                />
            </View>

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
                            <PriceMarker
                                key={spot.id}
                                price={spot.hourlyRate}
                                coordinate={{
                                    latitude: spot.latitude || 52.231,
                                    longitude: spot.longitude || 21.001
                                }}
                                onPress={() => setSelectedSpot(spot)}
                            />
                        ))}
                    </MapView>
                </View>
            ) : (
                <FlatList
                    data={spots}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.spotCard} onPress={() => handleBookSpot(item)}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.address}>{item.address}</Text>
                                <Text style={styles.city}>{item.city}</Text>
                            </View>
                            <View style={styles.priceTag}>
                                <Text style={styles.price}>{item.hourlyRate} PLN</Text>
                                <Text style={styles.perHour}>/h</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{ padding: 20, paddingTop: 80 }}
                />
            )}

            {selectedSpot && viewMode === 'map' && (
                <View style={styles.bottomSheet}>
                    <Text style={styles.sheetAddress}>{selectedSpot.address}</Text>
                    <Text style={styles.sheetPrice}>{selectedSpot.hourlyRate} PLN/h</Text>
                    <TouchableOpacity style={styles.bookButton} onPress={() => handleBookSpot(selectedSpot)}>
                        <Text style={styles.bookButtonText}>Book This Spot</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={[styles.toggleButton, selectedSpot && viewMode === 'map' ? { bottom: 250 } : {}]}
                onPress={() => setViewMode(prev => prev === 'map' ? 'list' : 'map')}
            >
                <Text style={styles.toggleButtonText}>
                    {viewMode === 'map' ? '📄 Show List' : '🗺️ Show Map'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

// Style pozostają bez zmian (jak w Twoim oryginale)
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    searchContainer: {
        position: 'absolute',
        top: 40,
        width: '90%',
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
    spotCard: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', elevation: 3 },
    address: { fontSize: 16, fontWeight: '700' },
    city: { color: '#007AFF', fontSize: 13 },
    priceTag: { alignItems: 'flex-end' },
    price: { fontSize: 18, fontWeight: '800', color: '#28A745' },
    perHour: { fontSize: 12, color: '#666' },
    bottomSheet: { position: 'absolute', bottom: 60, left: 20, right: 20, backgroundColor: '#fff', borderRadius: 20, padding: 20, elevation: 10 },
    sheetAddress: { fontSize: 18, fontWeight: '800' },
    sheetPrice: { fontSize: 22, fontWeight: '800', color: '#28A745' },
    bookButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 10 },
    bookButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    toggleButton: { position: 'absolute', bottom: 60, alignSelf: 'center', backgroundColor: '#1A1A1A', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25, elevation: 5 },
    toggleButtonText: { color: '#fff', fontWeight: 'bold' },
});
