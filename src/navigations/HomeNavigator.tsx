import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import {
  Home,
} from '../../src/screens';

const Stack = createStackNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <Home navigation={props.navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
