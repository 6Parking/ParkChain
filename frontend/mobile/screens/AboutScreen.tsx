import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from '../config';

export default function AboutScreen({ route, navigation }: any) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.welcome}>FAQ</Text>
                <Text style={styles.welcome}>Rules</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { padding: 30, flex: 1 },
    welcome: {
        fontSize: 18,
        color: "#666",
        marginBottom: 30,
    },
});
