import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function PlantItem(props) {

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.onDeletePlant(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default PlantItem;