/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Card } from './components/card';
import data from "./data/data.json"

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
   //{data[1].name}

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
       
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       >
        <View style={{flexDirection:"row"}} >
          <Card/>
          <Card/>
          <Card/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
