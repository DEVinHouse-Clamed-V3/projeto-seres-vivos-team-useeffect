import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

const Animal = () => {
  
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get("http://192.168.0.115:3000/animais")
    .then((response)=>{
      setData(response.data)
      setFiltro(response.data)
    })
    .catch((error)=>{
      console.log ("error: "+error)
    })
    
  }, [])



  return (
      <SafeAreaView style={[globalStyles.container,{marginHorizontal:16}]}>
      <Text>Tela do reino animal</Text>

      <View>
        <Text style={styles.label}>
          Filtrar
          <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder ="Pesquisar"
          placeholderTextColor="#333"
          style={style.input}
          />
        </Text>
      </View>
    </SafeAreaView>
  )
};


export default Animal;

const styles = StyleSheet.create ({
  label:{
    fontSize:16,
    color:'#333',
    marginBottom: 8,
  },
  input:{
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    borderRaius:8,
    
  },

})