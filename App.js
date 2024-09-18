import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { store } from "./state/store";
import DashboardScreen from "./Screen/DashboardScreen";
import HelloWorldScreen from "./components/HelloWorld";
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import OnboardingScreen from "./Screen/OnboardingScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import SendMoneyScreen from "./Screen/SendMoneyScreen";
import ConfirmSendMoneyScreen from "./Screen/ConfirmSendMoney";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
          <Stack.Screen
            name="ConfirmSendMoney"
            component={ConfirmSendMoneyScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

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

          // else if (route.name === "Chat") {
          //   iconName = focused ? "chatbubble" : "chatbubble-outline";
          // } else if (route.name === "Profile") {
          //   iconName = focused ? "person" : "person-outline";
          // }

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
      {/* <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color="#6c5ce7" />
    <Text>Loading...</Text>
  </View>
);
export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar />
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
