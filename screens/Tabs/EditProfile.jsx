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
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
const EditProfile = () => {
  useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor:'#ffffff' }}
    >
       <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Edit Profile
        </Text>
      </View>
      <View
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff" }}
      >
        <View style={{ alignItems: "center", marginTop: height * 0.03 }}>
          <Image
            source={require("../../assets/images/pfp.jpg")}
            style={styles.Image}
          />
        </View>
        <View>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={20} color="#777" />
            <TextInput
              placeholder="User"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              placeholderTextColor={"black"}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Email or Phone Number</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={20} color="#777" />
            <TextInput
              placeholder="anjbas123@gmail.com"
              style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              placeholderTextColor={"black"}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        </View>
      </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

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
    alignItems: "center",
    marginTop: height * 0.15,
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
  },
  Image: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 100,
  },
});
