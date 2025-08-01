import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Tabs/Settings';
import EditProfile from './screens/Tabs/EditProfile';
import ChangePassword from './screens/Tabs/ChangePassword';
import notifications from './screens/Tabs/notifications';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='Settings' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="notifications" component={notifications} />
    </Stack.Navigator>
  );
}