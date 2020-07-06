import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1Style}></View>
      <View style={styles.view2Style}></View>
      <View style={styles.view3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1Style: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  view2Style: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  view3Style: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
