import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
const { width, height } = Dimensions.get("window");

const Settings = () => {
  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Settings
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: height * 0.02, marginLeft: width * 0.05 }}>
          <Text style={{ fontFamily: "Baloo2-Bold", fontSize: width * 0.056 }}>
            General
          </Text>
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <Octicons
              name="person"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Edit Profile
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <AntDesign
              name="lock"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Change Password
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <Feather
              name="bell"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Notifications
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <MaterialIcons
              name="security"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Security
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <SimpleLineIcons
              name="globe"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Language
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={{ marginTop: height * 0.02, marginLeft: width * 0.05 }}>
          <Text style={{ fontFamily: "Baloo2-Bold", fontSize: width * 0.052 }}>
            Preferencess
          </Text>
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <Feather
              name="shield"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Legal and Policies
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <MaterialIcons
              name="support-agent"
              size={width * 0.05}
              color="black"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{ fontFamily: "Baloo2-Medium", fontSize: width * 0.04 }}
            >
              Help & Support
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#c6c6c6ff"
            style={{ marginRight: width * 0.05 }}
          />
        </View>
        <View style={styles.profileEdit}>
          <View
            style={{
              marginLeft: width * 0.05,
              flexDirection: "row",
              gap: width * 0.03,
            }}
          >
            <MaterialIcons
              name="logout"
              size={width * 0.05}
              color="red"
              style={{ marginTop: height * 0.003 }}
            />
            <Text
              style={{
                fontFamily: "Baloo2-Medium",
                fontSize: width * 0.04,
                color: "red",
              }}
            >
              Logout
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
  },
  profileEdit: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.02,
    backgroundColor: "#f9f9f9ff",
    borderRadius: height * 0.02,
    width: width * 0.95,
    marginLeft: width * 0.03,
    height: height * 0.09,
    justifyContent: "space-between",
  },
});
