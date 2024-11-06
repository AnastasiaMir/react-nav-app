import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './About';
import ExperienceScreen from './Experience';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About Me" component={AboutScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}