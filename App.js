import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './component/Caritem';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItem cartitle="Modeld S"  carsubtitle="Startting at" price="$500" image={ require('./assets/ModelX.jpeg')}/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
