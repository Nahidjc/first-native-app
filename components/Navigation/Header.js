import {
  Pressable,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for bell icon

const { width } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

const Header = ({ navigation, route, options, tabName ,user}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const backgroundColor =
    StyleSheet.flatten(options.headerStyle)?.backgroundColor ?? theme.white;

  const goBack = () => {
    const routes = navigation.getState()?.routes;
    if (routes[routes.length - 2]?.name === "VerificationCode") {
      navigation.pop(2);
    } else {
      navigation.goBack();
    }
  };

  if (tabName === "Dashboard") {
    return (
      <View style={{ backgroundColor }}>
        <StatusBar style="auto" />
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
          <FontAwesome name="bell" size={20} color="pink" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor }}>
      <View style={styles.navigation(insets, backgroundColor)}>
        {navigation.canGoBack() && (
          <View style={{ flex: 1 }}>
            <Pressable
              style={[styles.button, styles.backButton]}
              onPress={goBack}
            >
              <Ionicons
                name="arrow-back"
                size={24 * scale}
                color="#fff"
                style={styles.backIcon}
              />
            </Pressable>
          </View>
        )}
        <Text style={styles.title} numberOfLines={1} allowFontScaling={false}>
          {t(options.title || route.name)}
        </Text>
        {options.headerRight && (
          <View style={[styles.button, styles.rightButton]}>
            {options.headerRight({ canGoBack: false })}
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navigation: (insets, backgroundColor) => ({
    marginTop: insets.top,
    flexDirection: "row",
    alignItems: "center",
    height: 65,
    backgroundColor: "#E91E63",
  }),
  button: {
    borderRadius: 16,
    zIndex: 1,
  },
  backButton: {
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  rightButton: {
    marginRight: 16,
  },
  title: {
    position: "absolute",
    left: 72,
    right: 72,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 22,
    color: "white",
  },
  backIcon: {
    position: "absolute",
    left: 16 * scale,
    top: "50%",
    transform: [{ translateY: -12 * scale }],
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E91E63",
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
    flexDirection: "column",
  },
  greeting: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
});
