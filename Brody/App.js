import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// Code example by Dr. Fuentes; May 21, 2023

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.hdwallpapers.in/download/brody_stun_skin_mobile_legends_4k_hd_mobile_legends-3840x2160.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Knee Grew Hero</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: 'https://wallpapercave.com/wp/wp9179123.jpg' }} // Replace with your own image URL
            style={styles.image}
          />
          <Text style={styles.text}>Brody</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
