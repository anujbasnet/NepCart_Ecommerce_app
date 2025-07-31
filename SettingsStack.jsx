import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Tabs/Settings';
import EditProfile from './screens/Tabs/EditProfile';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='Settings' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}