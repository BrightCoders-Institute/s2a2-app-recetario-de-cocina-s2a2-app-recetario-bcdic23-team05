import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,

} from 'react-native';

export function Bar(): React.JSX.Element {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  
  
    return(         
        <SafeAreaView>
        <TextInput
            style={styles.input}
            placeholder= "What do you want to eat?"
            placeholderTextColor= "#F2F3F4"
            onChangeText={onChangeNumber}
            value={number}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:13,
        backgroundColor: "#323233",
        outlineStyle: 'none'
    }
    })



export default Bar;