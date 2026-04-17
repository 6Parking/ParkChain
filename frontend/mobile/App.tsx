import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [message, setMessage] = useState<string>('Conecting to server...');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const BACKEND_URL = 'http://10.19.80.155:3000/api/status';

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
        setMessage('Backend dont working');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
      <View style={styles.container}>
        {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <Text style={styles.text}>{message}</Text>
        )}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  }
});