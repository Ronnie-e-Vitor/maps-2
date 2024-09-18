import React, { useState } from 'react';
import { View, Text, Button, Modal, Alert, StyleSheet,Image, TouchableOpacity  } from 'react-native';
import logo from '../assets/atreisonV2.jpg'

function HomeScreen({ route, navigation }) {
  const {nome, userId } = route.params; // Assume que você está passando userId como "id" no parâmetro
  const [modalVisible, setModalVisible] = useState(false);


  // Função para cadastrar o atraso
  const handleRegistrarAtraso = () => {
    // Exibir o modal de confirmação
    setModalVisible(true);
  };

  // Função de confirmação do modal
  const confirmarRegistro = async () => {
    try {
      // Lógica para chamar a API e registrar o atraso
      const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${userId}/registrar-chegada`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setModalVisible(false);
        Alert.alert('Sucesso', 'Atraso registrado com sucesso!');
      } else {
        Alert.alert('Erro', 'Erro ao registrar o atraso.');
      }
    } catch (error) {
      Alert.alert('Erro', `Erro: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{width:'100%'}}>
          <Image source={logo} style={{ width: '100%', height: 400 }} />
        </View>
        <View style={styles.elementos}>
          <Text style={styles.welcome}>Bem-Vindo</Text>
          <Text style={styles.nick}>{nome}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkButton} onPress={handleRegistrarAtraso}>
        <Text style={{fontSize:20, fontWeight:'bold', color:"white"}}>Cadastrar Atraso</Text>


      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Tem certeza que deseja registrar o atraso?</Text>
            <View style={styles.modalButtons}>
              <Button title="Confirmar" onPress={confirmarRegistro} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  info:{
    alignItems:"center",
    justifyContent:'center',
    marginBottom: 20,
    flexDirection: 'column',
    textAlign:'center',
    width: '100%',
    },

    checkButton:{
      padding:20,
      backgroundColor:'#1F618D', 
      width:"80%",
      marginTop:15,
      borderRadius:6,
      alignItems:"center"
       },

       nick:{
        fontSize: 22,
        color: '#3aad59',
        fontWeight:'bold',
        fontFamily:'Arial',
      },
      elementos:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
      textAlign: 'center',
        }
});

export default HomeScreen;
