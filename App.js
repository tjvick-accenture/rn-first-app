import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PlantInput from './components/PlantInput';
import PlantItem from './components/PlantItem';

export default function App() {
  const [plants, setPlants] = useState([]);

  function addPlant(plantTitle) {
    setPlants(currentPlants => [
      ...currentPlants,
      {
        id: Math.random().toString(),
        value: plantTitle,
      }
    ])
  }

  function removePlant(plantId) {
    setPlants(currentPlants => currentPlants.filter((plant) => plant.id !== plantId))
  }

  return (
    <View style={styles.screen}>
      <PlantInput
        onAddPlant={addPlant}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={plants}
        renderItem={itemData => <PlantItem
          id={itemData.item.id}
          title={itemData.item.value}
          onDeletePlant={removePlant}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});