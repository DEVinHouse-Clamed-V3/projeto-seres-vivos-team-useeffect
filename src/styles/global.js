import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingVertical: 20,
    },
    containerFungo: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingVertical: 20,
    },
    cartao: {
      backgroundColor: '#fff',
      padding: 15,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
    },
    imagemCartao: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    nomeCartao: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    descricaoCartao: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    },
    detalheCartao: {
      fontSize: 12,
      color: '#666',
    },
    pesquisa: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 8,
      margin: 10,
      borderRadius: 8,
    }
  });