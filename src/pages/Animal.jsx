import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import AnimalList from ".../components/AnimalList";

const Animal = () => {

  const [search, setSearch] = useState('');
  const [animals, setanimals] = useState([
    {
      "id": "1",
      "name": "Leão",
      "description": "O leão é um grande felino da família dos felídeos.",
      "nutrition": "Heterotrófico",
      "cellType": "Eucariontes",
      "cellOrganization": "Multicelulares",
      "reproduction": "Sexuada",
      "respiration": "Aeróbia",
      "image": "https://via.placeholder.com/150"
    }
  ]);

  return (
    <SafeAreaView style={[globalStyles.container, { marginHorzontal: 16 }]}>
      <View>
        <Text style={styles.title}>
          Tela do reino  animal
        </Text>

        <View>
          <Text style={styles.label}>Filtar</Text>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquisar..."
            placeholderTextColor="#333"
            style={styles.input}

          />

        </View>

      </View>
      <FlatList
        data={animals}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => (
              <AnimalList item={item}/>
        )
      }
      listEmptyComponent={
        <text>
          Nenhum animal encontrado
        </text>
      }
        />
        </SafeAreaView>
  );
};

export default Animal;

const styles = StyleSheet.create({
  title: {
    fonSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAling: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadios: 8,
    backgroundcolor: "#fff",
    color: "#333",
  },
})


