import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const LikeButton: React.FC = () => {
  const corazon = <Icon name="heart" color="red" size={20} style={{ position: 'absolute', top: 40, left: 20 }}/>
  const [likes, setLikes] = useState<number>(0);

  const handleLikePress = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLikePress} style={styles.button} testID='likeBtn'>
        <Text style={styles.buttonText}>{corazon} {likes}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  likeCount: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default LikeButton;