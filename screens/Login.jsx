
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import users from "../backend/Data.json";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const matchuser = users.find(
    (user) =>
      user.Email === Email && bcrypt.compare(Password, matchuser.password)
  );
  const baseURL = "http://192.168.1.5:3000";

  const handleLogin = async () => {
    if (!Email || !Password) {
      alert("Please enter your email and password");
      return;
    }

    try {
      const response = await axios.post("http://192.168.1.5:3000/login", {
        email: Email,
        password: Password,
      });

      console.log("Login successful:", JSON.stringify(response.data));

      if (response.data) {
        await AsyncStorage.setItem("isLoggedIN", JSON.stringify(true)); // Save token to AsyncStorage
        const check = await AsyncStorage.getItem("isLoggedIN");
        console.log("Stored value:", check);
        navigation.navigate("Home"); // Navigate to Home and reset stack
      } else {
        alert("Login failed: token not received");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
      alert("Invalid email or password");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Login Account</Text>
          <Text style={styles.headerText}>
            Please login with registered account
          </Text>

          <Text style={styles.label}>Email or Phone Number</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={20} color="#777" />
            <TextInput
              placeholder="Enter your email or phone number"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={20} color="#777" />
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              secureTextEntry={showPassword}
              value={Password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <AntDesign
                name={showPassword ? "eyeo" : "eye"}
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
            <Text style={styles.headerText}>Or using other method</Text>
          </View>

          {/* Google Sign Up */}
          <TouchableOpacity
            onPress={() => console.log("Google sign up")}
            style={styles.altAuthContainer}
          >
            <Image
              source={require("../assets/images/Signupwithgoogle.png")}
              style={styles.altAuthImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Facebook Sign Up */}
          <TouchableOpacity
            onPress={() => console.log("Facebook sign up")}
            style={styles.facebookContainer}
          >
            <Image
              source={require("../assets/images/FacebookIcon.png")}
              style={styles.facebookIcon}
              resizeMode="contain"
            />
            <Text style={styles.facebookText}>Sign up with Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.08,
  },
  header: {
    fontSize: 28,
    fontFamily: "Baloo2-Bold",
  },
  headerText: {
    fontSize: 16,
    color: "#777",
    fontFamily: "Baloo2-Medium",
    marginTop: 4,
  },
  label: {
    fontSize: 20,
    fontFamily: "Baloo2-SemiBold",
    marginTop: height * 0.03,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    marginTop: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Baloo2-Medium",
    color: "#444",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: height * 0.04,
  },
  button: {
    backgroundColor: "#6C5DD3",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Baloo2-Medium",
  },
  altAuthContainer: {
    marginTop: height * 0.03,
    alignItems: "center",
  },
  altAuthImage: {
    width: width * 0.6,
    height: height * 0.06,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.015,
    gap: 10,
  },
  facebookIcon: {
    width: 24,
    height: 24,
  },
  facebookText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    fontFamily: "Baloo2-Medium",
  },
});
