import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [busLocation, setBusLocation] = useState({
    latitude: 22.3475, // Replace with your initial bus latitude
    longitude: 91.8123, // Replace with your initial bus longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null); // Ref for MapView

  const animateToBus = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(busLocation, 1000); // Animating to bus location with a duration of 1000ms
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Assigning the ref to the MapView
        style={styles.map}
        initialRegion={busLocation}
      >
        <Marker
          coordinate={{
            latitude: busLocation.latitude,
            longitude: busLocation.longitude,
          }}
          title="Bus Marker"
        />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={animateToBus}>
        <Text>Find Bus</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
