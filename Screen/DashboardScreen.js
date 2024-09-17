import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const DashboardScreen = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#CBF2FD", "#F4FAFB"]} style={styles.header}>
        <View style={styles.appBar}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user.shopLogo }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>{user.ownerName}</Text>
              <Text style={styles.subtitle}>Welcome back to BD Pay</Text>
            </View>
          </View>
          <FontAwesome
            name="bell"
            size={24}
            color="white"
            style={styles.notificationIcon}
          />
        </View>

        {/* Responsive Card */}
        <Card />

        {/* Responsive Grid of Icons */}
        <View style={styles.gridContainer}>
          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <Image
                source={require("../assets/icon/send.png")}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.gridText}>Send</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <Image
                source={require("../assets/icon/cash-out.png")}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.gridText}>Cash Out</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <Image
                source={require("../assets/icon/payment.png")}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.gridText}>Payment</Text>
          </View>

          <View style={styles.gridItemContainer}>
            <View style={styles.iconBox}>
              <Image
                source={require("../assets/icon/add-money.png")}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.gridText}>Add Money</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={styles.scrollableSection}>
        <TransactionList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: height * 0.5,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingTop: 40,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
  },
  textContainer: {
    marginLeft: 10,
  },
  greeting: {
    color: "black",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  subtitle: {
    color: "black",
    fontSize: width * 0.03,
  },
  notificationIcon: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: width * 0.05,
    flexWrap: "wrap",
  },
  gridItemContainer: {
    width: width * 0.22,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: "#F1E6FE",
    padding: width * 0.04,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.15,
    height: width * 0.15,
  },
  iconImage: {
    width: width * 0.08,
    height: width * 0.08,
  },
  gridText: {
    color: "#6c5ce7",
    fontSize: width * 0.03,
    fontWeight: "500",
    marginTop: 5,
  },
  scrollableSection: {
    flex: 1,
    marginTop: 20,
  },
});

export default DashboardScreen;
