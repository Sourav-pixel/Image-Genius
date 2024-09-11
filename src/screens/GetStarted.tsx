/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const backgroundImage = require('../assets/background2.jpg');

export default function GetStartedScreen() {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ai Artist</Text>
        <Text style={styles.description}>𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚 𝙞𝙢𝙖𝙜𝙚𝙨 𝙬𝙞𝙩𝙝 𝘼𝙄</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tabs')} // Navigate to Home
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon
            name="arrow-right"
            size={16}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 43,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#E7ADF8',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 340,
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    marginRight: 10, // Space between text and icon
  },
  icon: {
    marginTop: 2, // Adjust the vertical alignment
  },
});
