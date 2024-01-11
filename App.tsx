/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from './screens/home';
import { Details } from './components/details';
const Stack = createStackNavigator();



function App(): React.JSX.Element {

  return (
    
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='Home' component={Home} options={{title: 'Welcome', headerShown: false}}/>
          
      //   </Stack.Navigator>
      // </NavigationContainer> 
      <Details></Details>
  );
}



export default App;
