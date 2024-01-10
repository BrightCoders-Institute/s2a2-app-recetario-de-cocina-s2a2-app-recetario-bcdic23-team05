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

{/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='home'
          component={}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer> */}

function App(): React.JSX.Element {

  return (

    
    <SafeAreaView style={styles.backgroundApp}>
      
    <StatusBar/>
    <View>
      <Bar/>
    </View>
   
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
     >
      <View>
    <Text style={[styles.headingColor,styles.text_trending]}> TRENDING</Text>
    </View>
      <View style={{flexDirection:"row",alignItems:"flex-start",marginTop:45 }} >
        
        {data.map((p)=>(
          <Card
          key={p.id}
          largo ={120} ancho={140}
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
        <View >
          <Text style={[styles.headingColor, styles.text_re]}> RECENT</Text>
      </View>
      <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"center", marginTop:45}} > 
      
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
    backgroundColor: "#262626",
    flex: 1
  },
  headingColor:{
    color:"#DA1971"
  },
  
  text_trending:{
    color:"F5F5F5",
    marginTop:10,
    fontSize:25,
    color:'#800080',
    position: 'absolute'
  },
  text_re:{
    color:"F5F5F5",
    fontSize:25,
    color:'#800080',
    position: 'absolute',
    flex: 1
  },
  
})

export default App;
