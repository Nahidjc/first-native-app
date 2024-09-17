import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const Card = () => {
  const [balance, setBalance] = useState(85343);

  const handleRefresh = () => {
    setBalance((prevBalance) => prevBalance + Math.floor(Math.random() * 1000));
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.balanceLabel}>সর্বশেষ আপডেট ব্যালেন্স</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.balanceAmount}>
            ৳ {balance.toLocaleString("bn-BD")}
          </Text>
          <Pressable onPress={handleRefresh} style={styles.refreshButton}>
            <Image
              source={require("../assets/icon/refresh.png")}
              style={styles.refreshIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  balanceLabel: {
    color: "#7c7c7c",
    fontSize: 16,
    marginBottom: 5,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceAmount: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  refreshButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00bcd4",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  refreshIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});

export default Card;
