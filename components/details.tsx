import React from 'react';


import {

  ScrollView,

  StyleSheet,
  Text,
 
  View,
  Image,
} from 'react-native';





export function Details({route}:any): React.JSX.Element {
 
  const item = route.params
  const recipe = item.recipe
  console.log(recipe)
  return (
    <View>
      <View>
        <View style={styles.container}>
          <View>
              <Image source={{uri:item.img}} style={styles.image}/>
            <Text style={styles.txt_tittle}> {item.name} </Text>
            <Text style={styles.txt_cat}> RECENT</Text>
          </View>
          <View>
            <Text style={styles.txt_ingredientes}>{item.servings}</Text> 
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
             {recipe.map((items:string) =>{
              return (<Text style={styles.ingr}>{items}</Text>)
             })}
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
    color:'EEE9E1',
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