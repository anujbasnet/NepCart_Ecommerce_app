import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");

const ToggleNotification = () => {
  useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  const [switch1, setswitch1] = useState(false);
  const [switch2, setswitch2] = useState(false);
  const [switch3, setswitch3] = useState(false);
  const [switch4, setswitch4] = useState(false);
  const handleSwitch1 = () => {
    setswitch1(!switch1);
  };
   const handleSwitch2 = () => {
    setswitch2(!switch2);
  };
   const handleSwitch3 = () => {
    setswitch3(!switch3);
  };
   const handleSwitch4 = () => {
    setswitch4(!switch4);
  };
  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "position" : undefined}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Notifications
        </Text>
      </View>
      <View
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff" }}
      >
        <View style={styles.containerBox}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Payment</Text>
            <Switch
              style={styles.switch}
              onValueChange={handleSwitch1}
              value={switch1}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tracking</Text>
            <Switch
              style={styles.switch}
              onValueChange={handleSwitch2}
              value={switch2}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Complete Order</Text>
            <Switch
              style={styles.switch}
              onValueChange={handleSwitch3}
              value={switch3}
            />
          </View>
          <View style={styles.textContainerLast}>
            <Text style={styles.text}>Notification</Text>
            <Switch
              style={styles.switch}
              onValueChange={handleSwitch4}
              value={switch4}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ToggleNotification;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
    backgroundColor: "#ffffff",
  },
  containerBox: {
    borderWidth: 1,
    borderColor: "#e6e5e5ff",
    height: height * 0.4,
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.05,
    borderRadius: width * 0.05,
  },
  textContainer: {
    borderBottomColor: "#e6e5e5ff",
    borderBottomWidth: 2,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Baloo2-Medium",
    fontSize: height * 0.03,
    marginLeft: width * 0.04,
    marginVertical: height * 0.02,
  },
  textContainerLast: {
    fontFamily: "Baloo2-Medium",
    fontSize: height * 0.03,
    marginLeft: width * 0.04,
    marginVertical: height * 0.02,
    marginRight: width * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
