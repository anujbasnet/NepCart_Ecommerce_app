import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import CreateAccount from './screens/CreateAccount';
import Login from './screens/Login';
import Home from './screens/Home'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [userToken, setuserToken] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const data = await AsyncStorage.getItem("isLoggedIN");
        setuserToken(data ? JSON.parse(data) : false );
      } 
      catch (error) {
        console.error('Error checking login status:', error);
        setuserToken(false);
      }
    };

    checkLoginStatus();
  }, []);
  
  return (
    <NavigationContainer>
      {userToken ? (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Create" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
// You can remove the unused styles object since it's no longer needed.
  }});