import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const { width, height } = Dimensions.get("window");


const CreateAccount = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const baseURL = "http://192.168.1.5:3000";

// to be done later
const postdata = async () => {
  try {
     const response = await axios.post(`${baseURL}/users`, {
      username: Username,
      email: Email,
      password: Password,
    });
    const{message}=response.data;
    setUsername("");
    setEmail(""); 
    setPassword("");
    console.log("Success :", message);
    alert(message);//code sending is done ui for verification is remaining 
    navigation.navigate("Verification");
  } catch (err) {
    console.log("Create account error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Account creation failed");
  }
};
         
    
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Create Account</Text>
          <Text style={styles.headerText}>
            Start learning by creating your account
          </Text>

          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={20} color="#777" />
            <TextInput
              placeholder="Create your username"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              value={Username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

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
              placeholder="Create your password"
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
            <Pressable
              style={styles.button}
              onPress={() => {
                if (!Username || !Email || !Password) {
                  alert("Please fill in all fields");
                  return;
                }
                else if (Password.length < 6) {
                  alert("Password must be at least 6 characters long");
                }
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
                  alert("Please enter a valid email address");
                  return;
                }
                else if (!/^[a-zA-Z0-9]+$/.test(Username)) {
                  alert("Username can only contain letters and numbers");
                  return;
                }
                else{
                postdata();
                }
                
                // Handle account creation logic here
                // For now, you can leave this empty or add navigation if needed
              }}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </Pressable>
            <Text style={styles.headerText}>Or sign up using</Text>
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

export default CreateAccount;


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
