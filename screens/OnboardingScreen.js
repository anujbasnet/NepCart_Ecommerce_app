import React, { useState, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Pressable,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Welcome to NepCart",
    description: "Best products at your fingertips.",
    image: require("../assets/images/image1.png"),
  },
  {
    key: "2",
    title: "Fast Delivery",
    description: "Get your orders delivered quickly.",
    image: require("../assets/images/image2.png"),
  },
  {
    key: "3",
    title: "Easy Payments",
    description: "Multiple payment options available.",
    image: require("../assets/images/image3.jpeg"),
  },
];

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
  });

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  if (!fontsLoaded) return null;

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  const Stack = createNativeStackNavigator();
  const StackNavigator = () => {
    return(
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Create" component={CreateAccount} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} screenOptions={{ headerShown: false }}/>
      </Stack.Navigator>
    );}

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      {/* Slide section */}
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      {/* Dots - fixed below description */}
      <View style={styles.dotContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>

      {/* Button at the bottom */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => { 
          navigation.navigate("Create")  // Navigate to Create Account screen
        }}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
      <View style={styles.base}>
        <Text style={styles.basetxt} 
        onPress={() => { 
          navigation.navigate("Login")  // Navigate to Create Account screen
        }}>Already Have an Account</Text>
      </View>

    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: "45%",
    borderRadius: 50,
    marginTop: "20%",
    marginBottom: "10%",
  },
  title: {
    fontSize: 30,
    color: "#333",
    textAlign: "center",
    fontFamily: "Baloo2-Bold",
  },
  description: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 5,
    fontFamily: "Baloo2-Medium",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "#6C5DD3",
  },
  dotInactive: {
    backgroundColor: "#ccc",
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
  base:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  }
    , basetxt: {
        color: "#6C5DD3",
        fontSize: 18,
        fontFamily: "Baloo2-Medium",
    }
});
