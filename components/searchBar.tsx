import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,

} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export function Bar(): React.JSX.Element {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  
  
    return(         
        <View>
        
        <TextInput
            style={styles.input}
            placeholder= "What do you want to eat?"
            placeholderTextColor= "#F2F3F4"
            onChangeText={onChangeNumber}
            value={number}
        />
        <Icon name="search" color="#F2F3F4" size={28} style={{ position: 'absolute', top: 18, left: 20 }}/>
        <Icon2 name="keyboard-voice" color="#F2F3F4" size={22} style={{ position: 'absolute', top: 21, left: 350 }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        padding: 10,
        paddingLeft: 40,
        borderRadius:10,
        backgroundColor: "#323233",
       }
    })



export default Bar;