import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config';

export default function AboutScreen({ route, navigation }: any) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>FAQ</Text>
                <Text style={styles.description}>ParkChain is a decentralized peer-to-peer parking marketplace. It empowers drivers to quickly find and rent available parking spaces in their desired location. It also provides a convenient platform for parking spot owners to list their unused spaces for both long- and short-term rental, allowing them to set a custom price and earn money effortlessly.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { padding: 30, flex: 1 },
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: "#1A1A1A",
    },
    description: {
        fontSize: 18,
        color: "#666",
        marginBottom: 30,
    },
});
