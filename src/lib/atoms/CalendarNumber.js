/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import RegularText from './RegularText';
import Colors from '../../styles';

export default ({children, state, setState}) => {
  if (state === children) {
    return (
      <TouchableOpacity
        style={{
          width: 34,
          height: 34,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.lightBlue,
        }}
        onPress={setState}>
        <RegularText color="#fff" size={18} height={22}>
          {children}
        </RegularText>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={{
        width: 34,
        height: 34,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
      onPress={setState}>
      <RegularText color={Colors.blackText} size={18} height={22}>
        {children}
      </RegularText>
    </TouchableOpacity>
  );
};
