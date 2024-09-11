/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

type CustomBtnType = {
  title: string;
  onPress?: () => void;
};

const StarIcon: React.FC<{style: any}> = ({style}) => (
  <Icon name="star" size={20} color="#FFD700" style={style} />
);

const CustomBTN: React.FC<CustomBtnType> = ({title, onPress}) => {
  return (
    <View className="relative">
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={['#4F33FC', '#8165FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="rounded-full py-4 px-6">
          <Text className="text-white text-center font-bold text-lg">
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBTN;
