import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const customMarker = require('../assets/marker.png'); // substitua pelo caminho correto
const markers = [
  {
    latitude:  -23.556660,
    longitude: -46.391745,
    title: "Ronnie",
    description: "Rua do Ronnie",
  },
  {
    latitude: -23.531785,
    longitude: -46.427553,
    title: "ETEC",
    description: "Etec de Guaianases",
  },
  {
    latitude: -22.91209850519803,
    longitude: -43.230164719786096,
    title: "Brasil",
    description: "Estádio do Maracanã",
  },
  {
    latitude: -26.23474725339487,
    longitude: 27.982837785918527,
    title: "África do Sul",
    description: "Soccer City (FNB Stadium)",
  },
  {
    latitude: 52.5145997505001,
    longitude: 13.239195115779932,
    title: "Alemanha",
    description: " Olympiastadion",
  },
  // Adicione mais marcadores conforme necessário
];

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            image={customMarker} style={{ width: 2, height: 2 }} // Adiciona a imagem personalizada ao marcador
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});