import * as React from 'react';
import { Button, Text, View } from 'react-native';
import ExperienceScreen from './Experience';

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'midnightblue'}}>
      <Text style={{color: 'white', textAlign: 'center'}}>Hello! My name Anastasia Mironova from 3105D group </Text>
    </View>
  );
}

export default AboutScreen;