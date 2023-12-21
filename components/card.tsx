import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export function Card(): React.JSX.Element {
  
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.imgContainer}>
            <Image source={{uri:'https://picsum.photos/200/300'}}  style={styles.img}/>
        </View>
        <Text>Comida</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
        borderRadius:10
    },
    imgContainer:{
        width:200,
        height:200,
        
    },
    card:{
        marginTop:100,
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center"
    }
    
})

