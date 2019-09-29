/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

export default ({uri, size = 90}) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: 'rgb(242,244,246)',
      marginBottom: 8,
    }}>
    <Image
      source={uri}
      resizeMode="contain"
      resizeMethod="resize"
      style={{
        height: size - 32,
        width: size - 32,
      }}
    />
  </View>
);
