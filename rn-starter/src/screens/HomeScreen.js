import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Button
        onPress={() => {
          navigate('Components');
        }}
        title="Go to Components Demo"
      />
      <Button onPress={() => navigate('List')} title="Go to List Demo" />
      <Button onPress={() => navigate('Image')} title="Go to Image Demo" />
      <Button onPress={() => navigate('Counter')} title="Go to Counter Demo" />
      <Button onPress={() => navigate('Color')} title="Go to Color Demo" />
      <Button onPress={() => navigate('Square')} title="Go to Square Demo" />
      <Button onPress={() => navigate('Text')} title="Go to Text Demo" />
      <Button onPress={() => navigate('Box')} title="Go to Box Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
