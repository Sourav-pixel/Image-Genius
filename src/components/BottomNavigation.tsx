/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false, // Disable the top bar
        tabBarIcon: ({focused, color, size}) => {
          const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale set to 1

          // Animate icon scale when focused/unfocused
          Animated.timing(scaleAnim, {
            toValue: focused ? 1.2 : 1, // Scale up when focused, normal when unfocused
            duration: 200,
            useNativeDriver: true,
          }).start();

          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'images-sharp' : 'images-outline';
          }

          return (
            <Animated.View style={{transform: [{scale: scaleAnim}]}}>
              <Icon name={iconName!} size={size} color={color} />
            </Animated.View>
          );
        },
        tabBarActiveTintColor: '#4F33FC', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 5,
          borderRadius: 20,
          backgroundColor: '#ffffff', // Tab bar background
          height: 60,
          paddingHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 2.41,
        },
        tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is open
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    transform: [{scale: 1}],
  },
});

export default MyTabs;
