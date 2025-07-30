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
import { AuthContext } from './authContext';
export default function App() {
  const RootStack = createNativeStackNavigator();
  const [userToken, setuserToken] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkLoginStatus = async () => {
        const token = await AsyncStorage.getItem("isLoggedIN");
        setuserToken(token);
        setLoading(false);
        checkLoginStatus();
    };
    checkLoginStatus();
  }, []);
  if(loading) return null;

  return (
    <AuthContext.Provider value={{ userToken, setuserToken }}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {userToken ? (
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
          ) : (
            <>
              <RootStack.Screen name="Splash" component={SplashScreen} />
              <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
              <RootStack.Screen name="Create" component={CreateAccount} />
              <RootStack.Screen name="Verification" component={Verification} />
              <RootStack.Screen name="Login" component={Login} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
