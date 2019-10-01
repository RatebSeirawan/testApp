/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

export default ({children, color, size, height, spaceing, textAlign}) => {
  return (
    <Text
      style={{
        fontFamily: 'RubikMedium',
        fontSize: size,
        color,
        lineHeight: height,
        letterSpacing: spaceing,
        textAlign: textAlign ? textAlign : 'center',
      }}>
      {children}
    </Text>
  );
};
