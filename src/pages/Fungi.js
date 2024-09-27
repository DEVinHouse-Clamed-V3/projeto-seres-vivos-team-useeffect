import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList, View, Image, StyleSheet, Alert, TextInput } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/global';

const Fungos = () => {
  
  const [fungos, setFungos] = useState([]);
  const [fungosFiltrados, setFungosFiltrados] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    axios.get("http://10.0.2.157:3000/fungos")
      .then((response) => {
        setFungos(response.data);
        setFungosFiltrados(response.data);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert("Erro ao buscar os dados");
      });
  }, []);

  const pesquisaObj = (texto) => {
    setPesquisa(texto);
    if (texto) {
      const filtrados = fungos.filter((item) => 
        item.name.toLowerCase().includes(texto.toLowerCase())
      );
      setFungosFiltrados(filtrados);
    } else {
      setFungosFiltrados(fungos); 
    }
  };

  
  const carregaItem = ({ item }) => (
    <View style={globalStyles.cartao}>
      <Image source={{ uri: item.image }} style={globalStyles.imagemCartao} />
      <Text style={globalStyles.nomeCartao}>{item.name}</Text>
      <Text style={globalStyles.descricaoCartao}>{item.description}</Text>
      <Text style={globalStyles.detalheCartao}>Nutrição: {item.nutrition}</Text>
      <Text style={globalStyles.detalheCartao}>Respiração: {item.respiration}</Text>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.containerFungo}>

      <TextInput
        style={globalStyles.pesquisa}
        placeholder="Pesquisar por nome..."
        value={pesquisa}
        onChangeText={(texto) => pesquisaObj(texto)}
      />

      <FlatList
        data={fungosFiltrados}
        renderItem={carregaItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Fungos;
