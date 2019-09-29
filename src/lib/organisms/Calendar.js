/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {RegularText} from '../atoms';
import {CalendarDays, CalendarNumbers} from '../molecules';
import Colors from '../../styles';

const notchColor = 'rgb(218,222,240)';

export default () => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <RegularText color={Colors.blackText} size={18} height={24}>
        {`September`}
      </RegularText>
      <CalendarDays />
      <CalendarNumbers />
      <View
        style={{
          width: 45,
          height: 3.5,
          backgroundColor: notchColor,
          marginVertical: 12,
          borderRadius: 2,
        }}
      />
    </View>
  );
};
