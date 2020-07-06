import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: 'decrease', payload: 1 })}
        title="Decrease"
      />
      <Text style={styles.textStyle}>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
  },
});

export default CounterScreen;
