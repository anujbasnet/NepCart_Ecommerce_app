import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("window");
const ProductsDetailsScreen = ({ route }) => {
  const [fontsLoaded] = useFonts({
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
  });
  const { product } = route.params;

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{flex:1,}}>
    <ScrollView
      style={{backgroundColor: "#ffffff",}}
      contentContainerStyle={{ paddingBottom:32 }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Image source={product.image} style={{ width: "100%", height: 300 }} />
        <Text
          style={{
            fontSize: width * 0.07,
            fontFamily: "Baloo2-Medium",
            marginTop: height * 0.02,
            padding:16
          }}
        >
          {product.title}
        </Text>
        <Text
          style={{
            fontSize: width * 0.05,
            color: "gray",
            fontFamily: "Baloo2-Regular",
            paddingHorizontal:16
          }}
        >
          {product.price}
        </Text>
        <Text
          style={{
            fontSize: width * 0.04,
            marginTop: 15,
            fontFamily: "Baloo2-Regular",
            paddingHorizontal:16
          }}
        >
          {product.description}
        </Text>
      </View>
      <View style={{paddingHorizontal:16}}>
        <Pressable onPress={() => {}} style={styles.Cart}>
          <Text style={styles.ButtonText}>Add to Cart</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.Cart2}>
          <Text style={styles.ButtonText2}>Buy Now</Text>
        </Pressable>
      </View>
    </ScrollView>
    </View>
  );
};

export default ProductsDetailsScreen;

const styles = StyleSheet.create({
  Cart: {
    backgroundColor: "#6C5DD3",
    alignItems: "center",
    width: width * 0.7,
    marginLeft: width * 0.1,
    marginTop: height * 0.1,
    borderRadius: 100,
    padding:10
  },
  ButtonText: {
    fontFamily: "Baloo2-Regular",
    fontSize: height * 0.04,
    color: "#ffffff",
  },
   Cart2: {
    backgroundColor: "#d5d5d5ff",
    alignItems: "center",
    width: width * 0.7,
    marginLeft: width * 0.1,
    marginTop: height * 0.03,
    borderRadius: 100,
    padding:10
  },
  ButtonText2: {
    fontFamily: "Baloo2-Regular",
    fontSize: height * 0.04,
    color: "#5a5a5aff",
  },
});
