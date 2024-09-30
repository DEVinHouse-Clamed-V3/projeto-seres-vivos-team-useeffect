import React, { useState, useEffect } from 'react';
import 
{ Text, SafeAreaView, FlatList, TextInput, Alert, ActivityIndicator, View, StyleSheet, Image } 
from 'react-native';
import { globalStyles } from '../styles/global';
import  axios  from 'axios'; 


function Card({ item }) {
    return (
        <View style={ [styles.column, styles.cardView] }>
            <View style={ styles.viewImage }>
                <Image 
                    style={ styles.image }
                    source={{ uri:item.image }}
                />
            </View>
            
            <Text style={ styles.title }>
                {item.name}
            </Text>

            <Text style={ styles.description }>
                {item.description}
            </Text>

            <Text style={ styles.textDetails }>
                <Text style={ styles.textBold }>
                    Nutrição: 
                </Text>
                {item.nutrition}
            </Text>

            <Text style={ styles.textDetails }>
                <Text style={ styles.textBold }>
                    Tipo de celula:
                </Text>
                {item.cellType}
            </Text>

            <Text style={ styles.textDetails }>
                <Text style={ styles.textBold }>
                    Organização celular:
                </Text>
                {item.cellOrganization}
            </Text>

            <Text style={ styles.textDetails }>
                <Text style={ styles.textBold }>
                    Reprodução:
                </Text>
                {item.reproduction}
            </Text>

            <Text style={ [styles.textDetails, styles.marginBotton] }>
                <Text style={ styles.textBold }>
                    Respiração:
                </Text>
                {item.respiration}
            </Text>
        </View>
    );
}

function Loading() {
    return (
        <View style={ styles.tela }>
            <ActivityIndicator size={78} color="#0000ff" />
            <Text style={ styles.text }>Carregando...</Text>
        </View>
    );
}

const Protista  = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        axios.get("http://192.168.0.212:3000/protista")
        .then((response) =>{
            setData(response.data);
            setFilteredData(response.data);
        })
        .catch((error) => {
            console.error("Houve um erro", error);
            Alert.alert("Houve um erro", error);
        })
        .finally(() => {
            setLoading(false);
        });

    }, []);

    useEffect(() => {

        function filterData() {
            if (search !== '') {
                const filteredDatas = data.filter((item) => {
                    return item.name.toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase());
                });

                setFilteredData(filteredDatas);

            } else {

                setFilteredData(data);

            }

            console.log("Filtrados :" + filteredData);
        }

        filterData();

    },[search]);

    return (
        <SafeAreaView style={[globalStyles.container, styles.container ]}>
            <Text style={ [styles.title, styles.colorBlack] }>
                Lista de protistas
            </Text>

            <View style={ styles.pesquisarView }>
                <Text style={ styles.label }>Pesquisar:</Text>
                <TextInput
                    style={ styles.input }
                    value={search}
                    placeholder="Digite o deseja encontrar..."
                    onChangeText={text => setSearch(text)}
                />
            </View>

            <View>
                {loading ? 
                    <Loading /> :
                    <FlatList
                        data={filteredData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Card item={item}/>
                        )}
                        ListEmptyComponent={    
                            <View style={ styles.tela }>
                                <Text style={ styles.text }>
                                    Nenhum item encontrado...
                                </Text>
                            </View>
                        }
                        showVerticalScrollIndicator={false}
                    />
                }
            </View>
        </SafeAreaView>
    );
};


export default Protista;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
    },
    pesquisarView: {
        marginVertical: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
    },
    tela: {
        padding: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 16,
        fontSize: 20,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardView: {
        backgroundColor: '#333',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    colorWhite: {
        color: '#fff',
        textAlign: 'center',
    },
    viewImage: {
        marginBottom: 16,
        width: '100%',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    description: {
        color: '#f8f8f8',
        textAlign: 'center',
        marginBottom: 10,
    },
    textBold: {
        fontWeight: 'bold',
        color: '#f8f8f8',
    },
    textDetails: {
        fontSize: 17,
        color: '#f8f8f8',
    },
    marginBotton: {
        marginBottom: 20,
    },
    colorBlack: {
        color: '#000',
    },  
});
