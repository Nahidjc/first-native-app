import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#9F64E8", "#642B9E"]} style={styles.header}>
        <View style={styles.appBar}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user.shopLogo }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Hi There, {user.ownerName}</Text>
              <Text style={styles.subtitle}>Welcome back to RE-NEO</Text>
            </View>
          </View>
          <FontAwesome
            name="bell"
            size={24}
            color="white"
            style={styles.notificationIcon}
          />
        </View>

        <Card />
        <View style={styles.gridContainer}>
          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <FontAwesome name="send" size={24} color="#7334BD" />
            </View>
            <Text style={styles.gridText}>Send</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <FontAwesome name="file" size={24} color="#7334BD" />
            </View>
            <Text style={styles.gridText}>Bills</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <FontAwesome name="shopping-cart" size={24} color="#7334BD" />
            </View>
            <Text style={styles.gridText}>Shop</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <FontAwesome name="qrcode" size={24} color="#7334BD" />
            </View>
            <Text style={styles.gridText}>Scan</Text>
          </View>
        </View>
      </LinearGradient>
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingTop: 40,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  greeting: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
  notificationIcon: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  gridItemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: "#F1E6FE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60, // Width and height to create a square icon box
    height: 60,
    marginBottom: 5,
  },
  gridText: {
    color: "#6c5ce7",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
  },
  bottomSection: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default DashboardScreen;
