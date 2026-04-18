import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ navigation, onLogout }: any) {

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync('userToken');
        if (onLogout) onLogout();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>ParkChain</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcome}>Welcome! What would you like to do today?</Text>

                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={[styles.card, styles.rentCard]}
                        onPress={() => navigation.navigate('Rent')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.cardEmoji}>🔍</Text>
                        <Text style={styles.cardTitle}>Rent a Spot</Text>
                        <Text style={styles.cardSubtitle}>Find and book parking in seconds</Text>
                    </TouchableOpacity>



                    <TouchableOpacity
                        style={[styles.card, styles.rentOutCard]}
                        onPress={() => navigation.navigate('RentOut')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.cardEmoji}>💰</Text>
                        <Text style={styles.cardTitle}>Rent Out</Text>
                        <Text style={styles.cardSubtitle}>List your spot and start earning</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, styles.manageCard]}
                        onPress={() => navigation.navigate('ManageRentOut')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.cardEmoji}>📋</Text>
                        <Text style={styles.cardTitle}>My Listings</Text>
                        <Text style={styles.cardSubtitle}>Manage and edit your parking spots</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1A1A1A',
    },
    logoutText: {
        color: '#FF3B30',
        fontWeight: '600',
    },
    content: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    welcome: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
    },
    menuContainer: {
        gap: 20,
    },
    card: {
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    rentCard: {
        borderLeftWidth: 6,
        borderLeftColor: '#007AFF',
    },
    rentOutCard: {
        borderLeftWidth: 6,
        borderLeftColor: '#28A745',
    },
    cardEmoji: {
        fontSize: 32,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    manageCard: {
        borderLeftWidth: 6,
        borderLeftColor: '#FF9500',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});