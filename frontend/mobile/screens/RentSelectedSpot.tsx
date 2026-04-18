import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Nowy import

export default function RentSelectedSpot({ route, navigation }: any) {
    // 1. Odbieranie danych miejsca
    const spot = route?.params?.spot || {
        address: 'Brak danych',
        price: '4.50',
        size: '-'
    };

    // 2. Stan (State) dla wybranego czasu. Domyślnie 1 godzina.
    const [selectedHours, setSelectedHours] = useState(1);

    // 3. Dynamiczne obliczanie całkowitej ceny
    const basePrice = parseFloat(spot.price);
    const totalPrice = (basePrice * selectedHours).toFixed(2);

    // 4. Generowanie opcji czasu (np. od 1 do 12 godzin)
    const timeOptions = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <SafeAreaView style={styles.safeArea}>
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

                    {/* Bębenek (Wheel Picker) */}
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedHours}
                            onValueChange={(itemValue) => setSelectedHours(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem} // Styl działa natywnie na iOS
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

                {/* PRZYCISK GŁÓWNY - Cena aktualizuje się na żywo! */}
                <TouchableOpacity style={styles.rentButton} onPress={() => navigation.navigate('RentResult', {spot: spot, totalPrice: totalPrice})}>
                    <Text style={styles.rentButtonText}>Rent for {totalPrice} zł</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FA'
    },
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    pickerCard: {
        flexDirection: 'column', // Zmieniamy kierunek dla tego kafelka, by zmieścić bębenek pod ceną
        alignItems: 'stretch',
        paddingVertical: 15,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    label: {
        fontSize: 13,
        color: '#666',
        width: 70,
        textTransform: 'capitalize',
    },
    valueText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1A1A1A',
        flex: 1,
    },
    priceNumber: {
        fontSize: 18,
        fontWeight: '800',
        color: '#007AFF',
    },
    priceText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '600',
    },
    // Style dla Wheel Pickera
    pickerContainer: {
        height: 140, // Ograniczamy wysokość, by bębenek nie zajął połowy ekranu
        justifyContent: 'center',
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
    },
    pickerItem: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A',
        height: 140, // Na iOS wyrównuje bębenek idealnie do naszego kontenera
    },
    // Style dla dolnego przycisku
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
