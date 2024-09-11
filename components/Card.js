import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          source={require("../assets/images/visa-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.cardTitle}>Visa Balance</Text>
        <Text style={styles.cardBalance}>$50,000</Text>
        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#a29bfe",
    borderRadius: 15,
    padding: 20,
  },
  logo: {
    width: 70,
    height: 20,
    alignSelf: "flex-end",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
  },
  cardBalance: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Card;
