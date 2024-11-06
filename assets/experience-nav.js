import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './About';

function ExperienceScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Experience Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default ExperienceScreen;


import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import ExperienceScreen from './Experience';

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title="Comb through experience"
        onPress={() => navigation.navigate('Experience')}
      />
    </View>
  );
}

export default AboutScreen;