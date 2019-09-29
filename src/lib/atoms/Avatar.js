/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Image from 'react-native-fast-image';

export default ({uri, size, style = {}}) => (
  <Image
    source={uri}
    resizeMode="cover"
    resizeMethod="resize"
    style={{height: size, width: size, borderRadius: size / 2, ...style}}
  />
);
