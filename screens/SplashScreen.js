import { StyleSheet, Text, View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
  });

  const fadeAnim = useRef(new Animated.Value(1)).current; // start fully visible

  useEffect(() => {
    // Start fade-out after 1 second, then navigate after 2 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      delay: 1000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar
        backgroundColor="#6C5DD3" // For Android
        barStyle="light-content" // For iOS & Android text/icons (light-content or dark-content)
      />
      <Text style={styles.text}>NepCart</Text>
      <Text style={styles.text2}>Any shopping just from home</Text>
      <Text style={styles.text3}>Version 0.0.1</Text>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C5DD3",
    color: "#fff",
  },
  text: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "Baloo2-Bold",
  },
  text2: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Baloo2-Medium",
  },
  text3: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "Baloo2-Medium",
    position: "absolute",
    bottom: 50,
  },
});
