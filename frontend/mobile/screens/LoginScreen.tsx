import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from '../config';
export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                // ZAPISYWANIE TOKENA
                await SecureStore.setItemAsync('userToken', data.token);

                // Opcjonalnie zapisz dane użytkownika (np. imię)
                await SecureStore.setItemAsync('userName', data.user.username);

                navigation.replace('Main');
            } else {
                Alert.alert('Błąd', data.error || 'Nieprawidłowe dane');
            }
        } catch (error) {
            Alert.alert('Błąd', 'Brak połączenia');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ParkChain</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Zaloguj</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text style={{ color: '#007AFF', textAlign: 'center' }}>
                    Nie masz konta? Zarejestruj się
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 8, marginBottom: 15 },
    button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' }
});