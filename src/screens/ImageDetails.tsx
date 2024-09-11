/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {CustomBTN} from '../components';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';

// Function to download image
const downloadImage = async imageUrl => {
  try {
    const fileName = imageUrl.split('/').pop();
    const downloadDest = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`;

    const res = await RNFetchBlob.config({
      fileCache: true,
      path: downloadDest,
    }).fetch('GET', imageUrl);

    if (res.info().status === 200) {
      Alert.alert('Success', `Image downloaded to ${downloadDest}`);
    } else {
      Alert.alert('Error', 'Failed to download image');
    }
  } catch (error) {
    Alert.alert('Error', `An error occurred: ${error.message}`);
  }
};

// Function to share image
const shareImage = async imageUrl => {
  try {
    const fileName = imageUrl.split('/').pop();
    const downloadDest = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`;

    const res = await RNFetchBlob.config({
      fileCache: true,
      path: downloadDest,
    }).fetch('GET', imageUrl);

    if (res.info().status === 200) {
      await Share.open({
        url: `file://${downloadDest}`,
        title: 'Share Image',
        message: 'Check out this image!',
      });
    } else {
      Alert.alert('Error', 'Failed to share image');
    }
  } catch (error) {
    Alert.alert('Error', `An error occurred: ${error.message}`);
  }
};

const ImageDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {image, title} = route.params as {image: string; title: string};

  return (
    <View className="mx-4 bg-[#F7F7F7DA]">
      <View className="flex flex-row my-4 justify-between items-center ">
        <Pressable
          onPress={() => navigation.goBack()}
          className="border rounded-full p-2 border-black/60">
          <AntDesign
            name="arrowleft"
            style={{fontSize: 26, color: '#4F33FC'}}
          />
        </Pressable>
        <Text className="text-xl fontsemibold text-black"> Results </Text>
        {/* give some space... */}
        <View />
      </View>
      {/* image */}
      <View className="h-60 rounded-xl py-3 bg-white shadow-xl w-full">
        <Image
          source={{uri: image}}
          className="w-full rounded-xl h-full"
          resizeMode="contain"
        />
      </View>
      {/* btn */}
      <CustomBTN
        onPress={() => console.log('Re-generate')}
        title="Re-Generate"
      />
      {/* prompt */}
      <View className="h-fit w-full py-4 mt-5 shadow bg-white rounded-xl">
        <Text className="text-black px-2 text-lg font-semibold">{title}</Text>
      </View>
      {/* controllers */}
      {/* <View className="flex flex-row justify-center gap-x-5 mt-5 items-center ">
        {controllersData.map((item, index) => (
          <Pressable
            onPress={() => setSelectedAction(item.id)}
            key={index}
            className={`py-3 rounded-xl px-10 ${
              item.id === selectedAction ? 'bg-action' : 'bg-white'
            } shadow `}>
            {item.icon}
          </Pressable>
        ))}
      </View> */}
      {/* download or ... */}
      <View className="flex flex-col gap-y-5 mt-5 items-start">
        {saveOrRepeat.map((item, index) => (
          <Pressable
            key={item.id}
            onPress={() => {
              if (item.id === 1) {
                downloadImage(image); // Call download function for Download button
              } else if (item.id === 2) {
                shareImage(image); // Call share function for Share button
              }
            }}
            className={`bg-white w-full py-3 rounded-xl flex flex-row shadow`}>
            <Text className="ml-3"> {item.icon} </Text>
            <Text className="ml-3 text-black text-lg font-bold">
              {' '}
              {item.name}{' '}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ImageDetails;

// const controllersData = [
//   {
//     id: 1,
//     icon: <FontAwesome6 name="bookmark" size={28} color={'#ADADAD'} />,
//   },
//   {
//     id: 2,
//     icon: <Ionicons name="trash-outline" size={28} color={'#ADADAD'} />,
//   },
//   {
//     id: 3,
//     icon: <Ionicons name="share-outline" size={28} color={'#ADADAD'} />,
//   },
// ];

const saveOrRepeat = [
  {
    id: 1,
    name: 'Download',
    icon: <AntDesign name="download" size={28} color={'#ADADAD'} />,
  },
  {
    id: 2,
    name: 'Share',
    icon: <Ionicons name="share-outline" size={28} color={'#ADADAD'} />,
  },
];
