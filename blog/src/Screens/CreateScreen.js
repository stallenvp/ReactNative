import React, { useState, useContext } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import { black } from 'color-name';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  const callback = () => navigation.navigate('Index');

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, callback);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
