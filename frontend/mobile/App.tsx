import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import RentScreen from './screens/RentScreen';
import RentOutScreen from './screens/RentOutScreen';
import {ActivityIndicator, View} from "react-native";


const Stack = createStackNavigator();

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState<string | null>(null);
    useEffect(() => {
        const bootstrapAsync = async () => {
            let token: string | null = null;
            try {
                token = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                console.log('Błąd odczytu tokena');
            }
            setUserToken(token);
            setIsLoading(false);
        };

        bootstrapAsync();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userToken == null ? (
                    <>
                        <Stack.Screen name="LoginScreen" options={{ headerShown: false }}>
                            {(props) => (
                                <LoginScreen
                                    {...props}
                                    onLogin={(token) => setUserToken(token)}
                                />
                            )}
                        </Stack.Screen>
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    </>
                ) : (
                    <>
                    <Stack.Screen name="MainScreen">
                        {(props) => <MainScreen {...props} onLogout={() => setUserToken(null)} />}
                    </Stack.Screen>
                    <Stack.Screen name="Rent" component={RentScreen} options={{ title: 'Find Parking' }}></Stack.Screen>
                    <Stack.Screen name="RentOut" component={RentOutScreen} options={{ title: 'My Spots' }}></Stack.Screen>
                    </>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}