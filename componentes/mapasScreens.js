import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const customMarker = require('../assets/marker.png'); 
const markers = [
  {
    latitude:  -23.556660,
    longitude: -46.391745,
    title: "Ronnie",
    description: "Rua do Ronnie",
  },
  {
    latitude: -23.553125,
    longitude: -46.399641,
    title: "ETEC",
    description: "Etec de Guaianases",
  },
  {
    latitude: -23.536201,
    longitude: -46.436698,
    title: "Casa da Maria",
    description: "Travessa Tucupi 17",
  },
  {
    latitude: -23.549841,
    longitude: -46.372212,
    title: "Casa da gabi",
    description: "Av Hermes Teles Ribeiro",
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
          latitude:  -23.556660,
          longitude: -46.391745,
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