import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { API_URL } from '../config'; // Upewnij się, że ścieżka jest poprawna

export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !username || !password) {
            Alert.alert('Błąd', 'Wypełnij wszystkie pola!');
            return;
        }

        try {
            console.log("Rejestracja użytkownika:", username);
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await response.json();

            if (response.status === 201) {
                Alert.alert('Sukces', 'Konto utworzone! Teraz możesz się zalogować.');
                navigation.navigate('Login');
            } else {
                Alert.alert('Błąd', data.error || 'Coś poszło nie tak');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Błąd', 'Brak połączenia z serwerem');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stwórz konto</Text>

            <TextInput
                style={styles.input}
                placeholder="Nazwa użytkownika"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

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

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Zarejestruj się</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
                <Text style={{ color: '#007AFF', textAlign: 'center' }}>Masz już konto? Zaloguj się</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 8, marginBottom: 15 },
    button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' }, // Zielony dla rejestracji
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});