// MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import MyProfile from './screens/MyProfile';
import MyOrders from './screens/Tabs/MyOrders';
import Favourites from './screens/Tabs/Favourite'; 

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Profile: 'person',
            MyOrders: 'cart',
            Favourites: 'heart',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#6C5DD3',
        tabBarInactiveTintColor: 'gray',
      })}
     
    >
      <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="MyOrders" component={MyProfile} />
       <Tab.Screen name="Favourites" component={MyOrders} />
    

      <Tab.Screen name="Profile" component={MyProfile} />
     
      
    </Tab.Navigator>
  );
}
