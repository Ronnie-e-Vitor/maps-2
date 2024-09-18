import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NavBar from './navBar';

const Consulta = () => {
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View>
      


      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
              <NavBar />

            <View style={styles.cardConsulta}>
            <Text>{item.nome}</Text>
            <Text>{item.modulo}</Text>
            <Text>{item.curso}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 5,
      },

      cardConsulta:{
        borderBottomWidth:2,
        backgroundColor: 'white',
        width: '100%',
      },

 });

export default Consulta;