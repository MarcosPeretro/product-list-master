import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer} >
      <Picker
        style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) =>
          setSelectedCategory(itemValue)
        }>
        <Picker.Item label="Eletrodomesticos" value="Eletronicos" />
        <Picker.Item label="Moveis" value="Mobilia" />
        <Picker.Item label="Forja" value="Forja" />
      </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
});
