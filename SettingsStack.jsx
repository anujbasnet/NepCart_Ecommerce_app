import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Tabs/Settings';
import EditProfile from './screens/Tabs/EditProfile';
import ChangePassword from './screens/Tabs/ChangePassword';
import ToggleNotification from './screens/Tabs/ToggleNotification';
import Security from './screens/Tabs/Security';
import Language from './screens/Tabs/Language'; 
import LegalPolicies from './screens/Tabs/LegalPolicies'

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='Settings' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ToggleNotification" component={ToggleNotification} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="LegalPolicies" component={LegalPolicies} />
    </Stack.Navigator>
  );
}