import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  DimensionValue,
  ImageSourcePropType
} from 'react-native';

interface CardProps {
  largo: DimensionValue;
  ancho: DimensionValue;
  id:Number;
  img:String;
  name:String;
  
}
export function Card({largo, ancho, img, name}: CardProps): React.JSX.Element {

  
  
  const styles = StyleSheet.create({
    img:{
        width:ancho,
        height:largo,
        borderRadius:10
    },
    imgContainer:{
        width:ancho,
        height:largo,
        
    },
    card:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        marginHorizontal: 10
    },
    backgroundApp:{
      backgroundColor: "#262626"
    },
    headingColor:{
      color:"#DA1971"
    },
    text:{
      color:"F5F5F5"
    }
  }
)
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.imgContainer}>
            <Image source={{uri:img}}  style={styles.img}/>
        </View>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
}



