import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

const Settings = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIN");
  };
  const [modalVisible, setmodalVisible] = useState(false);
  if (!fontsLoaded) {
    return null;
  }
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
        <Pressable
          style={styles.profileEdit}
          onPress={() => navigation.navigate("EditProfile")}
        >
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
        </Pressable>
        <Pressable onPress={() => navigation.navigate("ChangePassword")}>
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
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("ToggleNotification");
          }}
        >
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
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Security");
          }}
        >
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
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Language")}>
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
        </Pressable>
        <View style={{ marginTop: height * 0.02, marginLeft: width * 0.05 }}>
          <Text style={{ fontFamily: "Baloo2-Bold", fontSize: width * 0.052 }}>
            Preferencess
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("LegalPolicies");
          }}
        >
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
        </Pressable>
        <Pressable>
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
        </Pressable>
        <View style={styles.profileEdit}>
          <Modal
            transparent={true}
            animationType="none"
            visible={modalVisible}
            onRequestClose={() => {
              handleLogout();
              setmodalVisible(false);
            }}
          >
            <View style={styles.fullScreenCentered}>
              <BlurView
                intensity={10}
                tint="dark"
                style={StyleSheet.absoluteFill}
              />

              <View style={styles.modalView}>
                <View>
                  <Text style={styles.modalText}>
                    Are you sure you want to{" "}
                  </Text>
                  <Text style={styles.modalText2}> logout?</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setmodalVisible(false)}
                  style={{
                    backgroundColor: "#6C5DD3",
                    height: height * 0.07,
                    width: width * 0.4,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: width * 0.1,
                    marginTop: height * 0.02,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Baloo2-Medium",
                      fontSize: width * 0.05,
                      color: "#ffffff",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}>
                  <Text
                    style={{
                      fontFamily: "Baloo2-Medium",
                      fontSize: width * 0.05,
                      color: "red",
                      marginTop: height * 0.02,
                    }}
                  >
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Pressable onPress={() => setmodalVisible(true)}>
            <View
              style={[
                {
                  marginLeft: width * 0.05,
                  flexDirection: "row",
                  gap: width * 0.03,
                  paddingRight: width * 0.7,
                  paddingVertical: height * 0.03,
                },
              ]}
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
          </Pressable>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    backfaceVisibility: "visible",
  },
  modalView: {
    width: width * 0.85,
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.06,
    borderRadius: width * 0.04,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modalText: {
    fontFamily: "Baloo2-Medium",
    fontSize: Math.min(width, height) * 0.045,
    textAlign: "center",
    marginBottom: height * 0.015,
  },
  modalText2: {
    fontFamily: "Baloo2-Medium",
    fontSize: Math.min(width, height) * 0.045,
    textAlign: "center",
  },
  fullScreenCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
