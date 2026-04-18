import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import RentScreen from './screens/RentScreen';
import RentOutScreen from './screens/RentOutScreen';
import {ActivityIndicator, View} from "react-native";
import RentSelectedSpot from "./screens/RentSelectedSpot";
import RentResult from "./screens/RentResult";
import ManageRentScreen from "./screens/ManageRentScreen";
import ManageRentOutScreen from "./screens/ManageRentOutScreen";


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
        <SafeAreaProvider>
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
                    <Stack.Screen name="MainScreen" options={{ headerShown: false }}>
                            {(props) => <MainScreen {...props} onLogout={() => setUserToken(null)} />}
                        </Stack.Screen>
                        <Stack.Screen name="Rent" component={RentScreen} options={{ title: 'Find Parking', headerShown: false }}></Stack.Screen>
                        <Stack.Screen name="RentSelectedSpot" component={RentSelectedSpot} options={{ title: 'Rent Details' }}></Stack.Screen>
                        <Stack.Screen name="RentResult" component={RentResult} options={{ title: 'Rent Result', headerShown: false }}></Stack.Screen>
                        <Stack.Screen name="RentOut" component={RentOutScreen} options={{ title: 'My Spots' }}></Stack.Screen>
                        <Stack.Screen
                            name="ManageRentOut"
                            component={ManageRentOutScreen}
                            options={{ title: 'Manage My Spots' }}
                        />
                        <Stack.Screen
                            name="ManageRent"
                            component={ManageRentScreen}
                            options={{ title: 'Manage My Spots' }}
                        />

                        </>
                    )}

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
