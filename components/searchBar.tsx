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
  
  const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:13,
        backgroundColor: "#323233"
    }
    })
    return(         
        <SafeAreaView>
        <TextInput
            style={styles.input}
            placeholder="What do you want to eat?"
            onChangeText={onChangeNumber}
            value={number}
        />
        </SafeAreaView>
    )
}



export default Bar;