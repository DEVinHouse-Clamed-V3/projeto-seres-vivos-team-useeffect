import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList, View, Image, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/global';

const Fungos = () => {
  
  const [fungos, setFungos] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.0.15:3000/fungos")
      .then((response) => {
        setFungos(response.data);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert("Erro ao buscar os dados");
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={globalStyles.cartao}>
      <Image source={{ uri: item.image }} style={globalStyles.imagemCartao} />
      <Text style={globalStyles.nomeCartao}>{item.name}</Text>
      <Text style={globalStyles.descricaoCartao}>{item.description}</Text>
      <Text style={globalStyles.detalheCartao}>Nutrição: {item.nutrition}</Text>
      <Text style={globalStyles.detalheCartao}>Respiração: {item.respiration}</Text>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={fungos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Fungos;
