import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

export default function ConfirmSendMoneyScreen({ route, navigation }) {
  const [amount, setAmount] = useState("");
  const { recipient } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24 * scale}
          color="#fff"
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>সেন্ড মানি</Text>
      </View>

      <View style={styles.recipientContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{recipient.name[0]}</Text>
          {/* <View style={styles.starIcon}>
            <Ionicons name="star" size={14 * scale} color="#fff" />
          </View> */}
        </View>
        <View style={styles.recipientInfo}>
          <Text style={styles.recipientName}>{recipient.name}</Text>
          <Text style={styles.recipientNumber}>{recipient.number}</Text>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{`৳${amount || "0"}`}</Text>
      </View>

      <Text style={styles.balanceText}>ব্যবহারযোগ্য ব্যালেন্স: ৳10.15</Text>

      <KeyboardAvoidingView behavior="padding" style={styles.keyboardContainer}>
        <TextInput
          style={styles.amountInput}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="৳0"
          placeholderTextColor="#999"
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          /* Handle confirm action */
        }}
      >
        <Text style={styles.confirmButtonText}>এগিয়ে যান</Text>
        <Ionicons name="arrow-forward" size={24 * scale} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E91E63",
    height: 56 * scale,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16 * scale,
  },
  backIcon: {
    position: "absolute",
    left: 16 * scale,
    top: "50%",
    transform: [{ translateY: -12 * scale }],
  },
  headerTitle: {
    fontSize: 20 * scale,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  recipientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20 * scale,
    paddingHorizontal: 16 * scale,
  },
  avatar: {
    width: 50 * scale,
    height: 50 * scale,
    borderRadius: 25 * scale,
    backgroundColor: "#E1BEE7",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarText: {
    fontSize: 18 * scale,
    color: "#fff",
  },
  starIcon: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#E91E63",
    borderRadius: 10,
    padding: 4,
  },
  recipientInfo: {
    marginLeft: 10 * scale,
  },
  recipientName: {
    fontSize: 16 * scale,
    fontWeight: "bold",
    color: "#333",
  },
  recipientNumber: {
    fontSize: 14 * scale,
    color: "#666",
  },
  amountContainer: {
    alignItems: "center",
    marginTop: 40 * scale,
  },
  amount: {
    fontSize: 40 * scale,
    fontWeight: "bold",
    color: "#E91E63",
  },
  balanceText: {
    textAlign: "center",
    color: "#666",
    marginTop: 10 * scale,
    fontSize: 14 * scale,
  },
  keyboardContainer: {
    marginVertical: 20 * scale,
  },
  amountInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E91E63",
    fontSize: 32 * scale,
    color: "#333",
    textAlign: "center",
    paddingVertical: 10 * scale,
  },
  confirmButton: {
    backgroundColor: "#E91E63",
    height: 50 * scale,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25 * scale,
    marginVertical: 20 * scale,
  },
  confirmButtonText: {
    fontSize: 18 * scale,
    color: "#fff",
    marginRight: 10 * scale,
  },
});
