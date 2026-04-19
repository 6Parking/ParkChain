import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { URL } from "../config";

interface Availability {
  dayOfWeek: number | null;
  startTime: string | null;
  endTime: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
}

interface MyRent {
  id: number;
  startTime: string;
  endTime: string;
  totalPrice: number;
  deposit: number;
  status: string;
  spot: {
    id: number;
    address: string;
    city: string;
    size: string;
    availabilityMode: "24_7" | "RECURRING" | "ONCE";
    availabilities: Availability[];
  };
}

const formatPL = (dateString: string) => {
  return new Date(dateString).toLocaleString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function ManageRentScreen({ navigation }: any) {
  const [mySpots, setMySpots] = useState<MyRent[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMyRents = async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");
      const response = await fetch(`${URL}/parking/my-rents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setMySpots(data);
      } else {
        Alert.alert("Error", data.error || "Failed to fetch your spots");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMyRents();
  }, []);

  const handleItemPress = (item: MyRent) => {
    let maxEndTime: string | null = null;
    const mode = item.spot.availabilityMode;

    if (mode === "ONCE" && item.spot.availabilities.length > 0) {
      maxEndTime = item.spot.availabilities[0].endDateTime;
    } else if (mode === "RECURRING") {
      const endDay = new Date(item.endTime).getDay();
      const dailyLimit = item.spot.availabilities.find((a) => a.dayOfWeek === endDay);

      if (dailyLimit && dailyLimit.endTime) {
        const limit = new Date(item.endTime);
        const [h, m] = dailyLimit.endTime.split(":");
        limit.setHours(parseInt(h), parseInt(m), 0, 0);
        maxEndTime = limit.toISOString();
      }
    }

    Alert.alert("Manage Booking", `Spot: ${item.spot.address}`, [
      { text: "Cancel booking", onPress: () => confirmCancel(item.id), style: "destructive" },
      { text: "Check out", onPress: () => handleCheckOut(item) },
      { text: "Close", style: "cancel" },
    ]);
  };

  const handleCheckOut = (item: any) => {
    const timeStatus = checkTimeStatus(item.endTime);

    Alert.alert("Check Out Status", timeStatus.message, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Confirm Check Out",
        onPress: () => confirmCheckOutAction(item.id, item.deposit),
      },
    ]);
  };

  const confirmCheckOutAction = async (id: number, deposit: number) => {
    try {
      const token = await SecureStore.getItemAsync("userToken");

      const response = await fetch(`${URL}/parking/checkout/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deposit: deposit,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Check Out Successful", `${data.message}\nFinal Price: $${data.finalPrice.toFixed(2)}`);
        fetchMyRents();
      } else {
        Alert.alert("Error", data.error || "Failed to check out.");
      }
    } catch (error) {
      Alert.alert("Connection Error", "Server is unreachable.");
    }
  };

  const confirmCancel = (bookingId: number) => {
    Alert.alert("Confirm", "Are you sure you want to cancel this booking? Only 80% will be refunded!", [
      { text: "No", style: "cancel" },
      {
        text: "Yes, cancel",
        onPress: () => handleCancelBooking(bookingId),
        style: "destructive",
      },
    ]);
  };

  const handleCancelBooking = async (id: number) => {
    try {
      const token = await SecureStore.getItemAsync("userToken");

      const response = await fetch(`${URL}/parking/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        Alert.alert("Success", "Booking cancelled successfully.");
        fetchMyRents();
      } else {
        const data = await response.json();
        Alert.alert("Error", data.error || "Failed to cancel booking.");
      }
    } catch (error) {
      Alert.alert("Connection Error", "Server is unreachable.");
    }
  };

  const checkTimeStatus = (endTimeString: string) => {
    const now = new Date();
    const endTime = new Date(endTimeString);
    const diffInMilliseconds = now.getTime() - endTime.getTime();
    const diffInMinutes = diffInMilliseconds / (1000 * 60);

    if (diffInMinutes <= 0) {
      return { status: "ON_TIME", message: "You are on time for checkout." };
    } else if (diffInMinutes <= 30) {
      return { status: "LATE_SLIGHTLY", message: `You are late by ${Math.floor(diffInMinutes)} minutes. Standard rate applies.` };
    } else {
      return { status: "LATE_SEVERELY", message: `You are very late (${Math.floor(diffInMinutes)} minutes). Increased penalty rate applies!` };
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF9500" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Listings</Text>
        <Text style={styles.count}>{mySpots.length} rents listed</Text>
      </View>

      <FlatList
        data={mySpots}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              fetchMyRents();
            }}
          />
        }
        contentContainerStyle={{ padding: 20 }}
        ListEmptyComponent={<Text style={styles.empty}>You haven't added any spots yet.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.7}>
            <View style={styles.spotCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.address}>{item.spot.address}</Text>
                <Text style={styles.smallText}>Size: {item.spot.size}</Text>
                <Text style={styles.smallText}>From: {formatPL(item.startTime)}</Text>
                <Text style={styles.smallText}>Until: {formatPL(item.endTime)}</Text>
              </View>
              <Text style={styles.price}>${item.totalPrice}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { padding: 20 },
  headerTitle: { fontSize: 26, fontWeight: "800", color: "#1A1A1A" },
  count: { color: "#666", marginTop: 4 },
  spotCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  address: { fontSize: 16, fontWeight: "700", color: "#1A1A1A" },
  smallText: { color: "#666", fontSize: 13, marginBottom: 8 },
  price: { fontSize: 18, fontWeight: "800", color: "#FF9500" },
  statusBadge: { alignSelf: "flex-start", paddingVertical: 4 },
  statusText: { fontSize: 12, fontWeight: "600", color: "#28A745" },
  empty: { textAlign: "center", marginTop: 50, color: "#999" },
});
