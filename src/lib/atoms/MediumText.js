/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

export default ({children, color, size, height, spaceing}) => {
  return (
    <Text
      style={{
        fontFamily: 'RubikMedium',
        fontSize: size,
        color,
        lineHeight: height,
        letterSpacing: spaceing,
        textAlign: 'center',
      }}>
      {children}
    </Text>
  );
};
