import React, {useEffect, useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';

function AnimalList({ item }) {
  return (
    <View style={styles.containerAnimal}>
      <View>
        <Text style={[styles.title,
        {
          marginBottom: 8,
          color: "#333",
          fontSize: 20,
          fontWeight: "bold",
          textAling: "left",

        }]}>
          {item.name}
        </Text>
        <Text>
          {item.description}
        </Text>
      </View>

      <View>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
        />
      </View>

      <View style={styles.details}>
        <Text styles={styles.titleDetails}>
          Nutrição:
        </Text>
        <Text style={styles.description}>{
          item.nutrition}
        </Text>
      </View>


      <View style={styles.details}>
        <Text styles={styles.titleDetails}>
          Tipo Celular:
        </Text>
        <Text style={styles.description}>{
          item.cellType
        }
        </Text>
      </View>


      <View style={styles.details}>
        <Text styles={styles.titleDetails}>
          Organização celular:
        </Text>
        <Text style={styles.description}>{
          item.cellOrganization}
        </Text>
      </View>


      <View style={styles.details}>
        <Text styles={styles.titleDetails}>
          Reprodução:
        </Text>
        <Text style={styles.description}>{
          item.reproduction}
        </Text>
      </View>


      <View style={styles.details}>
        <Text styles={styles.titleDetails}>
          Respiração:
        </Text>
        <Text style={styles.description}>{
          item.respiration}
        </Text>
      </View>

    </View>
  )
}

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


  useEffect(()=>{
    axios.get("")
    .then(response=>{
      setanimals(response.data);
    })
    .catch(error=>{
      console.error(error);
      Alert.alert("Error ao buscar animais");
    });
  },[]);
  
  return (
    <SafeAreaView style={[globalStyles.container, { marginHorzontal: 16 }]}>
      <View>
        <Text style={styles.title}>
          Tela do reino  animal
        </Text>

        <View>
          <Text style={styles.label}>Filtrar</Text>
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
          ({ item }) => (
            <AnimalList item={item} />
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
  containerAnimal: {
    paddingVertical: 40,
    backgroundColor: "#fff",
    borderRadios: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#gray",
    elevation: 2,
    padding:16,
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleDetails: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
  }
})


