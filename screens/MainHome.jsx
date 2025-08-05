import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import layout from "../app/layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./Tabs/MainSettings";
import { useFonts } from "expo-font";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { collectManifestSchemes } from "expo-linking";
const { height, width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
const products = [
  {
    id: "1",
    title: "Side Hand Bag",
    brand: "Gucci",
    image: require("../assets/images/new_arrival.jpg"),
    description:
      "Elegant and timeless, the Gucci Side Hand Bag blends luxury with everyday functionality. Crafted from premium materials with signature Gucci detailing, it's perfect for both casual outings and formal occasions. Spacious, stylish, and iconic — a must-have statement piece.",
    price: "RS 120000",
  },
  {
    id: "2",
    title: "Lodenfrey",
    brand: "Gucci",
    image: require("../assets/images/Gucci_glasses.jpg"),
    description:
      "Gucci Lodenfrey is a luxury fashion store collaboration between the Italian brand Gucci and Lodenfrey, a renowned high-end department store based in Munich, Germany. Known for blending Italian craftsmanship with Bavarian heritage, this location offers exclusive Gucci collections, including clothing, handbags, shoes, and accessories in a premium boutique setting.",
    price: "RS 90000",
  },
  {
    id: "3",
    title: "VINTAGE BLUE",
    brand: "NovoGlow",
    image: require("../assets/images/Perfume_Blue.jpg"),
    description:
      "An affordable yet refined Eau de Parfum inspired by Versace Dylan Blue, Vintage Blue delivers a Mediterranean‑fresh fragrance that's ideal for daytime and casual settings. It opens with bright bergamot and neroli, transitions into soft aquatic middle tones, and settles into a warm woody‑musk dry-down",
    price: "RS 18000",
  },
  {
    id: "4",
    title: "Iphone 15",
    brand: "Apple",
    image: require("../assets/images/Iphone.jpg"),
    description:
      "Experience the power of innovation with the iPhone 15, featuring a sleek design, Dynamic Island, and the powerful A16 Bionic chip for blazing-fast performance. Capture stunning photos with the 48MP main camera, enjoy all-day battery life, and connect via USB‑C for faster and more universal charging.",
    price: "RS 175000",
  },
  {
    id: "5",
    title: "S24 Ultra",
    brand: "Samsung",
    image: require("../assets/images/S24_Ultra.jpeg"),
    description:
      "The Samsung S24 Ultra sets a new standard for flagship smartphones with its stunning 6.8-inch Dynamic AMOLED 2X display, offering vibrant colors and smooth 120Hz refresh rate. Powered by the latest Snapdragon/Exynos chipset, it delivers ultra-fast performance and efficient multitasking. Capture every detail with the advanced 108MP quad-camera system and enjoy long-lasting battery life with fast charging support.",
    price: "RS 180000",
  },
  {
    id: "6",
    title: "Rongry RC Car",
    brand: "Heattack",
    image: require("../assets/images/RC_CAR.jpg"),
    description:
      "The Rongry RC Car is a high-speed remote-controlled vehicle designed for thrill-seekers. With its robust build and responsive controls, it delivers an exhilarating driving experience, making it a must-have for RC enthusiasts.",
    price: "RS 5000",
  },
  {
    id: "7",
    title: "Tough Solar",
    brand: "Casio",
    image: require("../assets/images/Casio.jpg"),
    description:
      "The Casio Tough Solar watch combines rugged durability with eco-friendly solar power technology. Designed for outdoor enthusiasts, it features a robust build that withstands tough conditions while maintaining precise timekeeping. With solar charging, this classic timepiece offers reliable performance without the need for frequent battery changes.",
    price: "RS 104000",
  },
  {
    id: "8",
    title: "Slide Street 2",
    brand: "HotWheels",
    image: require("../assets/images/HotWheels.jpg"),
    description:
      "This exclusive 5‑piece set is part of the premium Hot Wheels Car Culture Slide Street 2 collection. Each 1:64‑scale die‑cast car features a sturdy metal body and chassis, Real Riders rubber tires, and exceptionally detailed paint and deco, making them perfect for both play and collector display ",
    price: "RS 1500",
  },
];

const Home = () => {
  const navigation = useNavigation();
  renderItem = ({ item }) => (
    <View style={styles.itemsContainer}>
      {/* First Item */}
      <Pressable
        style={styles.infoContainer}
        onPress={() =>
          navigation.navigate("ProductsDetailsScreen", { product: item })
        }
      >
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.itemBrand}>{item.brand}</Text>
          <Text style={styles.itemText}>{item.price}</Text>
        </View>
      </Pressable>
    </View>
  );
  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
  });
  const BaseURL = "http://192.168.1.5:3000";
  const [Username, setUsername] = useState("");
  const getData = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("UserEmail");
      const response = await axios.post(`${BaseURL}/getUsername`, {
        email: userEmail,
      });
      const { finalUsername } = response.data;
      setUsername(finalUsername);
    } catch (error) {
      console.log(await AsyncStorage.getItem("UserEmail"));
      console.log("Error is: ", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/pfp.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Hi, {Username}</Text>
      </View>

      <Image
        source={require("../assets/images/discount_banner.png")}
        style={styles.discount}
        resizeMode="cover"
      />

      <View style={styles.newArrivalsContainer}>
        <Text style={styles.name}>New Arrivals</Text>
        <Text style={styles.nextName}>See All</Text>
      </View>

      {/* Here I am working on Dynamic route*/}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.05,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.03,
  },
  image: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    marginRight: width * 0.03,
  },
  name: {
    fontSize: width * 0.05,
    fontFamily: "Baloo2-Bold",
  },
  discount: {
    width: "100%",
    height: height * 0.18,
    borderRadius: 20,
    marginBottom: height * 0.03,
    alignSelf: "center",
  },
  newArrivalsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  nextName: {
    fontSize: width * 0.04,
    fontFamily: "Baloo2-Medium",
    color: "#6C5DD3",
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
    marginRight: width * 0.01,
  },
  infoContainer: {
    width: width * 0.5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: width * 0.02,
    elevation: 2,
  },
  itemImage: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 15,
  },
  itemTextContainer: {
    alignItems: "center",
    marginTop: height * 0.01,
  },
  itemText: {
    fontSize: width * 0.04,
    fontFamily: "Baloo2-Medium",
  },
  itemBrand: {
    fontSize: width * 0.035,
    color: "#666",
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
});
