import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

export default function SendMoney({ route }) {
  const { recipient, amount } = route.params;
  const [pin, setPin] = useState("");
  const pinLength = 4;
  const isEnglishLetter = (char) => /^[A-Za-z]$/.test(char);
  const handlePinChange = (text) => {
    setPin(text.slice(0, pinLength));
  };
  const [reference, setReference] = useState("");
  const maxChars = 50;

  const handleReferenceChange = (text) => {
    if (text.length <= maxChars) {
      setReference(text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.recipientCard}>
        <Text style={styles.toText}>প্রাপক</Text>
        <View style={styles.recipientContainer}>
          <View style={styles.avatar}>
            {isEnglishLetter(recipient.name[0]) ? (
              <Avatar
                rounded
                title={recipient.name[0]}
                size={50 * scale}
                containerStyle={{ backgroundColor: "#E1BEE7" }}
              />
            ) : (
              <Ionicons name="person" size={25 * scale} color="white" />
            )}
          </View>
          <View style={styles.recipientInfo}>
            <Text style={styles.recipientName}>{recipient.name}</Text>
            <Text style={styles.recipientNumber}>{recipient.number}</Text>
          </View>
        </View>
      </View>
      <View style={styles.amountSection}>
        <View style={styles.amountRow}>
          <View style={styles.amountCol}>
            <Text style={styles.label}>পরিমাণ</Text>
            <Text style={styles.value}>{`৳ ${amount}`}</Text>
          </View>
          <View style={styles.amountCol}>
            <Text style={styles.label}>চার্জ</Text>
            <Text style={styles.value}>+৳ 0.00</Text>
          </View>
          <View style={styles.amountCol}>
            <Text style={styles.label}>সর্বমোট</Text>
            <Text style={styles.value}>{`৳ ${amount}`}</Text>
          </View>
        </View>
        <View style={styles.referenceRow}>
          <Text style={styles.referenceLabel}>রেফারেন্স</Text>
          <Text style={styles.referenceLimit}>
            {reference.length}/{maxChars}
          </Text>
        </View>
        <TextInput
          style={styles.referenceInput}
          placeholder="নোট লিখতে ট্যাপ করুন"
          placeholderTextColor="#999"
          value={reference}
          onChangeText={handleReferenceChange}
          maxLength={maxChars} // Ensure the max characters are respected
        />
      </View>

      <View style={styles.pinSection}>
        <View style={styles.pinInputContainer}>
          <Ionicons
            name="lock-closed"
            size={18 * scale}
            color="#E91E63"
            style={styles.lockIcon}
          />
          <TextInput
            style={styles.pinInput}
            placeholder="পিন নম্বর দিন"
            placeholderTextColor="#999"
            value={pin}
            keyboardType="number-pad"
            secureTextEntry={true}
            maxLength={pinLength}
            onChangeText={handlePinChange}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          pin.length === pinLength ? styles.activeConfirmButton : {},
        ]}
        disabled={pin.length !== pinLength}
      >
        <Text style={styles.confirmButtonText}>পিন কনফার্ম করুন</Text>
        <Ionicons name="arrow-forward" size={24 * scale} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16 * scale,
    backgroundColor: "#fff",
  },
  recipientCard: {
    backgroundColor: "#fff",
    padding: 16 * scale,
    borderRadius: 10 * scale,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 20 * scale,
    elevation: 1,
  },
  toText: {
    fontSize: 14 * scale,
    color: "#999",
    marginBottom: 10 * scale,
  },
  recipientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5 * scale,
  },
  avatar: {
    width: 40 * scale,
    height: 40 * scale,
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
  amountSection: {
    backgroundColor: "#fff",
    padding: 16 * scale,
    borderRadius: 10 * scale,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 20 * scale,
    elevation: 1,
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20 * scale,
  },
  amountCol: {
    alignItems: "center",
  },
  label: {
    fontSize: 14 * scale,
    color: "#666",
    marginBottom: 5 * scale,
  },
  value: {
    fontSize: 16 * scale,
    fontWeight: "bold",
    color: "#333",
  },
  referenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  referenceLabel: {
    fontSize: 14 * scale,
    color: "#666",
  },
  referenceLimit: {
    fontSize: 14 * scale,
    color: "#666",
  },
  referenceInput: {
    marginTop: 10 * scale,
    fontSize: 14 * scale,
    paddingVertical: 5 * scale,
    color: "#333",
    borderWidth: 0,
  },
  pinSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20 * scale,
  },
  pinInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10 * scale,
    paddingVertical: 12 * scale,
    paddingHorizontal: 10 * scale,
    backgroundColor: "#f8f8f8",
  },
  lockIcon: {
    marginRight: 10 * scale,
  },
  pinInput: {
    flex: 1,
    fontSize: 16 * scale,
    textAlign: "center",
    color: "#333",
  },
  confirmButton: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    padding: 16 * scale,
    borderRadius: 25 * scale,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20 * scale,
  },
  activeConfirmButton: {
    backgroundColor: "#E91E63",
  },
  confirmButtonText: {
    fontSize: 16 * scale,
    color: "#fff",
    marginRight: 10 * scale,
  },
});
