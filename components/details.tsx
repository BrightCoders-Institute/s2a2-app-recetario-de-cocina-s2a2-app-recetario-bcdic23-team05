import React from 'react';


import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import LikeButton from './likebutton';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';





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
              <Icon2 name="close" color="#F2F3F4" size={29} style={{ position: 'absolute', top: 20, left: 13 }}/>
              <Icon3 name="upload" color="#F2F3F4" size={23} style={{ position: 'absolute', top: 20, left: 360 }}/>
              <View style={styles.LikeButton}>
                <LikeButton></LikeButton>
              </View>
            <Text style={styles.txt_tittle}> {item.name} </Text>
            <Text style={styles.txt_cat}> RECENT</Text>
          </View>
          <View style={styles.scroll_container}>
            <Text style={styles.txt_ingredientes}>{item.servings}</Text> 
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              showsVerticalScrollIndicator={false}
            >
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
    backgroundColor: "#262626",
    height: '100%'
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
    left:18
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
    left:20,
    opacity: 0.5,
    top:-130
  },
  ingr:{
    color:'#EEEEEE',
    fontSize:20,
    marginHorizontal:20,
    padding: 30,
    textAlign: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: '#424242'  
  },
  scroll_container: {
    top:-70
  },
  LikeButton:{
    position:'absolute',
    top:225,
    left:325
  }

})