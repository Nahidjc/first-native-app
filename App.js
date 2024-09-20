import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import DashboardScreen from "./Screen/DashboardScreen";
import HelloWorldScreen from "./components/HelloWorld";
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import OnboardingScreen from "./Screen/OnboardingScreen";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, LogBox } from "react-native";
import SendMoneyScreen from "./Screen/SendMoney/SendMoneyScreen";
import ConfirmSendMoneyScreen from "./Screen/SendMoney/ConfirmSendMoney";
import SendMoney from "./Screen/SendMoney/SendMoney";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Navigation/Header";
import "./utilities/i18n";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
LogBox.ignoreAllLogs();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customTabButton} onPress={onPress}>
    <View style={styles.customTabButtonContent}>{children}</View>
  </TouchableOpacity>
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Statistics") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#7F3DFF",
        tabBarInactiveTintColor: "#C6C6C6",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Statistics" component={HelloWorldScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ header: Header, animation: "slide_from_bottom" }}
        >
          {isAuthenticated ? (
            <>
              <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainTabs" component={MainTabs} />
              </Stack.Group>

              <Stack.Group>
                <Stack.Screen
                  options={{
                    title: "সেন্ড মানি",
                  }}
                  name={"InitialSendMoney"}
                  component={SendMoneyScreen}
                />
                <Stack.Screen
                  name="ConfirmSendMoney"
                  options={{
                    title: "সেন্ড মানি",
                  }}
                  component={ConfirmSendMoneyScreen}
                />
                <Stack.Screen
                  name="SendMoney"
                  options={{
                    title: "সেন্ড মানি",
                  }}
                  component={SendMoney}
                />
              </Stack.Group>
            </>
          ) : (
            <>
              <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
              </Stack.Group>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  customTabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customTabButtonContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
