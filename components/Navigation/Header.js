import {
  Pressable,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Cross from "../../assets/svgs/cross.svg";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

const Header = ({ navigation, route, options }) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const backgroundColor =
    StyleSheet.flatten(options.headerStyle)?.backgroundColor ?? theme.white;
  const isModal = options.presentation === "modal";

  const goBack = () => {
    const routes = navigation.getState()?.routes;
    if (routes[routes.length - 2].name === "VerificationCode") {
      navigation.pop(2);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={{ backgroundColor }}>
      <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
      <View style={styles.navigation(insets, isModal, backgroundColor)}>
        {navigation.canGoBack() && (
          <View style={{ flex: 1 }}>
            <Pressable
              style={[styles.button(isModal), styles.backButton(isModal)]}
              onPress={goBack}
            >
              {isModal ? (
                <Cross color={theme.white} />
              ) : (
                <Ionicons
                  name="arrow-back"
                  size={24 * scale}
                  color="#fff"
                  style={styles.backIcon}
                />
              )}
            </Pressable>
          </View>
        )}
        <Text style={styles.title} numberOfLines={1} allowFontScaling={false}>
          {t(options.title || route.name)}
        </Text>
        {options.headerRight && (
          <View style={[styles.button(isModal), styles.rightButton]}>
            {options.headerRight({ canGoBack: false })}
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navigation: (insets, isModal, backgroundColor) => ({
    marginTop: isModal ? 0 : insets.top,
    flexDirection: "row",
    alignItems: "center",
    height: 62,
    backgroundColor: "#E91E63",
  }),
  button: (isModal) => ({
    // height: isModal ? 35 : 48,
    // borderWidth: 1,
    // borderColor: "#E0E0E0",
    borderRadius: isModal ? 12 : 16,
    zIndex: 1,
  }),
  backButton: (isModal) => ({
    width: isModal ? 35 : 48,
    // marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  }),
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
});
