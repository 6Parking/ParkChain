import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config'; // Upewnij się, że masz ten import

export default function RentSelectedSpot({ route, navigation }: any) {
    const spot = route?.params?.spot || {
        id: null,
        address: 'Brak danych',
        price: '4.50',
        size: '-'
    };

    const [selectedHours, setSelectedHours] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Stan ładowania dla przycisku

    const basePrice = parseFloat(spot.price || 0);
    const totalPrice = (basePrice * selectedHours).toFixed(2);
    const timeOptions = Array.from({ length: 12 }, (_, i) => i + 1);

    // Nowa funkcja obsługująca proces rezerwacji
    const handleRentConfirm = async () => {
        if (!spot.id) {
            Alert.alert("Błąd", "Brak ID parkingu. Spróbuj ponownie wybrać miejsce z mapy.");
            return;
        }

        setIsLoading(true);

        try {
            // 1. Pobieramy token użytkownika
            const token = await SecureStore.getItemAsync('userToken');
            if (!token) {
                Alert.alert('Błąd autoryzacji', 'Musisz być zalogowany, aby zarezerwować miejsce.');
                setIsLoading(false);
                return;
            }

            // 2. Wysyłamy zapytanie do naszego nowego API
            const response = await fetch(`${URL}/parking/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    spotId: spot.id,
                    hours: selectedHours,
                    totalPrice: totalPrice
                })
            });

            const data = await response.json();

            // 3. Jeśli backend zwrócił sukces (kod 201)
            if (response.ok) {
                // Przechodzimy do podsumowania, przekazując dane rezerwacji
                navigation.navigate('RentResult', {
                    spot: spot,
                    totalPrice: totalPrice,
                    bookingId: data.booking.id // Możesz to wykorzystać na ekranie wyniku!
                });
            } else {
                Alert.alert('Błąd Rezerwacji', data.error || 'Nie udało się zarezerwować miejsca.');
            }
        } catch (error) {
            console.error("Błąd fetch:", error);
            Alert.alert('Błąd Połączenia', 'Nie można połączyć się z serwerem.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
            <View style={styles.container}>
                {/* KAFELEK 1: Address */}
                <View style={styles.card}>
                    <Text style={styles.label}>Address</Text>
                    <Text style={styles.valueText}>{spot.address}</Text>
                </View>

                {/* KAFELEK 2: Wheel Picker Czasu */}
                <View style={[styles.card, styles.pickerCard]}>
                    <View style={styles.priceRow}>
                        <Text style={styles.label}>Rate</Text>
                        <Text style={styles.priceText}>
                            <Text style={styles.priceNumber}>{spot.price}</Text> zł / h
                        </Text>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedHours}
                            onValueChange={(itemValue) => setSelectedHours(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            {timeOptions.map(hour => (
                                <Picker.Item
                                    key={hour}
                                    label={`${hour} ${hour === 1 ? 'godzina' : 'godzin(y)'}`}
                                    value={hour}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>

                {/* KAFELEK 3: Size */}
                <View style={styles.card}>
                    <Text style={styles.label}>Size</Text>
                    <Text style={styles.valueText}>{spot.size}</Text>
                </View>

                {/* ZAKTUALIZOWANY PRZYCISK GŁÓWNY */}
                <TouchableOpacity
                    style={[styles.rentButton, isLoading && { backgroundColor: '#66a3ff' }]}
                    onPress={handleRentConfirm}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.rentButtonText}>Rent for {totalPrice} zł</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// ... (style pozostają bez zmian, tak jak miałeś w swoim pliku) ...
const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
    container: { flex: 1, padding: 20 },
    card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    pickerCard: { flexDirection: 'column', alignItems: 'stretch', paddingVertical: 15 },
    priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    label: { fontSize: 13, color: '#666', width: 70, textTransform: 'capitalize' },
    valueText: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', flex: 1 },
    priceNumber: { fontSize: 18, fontWeight: '800', color: '#007AFF' },
    priceText: { fontSize: 14, color: '#666', fontWeight: '600' },
    pickerContainer: { height: 140, justifyContent: 'center', overflow: 'hidden' },
    picker: { width: '100%' },
    pickerItem: { fontSize: 20, fontWeight: '700', color: '#1A1A1A', height: 140 },
    rentButton: { backgroundColor: '#007AFF', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 'auto', shadowColor: '#007AFF', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 4 },
    rentButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '800' }
});