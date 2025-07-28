import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import CreateAccount from './screens/CreateAccount';
import Login from './screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import MainTabNavigator from './MainTabNavigator'; 
import Verification from './screens/Verification';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [userToken, setuserToken] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("isLoggedIN");
        setuserToken(false);
      } catch (error) {
        console.error('Error checking login status:', error);
        setuserToken(false);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {userToken ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Create" component={CreateAccount} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
