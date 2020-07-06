import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>Enter Passsord:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={text}
        onChangeText={e => setText(e)}
      />
      {text.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
