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
                    const image = await ref.current.capture();
                    if (isMounted) {
                        setUri(image);
                    }
                }
            } catch (e) {
                console.log('ViewShot error:', e);
            }
        };

        const t = setTimeout(generate, 200); 
        return () => {
            isMounted = false;
            clearTimeout(t);
        };
    }, []);

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

    return (
        <Marker
            coordinate={coordinate}
            onPress={onPress}
            image={{ uri: uri }}
            tracksViewChanges={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 5, 
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
