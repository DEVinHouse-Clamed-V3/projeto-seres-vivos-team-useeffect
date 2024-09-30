import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { kingdoms } from '../constants/reinos';

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Guia dos seres vivos</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {kingdoms.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate(item.path, { kingdom: item.name })}
          >
            <LinearGradient colors={item.colors} style={styles.gradient}>
              <Text style={styles.title}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    width: width - 20,
    height: 100,
    alignSelf: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default Home;
