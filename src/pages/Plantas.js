import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { PlantasCard } from '../components/PlantasCard';
import { axios } from 'axios';

const Plantas  = () => {
    // dados originais
    const [ data, setData ] = useState([]);

    // dados filtrados
    const [ filteredData, setFilteredData ] = useState([]);

    // query de pesquisa
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get('http://192.168.0.212/plantas ');
                setData(response.plantas)

                console.log(" response plantas" + response.plantas);
            }

            fetchData();

        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {

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

    },[searchQuery]);

    return (
        <SafeAreaView style={globalStyles.container}>
            <TextInput

            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Pesquisar..."
            />

            <FlatList 
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PlantasCard data={item}/>
                )}
            />
        </SafeAreaView>
    );
};


export default Plantas;
