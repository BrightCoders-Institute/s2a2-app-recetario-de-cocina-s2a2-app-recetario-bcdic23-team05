import React from 'react';


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
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';
import data from "../data/data.json";




export function Details(data:any): React.JSX.Element {
  const {img} = data

  return (
    <View>
      <View>
        <View style={styles.container}>
          <View>
              <Image source={{uri:"https://i0.wp.com/comidistas.mx/wp-content/uploads/2023/04/hot-cakes.jpeg?fit=1024%2C1024&ssl=1"}} style={styles.image}/>
            <Text style={styles.txt_tittle}> Hot cakes </Text>
            <Text style={styles.txt_cat}> RECENT</Text>
          </View>
          <View>
            <Text style={styles.txt_ingredientes}>Ingredients for two servings</Text> 
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
              <Text style={styles.ingr}> 2 cups of flour </Text>
              <Text style={styles.ingr}> 2 cups of milk </Text>
              <Text style={styles.ingr}> 2 eggs </Text>
              <Text style={styles.ingr}> 1/2 cup of sugar </Text>
              <Text style={styles.ingr}> 1 tablespoon of baking powder </Text>
              <Text style={styles.ingr}> 1 tablespoon of vanilla extract </Text>
              <Text style={styles.ingr}> 1/2 teaspoon of salt </Text>
              <Text style={styles.ingr}> 1/2 cup of butter </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'gray',
    height: '100%',
  },
  image: {
    width: '100%',
    height:'60%',
    opacity: 0.5,
    backgroundColor:'black'
    
  },
  txt_tittle:{
    position:'absolute',
    fontSize:30,
    color:'white',
    top: 250,
    left:20
  },
  txt_cat:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top: 220,
    left:20
  },
  txt_ingredientes:{
    fontSize:20,
    color:'white',
    position:'absolute',
    left:10,
    top:-200
  },
  ingr:{
    color:'white',
    fontSize:20,
    marginTop:20,
    left:20
  },
  scroll: {
    paddingHorizontal: 5,
    borderWidth: 1
  }

})