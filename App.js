import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import PlantInput from './components/PlantInput';
import PlantItem from './components/PlantItem';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addPlant(plantTitle) {
    setPlants(currentPlants => [
      ...currentPlants,
      {
        id: Math.random().toString(),
        value: plantTitle,
      }
    ])

    setIsModalOpen(false);
  }

  function removePlant(plantId) {
    setPlants(currentPlants => currentPlants.filter((plant) => plant.id !== plantId))
  }

  return (
    <View style={styles.screen}>
      <Button 
        title="Add New Plant"
        onPress={() => setIsModalOpen(true)}
      />
      <PlantInput
        isVisible={isModalOpen}
        onAddPlant={addPlant}
        onCancel={() => setIsModalOpen(false)}
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