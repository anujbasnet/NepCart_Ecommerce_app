import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import layout from "../app/layout";
const { height, width } = Dimensions.get("window");
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./Tabs/Settings";
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/pfp.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Hi, </Text>
        <Text style={styles.name}>User</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/images/discount_banner.png")}
          style={styles.discount}
          resizeMode="cover"
        />

        <View style={styles.newArrivalsContainer}>
          <Text style={styles.name}>New Arrivals</Text>
          <Text style={styles.nextName}>See All</Text>
        </View>

        <View style={styles.itemsContainer}>
          {/* First Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/new_arrival.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Side Hand Bag</Text>
              <Text style={styles.itemBrand}>Gucci</Text>
              <Text style={styles.itemText}>RS 120000</Text>
            </View>
          </View>

          {/* Second Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/Gucci_glasses.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Lodenfrey</Text>
              <Text style={styles.itemBrand}>Gucci</Text>
              <Text style={styles.itemText}>RS 90000</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          {/* First Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/Perfume_Blue.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>VINTAGE BLUE</Text>
              <Text style={styles.itemBrand}>NovoGlow </Text>
              <Text style={styles.itemText}>RS 18000</Text>
            </View>
          </View>

          {/* Second Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/Iphone.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Iphone 15</Text>
              <Text style={styles.itemBrand}>Apple</Text>
              <Text style={styles.itemText}>RS 175000</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          {/* First Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/S24_Ultra.jpeg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>S24 Ultra</Text>
              <Text style={styles.itemBrand}>Samsung</Text>
              <Text style={styles.itemText}>RS 180000</Text>
            </View>
          </View>

          {/* Second Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/RC_CAR.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Rongry RC Car</Text>
              <Text style={styles.itemBrand}>Heattack</Text>
              <Text style={styles.itemText}>RS 5000</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          {/* First Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/Casio.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Tough Solar</Text>
              <Text style={styles.itemBrand}>Casio</Text>
              <Text style={styles.itemText}>RS 104000</Text>
            </View>
          </View>

          {/* Second Item */}
          <View style={styles.infoContainer}>
            <Image
              source={require("../assets/images/HotWheels.jpg")}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>Slide Street 2</Text>
              <Text style={styles.itemBrand}>HotWheels</Text>
              <Text style={styles.itemText}>RS 1500</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      
      
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
  },
  infoContainer: {
    width: "48%",
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    padding: width * 0.02,
    elevation: 2,
  },
  itemImage: {
    width: "100%",
    height: height * 0.22,
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
});
