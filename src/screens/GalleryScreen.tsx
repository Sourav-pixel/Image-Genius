/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const {width} = Dimensions.get('window');
const imagePadding = 10;
const imageSize = (width - 50) / 2; // Adjusted for 3 images per row with padding

const Image1 = require('../assets/background2.jpg');
const Image2 = require('../assets/background.jpg');
const Image3 = require('../assets/getstarted_img.png');
const Image4 = require('../assets/out-0.jpg');
const Image5 = require('../assets/out-0-842.jpg');
const Image6 = require('../assets/out-0-971.jpg');

const GalleryScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderImage = (source, index) => {
    const translateY = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
    });

    return (
      <Animated.View
        key={index}
        style={[
          styles.imageContainer,
          {
            opacity: fadeAnim,
            transform: [{translateY}],
          },
        ]}>
        <Image source={source} style={styles.image} />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>
          Bring your ideas to life with black-forest-labs{' '}
        </Text>

        <View style={styles.gallery}>
          {[Image1, Image2, Image3, Image4, Image5, Image6].map(renderImage)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    marginBottom: imagePadding * 2,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default GalleryScreen;
