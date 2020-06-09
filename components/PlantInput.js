import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function PlantInput(props) {
  const [enteredPlant, setEnteredPlant] = useState('');

  function inputChangeHandler(enteredText) {
    setEnteredPlant(enteredText);
  }

  return (<View style={styles.inputContainer}>
    <TextInput
      placeholder='Plant'
      style={styles.input}
      onChangeText={inputChangeHandler}
      value={enteredPlant}
    />
    <Button
      title="ADD"
      style={{}}
      onPress={() => props.onAddPlant(enteredPlant)}
    />
  </View>);
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
});

export default PlantInput;