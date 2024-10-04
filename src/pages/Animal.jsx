import React from 'react';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

const Animal = () => {
  const [search, setSearch] = usestate('');

  return (
    <SafeAreaView style={[globalStyles.container, { marginHorzontal: 16 }]}>
      <View>
        <Text>
          Tela do reino  animal
        </Text>

        <View>
          <Text style={style.label}>Filtar</Text>
          <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar..."
          placeholderTextColor="#333"
          style={StylePropertyMap.input}
          
          />
          
        </View>

      </View>



    </SafeAreaView>
  );
};


