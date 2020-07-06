import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/blogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate('Edit')}>
        <EvilIcons name="pencil" size={36} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
