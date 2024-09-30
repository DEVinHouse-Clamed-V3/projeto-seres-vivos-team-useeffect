import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/global';
import { plantStyles } from '../styles/plantStyles';
import { loadingStyles } from '../styles/loadingStyles';

function Loading() {
    return (
        <View style={loadingStyles.container}>
            <ActivityIndicator size={40} color="#000"/>
            <Text>Carregando...</Text>
        </View>
    );
}

function PlantasList({ item }) {
    return (
        <View style={ plantStyles.container }>
            <View style={ plantStyles.titleView }>
                <Text style={ plantStyles.title }>
                    {item.name}
                </Text>
                <Text>
                    {item.description}
                </Text>
            </View>

            <View style={ plantStyles.areaImage }>
                <Image 
                    style={ plantStyles.image }
                    source={{ uri:item.image }}
                />
            </View>
            
            <Text style={ plantStyles.textDetails }>
                <Text style={ plantStyles.textBold }>
                    Nutrição: 
                </Text>
                <Text>
                    {item.nutrition}
                </Text>
            </Text>

            <Text>
                <Text style={ plantStyles.textBold }>
                    Tipo de celula:
                </Text>
                <Text>
                    {item.cellType}
                </Text>
            </Text>

            <Text>
                <Text style={ plantStyles.textBold }>
                    Organização celular:
                </Text>
                <Text>
                    {item.cellOrganization}
                </Text>
            </Text>

            <Text>
                <Text style={ plantStyles.textBold }>
                    Reprodução:
                </Text>
                <Text>
                    {item.reproduction}
                </Text>
            </Text>

            <Text>
                <Text style={ plantStyles.textBold }>
                    Respiração:
                </Text>
                <Text>
                    {item.respiration}
                </Text>
            </Text>
        </View>
    );
}

const Plantas = () => {
    // dados originais
    const [ data, setData ] = useState([]);

    // dados filtrados
    const [ filteredData, setFilteredData ] = useState([]);

    // query de pesquisa
    const [ searchQuery, setSearchQuery ] = useState('');

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        function getPlants() {
            axios.get('http://192.168.0.212:3000/plantas')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }).
            finally(() => {
                setLoading(false);
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
        }

        filterData();

    },[searchQuery]);

    return (
        <SafeAreaView style={ globalStyles.container }>
            <TextInput
                style={ plantStyles.input}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Pesquisar..."
            />

            {
                data?.length === 0 ? 
                <Loading />
                :
                <FlatList 
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <PlantasList item={item} />
                    )}
                    /* refreshing={loading}
                    onRefresh={getPlants} */
                    ListFooterComponent={<View style={{height: 50}}></View>}
                />
            }
        </SafeAreaView>
    );
};

export default Plantas;
