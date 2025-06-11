import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const CreateAccount = ({ navigation }) => {
  const [showpassword, setshowpassword] = useState(true);
  const togglePasswordVisibility = () => {
    setshowpassword(!showpassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.headertext}>
        Start learning with create your account
      </Text>
      <Text style={styles.username}>Username</Text>
      <View style={styles.inputcontainer}>
        <AntDesign
          style={{ marginLeft: "5%" }}
          name="user"
          size={24}
          color="#777"
        />
        <Text>{"  "}</Text>
        <TextInput
          placeholder="Create your username"
          style={styles.input}
          autoCorrect={false}
          spellCheck={false}
        />
      </View>

      <Text style={styles.username}>Email or Phone Number</Text>
      <View style={styles.inputcontainer}>
        <AntDesign
          style={{ marginLeft: "5%" }}
          name="mail"
          size={24}
          color="#777"
        />
        <Text>{"  "}</Text>
        <TextInput
          placeholder="Enter your email or phone number"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
      </View>

      <Text style={styles.username}>Password</Text>
      <View style={styles.inputcontainer}>
        <AntDesign
          style={{ marginLeft: "5%" }}
          name="lock"
          size={24}
          color="#777"
        />
        <Text>{"  "}</Text>
        <TextInput
          placeholder="Create your password"
          style={styles.input}
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={showpassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <AntDesign
            style={{ marginRight: "5%" }}
            name={showpassword ? "eyeo" : "eye"}
            size={24}
            color="#777"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        <Text style={styles.headertext}>Or using other method</Text>
      </View>
      <Image
        source={require("../assets/images/Signupwithgoogle.png")}
        style={{
          marginHorizontal: "20%",
          height: "5%",
          width: "60%",
          marginTop: 20,
          borderRadius: 20,
        }}
        onPress={() => {
          //To be implemented later
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: "5%",
          marginLeft: "10%",
          gap: 10,
          marginTop: "1%",
        }}
        onPress={() => {
          //To be implemented later
        }}
      >
        <Image
          source={require("../assets/images/FacebookIcon.png")}
          style={{ width: "10%", height: "90%",marginTop: 15 }}
        />
        <Text style={styles.facebooklogin}>Sign up with Facebook</Text>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    paddingTop: "15%",
    paddingLeft: "5%",
    fontFamily: "Baloo2-Bold",
  },
  headertext: {
    fontSize: 18,
    paddingLeft: "5%",
    fontFamily: "Baloo2-Medium",
    color: "#777",
    marginTop: 5,
  },
  username: {
    fontSize: 25,
    paddingLeft: "5%",
    fontFamily: "Baloo2-SemiBold",
    marginTop: "7%",
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginTop: "5%",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    height: "7%",
  },
  input: {
    flex: 1,
    marginLeft: "1%",
    fontSize: 20,
    color: "#444",
    fontFamily: "Baloo2-Medium",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#6C5DD3",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Baloo2-Medium",
  },
  facebooklogin: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#444",
    fontFamily: "Baloo2-Medium",
    textAlign: "center",
    marginTop: 20,
  },
});