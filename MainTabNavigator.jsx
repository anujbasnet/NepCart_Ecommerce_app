// MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Settings from './screens/Tabs/Settings';
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
            Settings: 'settings',
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
         <Tab.Screen name="MyOrders" component={MyOrders} />
       <Tab.Screen name="Favourites" component={Favourites} />
    

      <Tab.Screen name="Settings" component={Settings} />
     
      
    </Tab.Navigator>
  );
}
