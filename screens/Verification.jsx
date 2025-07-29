import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import React, { useRef, useState } from "react";
import axios from "axios";
const { height, width } = Dimensions.get("window");
const Verification = ({navigation}) => {
  useFonts({
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
  });
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const baseURL = "http://192.168.1.5:3000";
  const newCode = [...code];
  const handleChange = (text, index) => {
    
    newCode[index] = text;
    setCode(newCode);
    
    // Move to next input
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const FinalOTP = newCode.join('');
  const handleVerification=async()=>{
    
    try{
      const response = await axios.get(`${baseURL}/handleVerification`);
    if(FinalOTP===response.data.code){
      navigation.navigate('Login');
    }else{
      console.log("Incorrect OTP")
      alert('Incorrect Code')
    }

    } catch(error){
      console.log('error fetching OTP: ',error);
      alert('Something went wrong');
    }

   
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : undefined}
      >
        <View style={styles.heading}>
          <Text
            style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}
          >
            Verification
          </Text>
        </View>
        <View style={styles.designContainer}>
          <View style={styles.envelopeContainerBackground}>
            <View style={styles.envelopeContainer}>
              <FontAwesome name="envelope" size={24} color="#ffffffff" />
            </View>
          </View>
        </View>
        <View style={styles.baseContainer}>
          <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-bold" }}>
            Verification Code
          </Text>
          <Text
            style={{
              fontSize: width * 0.045,
              fontFamily: "Baloo2-Regular",
              color: "#777",
            }}
          >
            Code is sent to your gmail
          </Text>
        </View>
        <View style={styles.container}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              ref={(ref) => (inputs.current[index] = ref)}
              caretHidden
            />
          ))}
        </View>
        <Pressable style={styles.button} onPress={()=>{
          handleVerification();
        }} >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <View style={{ flexDirection: "row", flex:1, justifyContent:'center' }}>
          <Text style={{ fontFamily: "Baloo2-Regular",  fontSize:width*0.045, }}>
            Didn't receive the code?
          </Text>
          <Text style={{ color: "#6555d2ff", fontFamily: "Baloo2-Regular", fontSize:width*0.045,  }}>
            Resend
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
  },
  envelopeContainer: {
    backgroundColor: "#6C5DD3",
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: width * 1,
    alignItems: "center",
    justifyContent: "center",
  },
  envelopeContainerBackground: {
    backgroundColor: "#ded9faff",
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: width * 1,
    alignItems: "center",
    justifyContent: "center",
  },
  designContainer: {
    alignItems: "center",
    marginTop: height * 0.1,
  },
  baseContainer: {
    alignItems: "center",
    marginTop: height * 0.05,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#999",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#6C5DD3",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    marginLeft: width * 0.1,
    marginTop: height * 0.05,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Baloo2-Medium",
  },
});
