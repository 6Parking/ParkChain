import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ navigation, onLogout }: any) {

    const handleLogout = async () => {
        // 1. Usuwamy token z pamięci telefonu
        await SecureStore.deleteItemAsync('userToken');

        // 2. Zerujemy stan w App.tsx.
        // To spowoduje, że App.tsx się przerysuje, zobaczy że userToken jest null
        // i AUTOMATYCZNIE pokaże ekran Login.
        onLogout();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Witaj w ParkChain! 🚗</Text>
            {/* Wywołujemy naszą nową funkcję handleLogout */}
            <Button title="Wyloguj" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    welcome: { fontSize: 22, fontWeight: '500', marginBottom: 20 }
});