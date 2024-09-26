import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/global';
import { plantStyles } from '../styles/plantStyles';
import { loadingStyles } from '../styles/loadingStyles';

const Plantas = () => {
    // dados originais
    const [ data, setData ] = useState([]);

    // dados filtrados
    const [ filteredData, setFilteredData ] = useState([]);

    // query de pesquisa
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(() => {
        function getPlants() {
            axios.get('http://192.168.0.212:3000/plantas')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
        }
    
        getPlants();

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
            style={ plantStyles.input}
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
                        <View style={ plantStyles.container }>
                            <View style={ plantStyles.areaImage }>
                                <Image 
                                    style={ plantStyles.image }
                                    source={{ uri:item.image }}
                                />
                            </View>
                            
                            <Text style={ plantStyles.title }>
                                {item.name}
                            </Text>
                            <Text>
                                {item.description}
                            </Text>
                            <Text>
                                <Text style={ plantStyles.textBold }>
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

export default Plantas;
