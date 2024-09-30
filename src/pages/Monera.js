/*import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';

const Monera  = () => {

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Tela do reino monera</Text>
    </SafeAreaView>
  );
};

export default Monera;*/


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { loadingStyles } from '../styles/loadingStyles';
import { moneraStyles } from '../styles/moneraStyles';

const Monera = () => {
    // dados originais
    const [ data, setData ] = useState([]);

    // dados filtrados
    const [ filteredData, setFilteredData ] = useState([]);

    // query de pesquisa
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(() => {
        function getMonera() {
            axios.get('http://192.168.100.6:3001/monera')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
        }
    
        getMonera();

    }, []);

    useEffect(() => {

        function filterData() {
            if (searchQuery !== '') {
                const filteredDatas = data.filter((item) => {
                    return item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
                });

                setFilteredData(filteredDatas);

            } else {

                setFilteredData(data);

            }

            console.log("Filtrados :" + filteredData);
        }

        filterData();

    },[searchQuery]);

    return (
        <SafeAreaView style={globalStyles.container}>
            <TextInput
            style={ moneraStylesStyles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Pesquisar..."
            />

            {
                data?.length === 0 ? 
                <View sytle={ loadingStyles.container }>
                    <ActivityIndicator size={40} color="#000"/>
                    <Text>Carregando...</Text>
                </View> 
                :
                <FlatList 
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={ moneraStyles.container }>
                            <View style={ moneraStyles.areaImage }>
                                <Image 
                                    style={ moneraStyles.image }
                                    source={{ uri:item.image }}
                                />
                            </View>
                            
                            <Text style={ moneraStyles.title }>
                                {item.name}
                            </Text>
                            <Text>
                                {item.description}
                            </Text>
                            <Text>
                                <Text style={ moneraStyles.textBold }>
                                    Nutrição: 
                                </Text>
                                {item.nutrition}
                            </Text>
                            <Text>
                                Tipo de celula: {item.cellType}
                            </Text>
                            <Text>
                                Organização celular: {item.cellOrganization}
                            </Text>
                            <Text>
                                Reprodução: {item.reproduction}
                            </Text>
                            <Text>
                                Respiração: {item.respiration}
                            </Text>
                        </View>
                      )}
                />
            }
        </SafeAreaView>
    );
};

export default Monera;