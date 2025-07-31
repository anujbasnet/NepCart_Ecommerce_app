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
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const { height, width } = Dimensions.get("window");
const EditProfile = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{flex:1}}
    >
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Edit Profile
        </Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          
          <Text style={styles.label}>Email or Phone Number</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={20} color="#777" />
            <TextInput
              placeholder="Enter your email or phone number"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor:'#ffffff'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
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
