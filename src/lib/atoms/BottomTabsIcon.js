/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

export default ({icon, create}) => {
  if (create) {
    return (
      <View style={{width: 80, height: 50, position: 'absolute', top: -14}}>
        <Image
          source={icon}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: null, height: null, flex: 1}}
        />
      </View>
    );
  }

  return (
    <View style={{width: 22, height: 22}}>
      <Image
        source={icon}
        resizeMode="contain"
        resizeMethod="resize"
        style={{width: null, height: null, flex: 1}}
      />
    </View>
  );
};
