import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import ViewShot from 'react-native-view-shot';

export default function PriceMarker({ price, coordinate, onPress }: any) {
    const ref = useRef<any>(null);
    const [uri, setUri] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const generate = async () => {
            try {
                if (ref.current && !uri) {
                    // Przechwytujemy widok i zamieniamy na obrazek
                    const image = await ref.current.capture();
                    if (isMounted) {
                        setUri(image);
                    }
                }
            } catch (e) {
                console.log('ViewShot error:', e);
            }
        };

        const t = setTimeout(generate, 200); // Czas na wyrenderowanie tekstu
        return () => {
            isMounted = false;
            clearTimeout(t);
        };
    }, []);

    // Jeśli obrazek nie jest gotowy, renderujemy "ukryty" ViewShot
    if (!uri) {
        return (
            <Marker coordinate={coordinate} opacity={0}>
                <ViewShot
                    ref={ref}
                    options={{ format: 'png', quality: 1 }}
                    style={styles.container}
                >
                    <View style={styles.bubble}>
                        <Text style={styles.text}>{price} PLN</Text>
                    </View>
                </ViewShot>
            </Marker>
        );
    }

    // Gdy obrazek jest gotowy, renderujemy marker jako czystą grafikę
    return (
        <Marker
            coordinate={coordinate}
            onPress={onPress}
            image={{ uri: uri }} // TO NAPRAWIA UCINANIE
            tracksViewChanges={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 5, // Margines bezpieczeństwa dla cieni
    },
    bubble: {
        backgroundColor: '#28A745',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#fff',
        minWidth: 70,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});