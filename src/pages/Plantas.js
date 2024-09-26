import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, FlatList, Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { PlantasCard } from '../components/PlantasCard';
import { plantStyles } from '../styles/plantStyles';
import axios from 'axios';

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
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
        }
    
        getPlants();

    }, []);

    /* useEffect(() => {

        function filterData() {
            if (searchQuery !== '') {
                const filteredDatas = data.filter((item) => {
                    return item.name.includes(searchQuery);
                });

                setFilteredData(filteredDatas);

            } else {

                setFilteredData(data);

            }

            console.log("Filtrados :" + filteredData);
        }

        filterData();

    },[searchQuery]); */

    return (
        <SafeAreaView style={globalStyles.container}>
            <TextInput
            style={ plantStyles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Pesquisar..."
            />

            {
                data.length === 0 ? 
                <Text>Carregando...</Text> :
                <FlatList 
                    data={data}
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
