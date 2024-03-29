import React from 'react';
import { useState } from 'react';
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
  GestureResponderEvent,
  ImageSourcePropType
} from 'react-native';


interface CardProps {
  largo: DimensionValue;
  ancho: DimensionValue;
  id:Number;
  img:String;
  name:String;
  onPress:() => void; 
  
}
export function Card({largo, ancho, img, name,id, onPress}: CardProps): React.JSX.Element {

  
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
    text:{
      color:"white"
    }
  }

  
)
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.imgContainer}>
            <Image source={{uri:img}}  style={styles.img}/>
        </View>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
}



