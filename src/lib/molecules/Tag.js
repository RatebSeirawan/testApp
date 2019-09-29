/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {MediumText} from '../atoms';
import Colors from '../../styles';

export default ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1.4,
        padding: 6,
        borderColor: Colors.title,
        marginRight: 8,
      }}>
      <MediumText color={Colors.title} size={10} height={11}>
        {children}
      </MediumText>
    </View>
  );
};
