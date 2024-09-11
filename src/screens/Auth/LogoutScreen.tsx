/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App'; // Adjust path if necessary

const LogoutScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.replace('Login'); // Replace so that user can't go back to logged-in pages
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  useEffect(() => {
    handleLogout(); // Automatically log out when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logging you out...</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#111827',
  },
  button: {
    backgroundColor: '#f87171',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default LogoutScreen;
