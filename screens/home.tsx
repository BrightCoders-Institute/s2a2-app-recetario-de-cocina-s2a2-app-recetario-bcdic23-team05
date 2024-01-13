import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    DimensionValue,
    GestureResponderEvent,
  } from 'react-native';

import { Card } from '../components/card';
import { Bar} from '../components/searchBar'
import data from "../data/data.json";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

 function Home():React.JSX.Element {

  type RootStackParamList = {
    Details: object;
    
  };

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  
  interface CardProps {
    largo: DimensionValue;
    ancho: DimensionValue;
    id:Number;
    img:String;
    name:String;
    onPress:() => void;
    
  }

  const handlePress = (item:object) =>{
    navigation.navigate('Details',item)
  }
  
  const renderItem = ({item}:{item:CardProps}) =>(
    <Card 
    largo ={200} ancho={200}
    id={item.id}
    img={item.img}
    name={item.name}
    onPress={() => handlePress(item)}
    />
    )
    const NewrenderItem = ({item}:{item:CardProps}) =>(
      <Card 
      largo ={100} ancho={100}
      id={item.id}
      img={item.img}
      name={item.name}
      onPress={() => handlePress(item)}
      
      />
      )


    return(
        <SafeAreaView style={styles.backgroundApp}>
      
    <StatusBar/>
    <View>
      <Bar/>
    </View>
   
  
      <View>
    <Text style={[styles.headingColor,styles.text_trending]}> TRENDING</Text>
    
    </View>
    <FlatList
      data={data}
      renderItem={NewrenderItem}
      horizontal={true}
      
      />
    <View >
          <Text style={[styles.headingColor, styles.text_re]}> RECENT</Text>
      </View>
      
      <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={true}
      />
      
    
  </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundApp:{
      backgroundColor: "#262626",
      flex: 1
    },
    headingColor:{
      color:"#DA1971",
    },
    
    text_trending:{
      marginTop:10,
      fontSize:25,
      color:'#EB3D6F',
      position: 'absolute'
    },
    text_re:{
      fontSize:25,
      color:'#EB3D6F',
      position: 'absolute',
      
      
    }
  })

  export default Home
  