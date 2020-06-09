import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

function PlantInput(props) {
  const [enteredPlant, setEnteredPlant] = useState('');

  function handleInputChangeText(enteredText) {
    setEnteredPlant(enteredText);
  }

  function handleAddButtonPress() {
    props.onAddPlant(enteredPlant);
    setEnteredPlant('');
  }

  function handleCancelButtonPress() {
    props.onCancel();
  }

  return (
    <Modal
      visible={props.isVisible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Plant'
          style={styles.input}
          onChangeText={handleInputChangeText}
          value={enteredPlant}
        />
        <View style={styles.buttonPair}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="gray"
              onPress={handleCancelButtonPress}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={handleAddButtonPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '40%',
  }
});

export default PlantInput;