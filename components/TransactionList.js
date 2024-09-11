import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const transactions = [
  {
    id: "1",
    description: "Paypal Receive",
    date: "04/11/21",
    amount: "+$100.00",
    icon: require("../assets/images/paypal.png"),
  },
  {
    id: "2",
    description: "Gopay Top-Up",
    date: "04/11/21",
    amount: "-$50.00",
    icon: require("../assets/images/paypal.png"),
  },
  {
    id: "3",
    description: "Send To Alexis",
    date: "03/11/21",
    amount: "-$250.00",
    icon: require("../assets/images/paypal.png"),
  },
];

const TransactionList = () => {
  const renderItem = ({ item, index }) => (
    <View style={styles.transactionItem}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: item.amount.startsWith("+") ? "#4CAF50" : "#F44336" },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Activity</Text>
        <Text style={styles.headerFilter}>All</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => {
            return <Text style={styles.sectionHeader}>Today</Text>;
          }}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerFilter: {
    fontSize: 14,
    color: "#8E8E93",
  },
  listContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
  },
  listContent: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 14,
    color: "#8E8E93",
    marginVertical: 12,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionDate: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TransactionList;
