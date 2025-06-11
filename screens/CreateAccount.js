import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const CreateAccount = () => {
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
          placeholder="Enter your email or phone number"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
      </View>
      <View style={styles.inputcontainer}>
        <AntDesign
          style={{ marginLeft: "5%" }}
          name="user"
          size={24}
          color="#777"
        />
        <Text>{"  "}</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          autoCorrect={false}
          spellCheck={false}
        />
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
    fontSize: 16,
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
});
