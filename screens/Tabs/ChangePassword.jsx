import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
import { useState } from "react";
const { height, width } = Dimensions.get("window");

const ChangePassword = () => {
  useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  const [Password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(true);
    const [Password2, setPassword2] = useState("");
  const [showPassword2, setshowPassword2] = useState(true);
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };
    const togglePasswordVisibility2 = () => {
    setshowPassword2(!showPassword2);
  };

  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "position" : undefined}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Change Password
        </Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff" }}
      >
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={20} color="#777" />
            <TextInput
              placeholder="Enter new password"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              secureTextEntry={showPassword}
              value={Password}
              onChangeText={(text) => setPassword(text)}
               placeholderTextColor={'#777'}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <AntDesign
                name={showPassword ? "eyeo" : "eye"}
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          </View>
        </View>
      <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={20} color="#777" />
            <TextInput
              placeholder="Confirm new password"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              secureTextEntry={showPassword2}
              value={Password2}
              onChangeText={(text) => setPassword2(text)}
              placeholderTextColor={'#777'}
            />
            <TouchableOpacity onPress={togglePasswordVisibility2}>
              <AntDesign
                name={showPassword2 ? "eyeo" : "eye"}
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 20,
    fontFamily: "Baloo2-Medium",
    marginTop: height * 0.03,
    marginHorizontal: width * 0.05,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    marginTop: 8,
    marginHorizontal: width * 0.05,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Baloo2-Medium",
    color: "#444",
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: height * 0.35,
    marginHorizontal: width * 0.05,
    
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
  }
});
