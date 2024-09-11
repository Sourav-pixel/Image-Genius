/* eslint-disable prettier/prettier */
import {StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, HomeScreen, ImageDetails} from './src/screens';
import Tabs from './src/screens/Tab';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register';
import LogoutScreen from './src/screens/Auth/LogoutScreen';
import auth from '@react-native-firebase/auth'; // Firebase auth import

export type RootStackParamList = {
  GetStarted: undefined;
  Tabs: undefined;
  Home: undefined;
  ImageDetails: {image: string; title: string};
  Login: undefined;
  Logout: undefined;
  Register: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={user ? 'Home' : 'Login'} // Show Home if user is logged in, otherwise Login
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ImageDetails" component={ImageDetails} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
};

export default App;
