import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainHome from "./screens/MainHome";
import ProductsDetailsScreen from "./screens/ProductsDetailsScreen";
const stack = createStackNavigator();

const StackHome = () => {
  return (
    <stack.Navigator
      initialRouteName="MainHome"
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name="MainHome" component={MainHome} />
      <stack.Screen name="ProductsDetailsScreen" component={ProductsDetailsScreen} />
    </stack.Navigator>
  );
};

export default StackHome;
