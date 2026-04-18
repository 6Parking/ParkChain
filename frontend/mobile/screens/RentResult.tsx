import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RentResult({route, navigation}: any) {
    const spot = route?.params?.spot || {address: 'Unknown location'}
    const totalPrice = route?.params?.totalPrice || '0';
    
    const handleReturnToMain = () => {
        navigation.reset({
            index: 0, 
            routes: [{ name: 'MainScreen' }], 
        });
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.content}>
                <View style={styles.successIconContainer}>
                    <Text style={styles.successEmoji}>✅</Text>
                </View>

                <Text style={styles.title}>Rental Successful!</Text>

                <View style={styles.receiptCard}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Location:</Text>
                        <Text style={styles.value}>{spot.address}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.row}>
                        <Text style={styles.label}>Total Paid:</Text>
                        <Text style={styles.totalValue}>{totalPrice} zł</Text>
                    </View>
                </View>

                <Text style={styles.infoText}>
                    Your spot is ready. You can find more details in your active rentals tab.
                </Text>
            </View>


            <View style={styles.footer}>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={handleReturnToMain}
            >
                <Text style={styles.mainButtonText}>Back to Main Menu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    successIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E8F5E9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    successEmoji: {
        fontSize: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#1A1A1A',
        marginBottom: 30,
        textAlign: 'center',
    },
    receiptCard: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'column',
        marginVertical: 5,
    },
    label: {
        fontSize: 14,
        color: '#666',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    totalValue: {
        fontSize: 24,
        fontWeight: '900',
        color: '#28A745',
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 15,
    },
    infoText: {
        fontSize: 15,
        color: '#999',
        textAlign: 'center',
        lineHeight: 22,
    },
    footer: {
        padding: 20,
        paddingBottom: 20,
    },
    mainButton: {
        backgroundColor: '#1A1A1A',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    }
});
