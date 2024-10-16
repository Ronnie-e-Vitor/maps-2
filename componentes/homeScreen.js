import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Alert, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import logo from '../assets/atreisonV2.jpg';
import { BarCodeScanner } from 'expo-barcode-scanner'; // Importa o scanner de QR Code
import Entypo from '@expo/vector-icons/Entypo';
function HomeScreen({ route, navigation }) {
  const { nome, userId } = route.params; // Assume que você está passando userId como "id" no parâmetro
  const [modalVisible, setModalVisible] = useState(false);
  const [alunoId, setAlunoId] = useState(userId);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
 
  useEffect(() => {
    if (!alunoId) {
      Alert.alert('Erro', 'ID do aluno não encontrado.');
    }
  }, [alunoId]);

  const registrarAtraso = async (usuarioId) => {
    console.log("Registrando atraso para o usuário:", usuarioId); // Log do ID do usuário

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${usuarioId}/registrar-chegada`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Resposta da API:", response); // Log da resposta da API
      if (response.ok) {
        Alert.alert('Sucesso', 'Atraso registrado com sucesso!');
      } else {
        const errorResponse = await response.json(); // Tente obter a resposta de erro da API
        console.log("Erro da API:", errorResponse); // Log do erro da API
        Alert.alert('Erro', 'Erro ao registrar o atraso: ' + JSON.stringify(errorResponse));
      }
    } catch (error) {
      console.log("Erro:", error); // Log de qualquer erro
      Alert.alert('Erro', `Erro: ${error.message}`);
    }
  };

  const confirmarRegistro = async () => {
    setModalVisible(false);
    if (alunoId) {
      await registrarAtraso(alunoId);
    } else {
      Alert.alert('Erro', 'ID do aluno não disponível.');
    }
  };

  return (
    <View style={styles.container}>


      <View style={styles.info}>
        <View style={{ width: '100%' }}>
          {/* icone */}
        <View style={{ justifyContent: 'flex-end',flex: 1,alignItems: 'flex-end',flexDirection: 'row', marginBottom:-20, }}>
        <Entypo name="location-pin" size={24} color="black" />
        </View>
        {/* imagem */}
          <Image source={logo} style={{ width: '100%', height: 400 }} />
        </View>
        
        
        <View style={styles.elementos}>
          <Text style={styles.welcome}>Bem-Vindo</Text>
          <Text style={styles.nick}>{nome}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate('QRCod')}>
  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Cadastrar Atraso</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate('Mapas')}>
  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Ver endereços</Text>
</TouchableOpacity>


      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => {
          if (alunoId) {
            navigation.navigate('Consulta', { userId: alunoId });
          } else {
            Alert.alert('Erro', 'ID do aluno não disponível.');
          }
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Ver atrasos</Text>
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
  info: {
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
  },
  checkButton: {
    padding: 20,
    backgroundColor: '#1F618D',
    width: "80%",
    marginTop: 15,
    borderRadius: 6,
    alignItems: "center"
  },
  nick: {
    fontSize: 22,
    color: '#3aad59',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  elementos: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default HomeScreen;
