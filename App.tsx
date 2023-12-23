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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from './components/card';
import { Bar} from './components/searchBar'
import data from "./data/data.json";
import { Details } from './components/details';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();


function App(): React.JSX.Element {

  return (
    <SafeAreaView >
    <StatusBar/>
    <View>
      <Bar/>
    </View>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
     >
      <View style={{flexDirection:"row"}} >
        <Text style={styles.headingColor}>TRENDING</Text>
        {data.map((p)=>(
          <Card
          key={p.id}
          largo ={100} ancho={100}
          id={p.id}
          img={p.img}
          name={p.name}
        
          />
        ))}
      </View>
    </ScrollView>
    <ScrollView  
      contentInsetAdjustmentBehavior="automatic"
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
      <View style={{flexDirection:"row"}} >
        {data.map((p)=>(
            <Card
            key={p.id}
            largo ={200} ancho={200}
            id={p.id}
            img={p.img}
            name={p.name}
          
            />
          ))}
      </View>
    </ScrollView>
  </SafeAreaView>
   
   
  );
}

const styles = StyleSheet.create({
  backgroundApp:{
    backgroundColor: "#262626"
  },
  headingColor:{
    color:"#DA1971"
  },
  text:{
    color:"F5F5F5"
  }
})

export default App;
