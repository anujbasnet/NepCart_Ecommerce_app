import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
const { height, width } = Dimensions.get("window");

const Language = () => {
  useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  const [selectedLanguage, setselectedLanguage] = useState();
  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "position" : undefined}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Languages
        </Text>
      </View>
      <View
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff" }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Select your language</Text>
        </View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setselectedLanguage(itemValue);
          }}
        >
          <Picker.Item label="English" value="english"  />
          <Picker.Item label="Spanish" value="spanish" />
          <Picker.Item label="Japanese" value="japanese" />
          <Picker.Item label="French" value="french" />
        </Picker>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Language;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
    backgroundColor: "#ffffff",
  },
  text:{
    fontSize: 20,
    fontFamily: "Baloo2-Medium",
    marginTop: height * 0.03,
    marginHorizontal: width * 0.05,
  },
});
