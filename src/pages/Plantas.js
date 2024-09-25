import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, FlatList, Text } from 'react-native';
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
        async function getPlants() {
            const response = await axios.get('http://192.168.0.212:3000/plantas');
            setData(response.data); 
    
            console.log(data);
            console.log(response);

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
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <PlantasCard data={item} />
                    }
                />
            }
        </SafeAreaView>
    );
};

export default Plantas;
