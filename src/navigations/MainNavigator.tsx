import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="BottomNavigator"
    >

      <Stack.Screen name="BottomNavigator" options={{ headerShown: false }}>
        {() => <BottomNavigator />}
      </Stack.Screen>

    </Stack.Navigator>
  );
};

export default MainNavigator;
