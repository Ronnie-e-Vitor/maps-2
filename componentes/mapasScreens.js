import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  {
    latitude:  25.419430322385967,
    longitude: 51.499813604689066,
    title: "Catar",
    description: "Estádio: Lusail Iconic Stadium",
  },
  {
    latitude: 55.71546803054441,
    longitude: 37.55323161515836,
    title: "Russia",
    description: "Estádio: Luzhniki Stadium",
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