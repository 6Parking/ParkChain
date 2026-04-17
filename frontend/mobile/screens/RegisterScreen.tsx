import React, { useState } from 'react';
import { URL } from '../config';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

const LOCAL_API_URL = URL;

export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!email.trim() || !username.trim() || !password.trim()) {
            Alert.alert('Validation Error', 'All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Validation Error', 'Please enter a valid email address.');
            return;
        }

        if (username.length < 3) {
            Alert.alert('Validation Error', 'Username must be at least 3 characters long.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
            return;
        }

        try {
            // Używamy naszego stałego adresu wbudowanego w ten plik
            const response = await fetch(`${LOCAL_API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await response.json();

            if (response.status === 201) {
                Alert.alert('Success', 'Account created! You can now log in.', [
                    { text: 'OK', onPress: () => navigation.navigate('LoginScreen') }
                ]);
            } else {
                Alert.alert('Registration Failed', data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Connection Error', 'Could not reach the server');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <View style={styles.header}>
                    <Text style={styles.logo}>✨</Text>
                    <Text style={styles.title}>Join ParkChain</Text>
                    <Text style={styles.subtitle}>Create an account to start</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Choose a username"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="your@email.com"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Min. 6 characters"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleRegister} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.linkText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        fontSize: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1A1A1A',
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },
    form: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#F3F4F6',
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        fontSize: 16,
        color: '#1A1A1A',
    },
    button: {
        backgroundColor: '#28a745',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    footerText: {
        color: '#666',
        fontSize: 15,
    },
    linkText: {
        color: '#007AFF',
        fontSize: 15,
        fontWeight: '700',
    },
});