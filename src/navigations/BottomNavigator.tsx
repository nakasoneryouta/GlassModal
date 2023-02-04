import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';

import { images, colors } from 'app/src/config';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? images.home : images.home}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomNavigator;
