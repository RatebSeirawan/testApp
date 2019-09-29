import React from 'react';
import {View} from 'react-native';
import {CalendarDay} from '../atoms';

export default () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      marginHorizontal: 20,
      marginTop: 24,
      marginBottom: 12,
    }}>
    <CalendarDay>{'M'}</CalendarDay>
    <CalendarDay>{'T'}</CalendarDay>
    <CalendarDay>{'W'}</CalendarDay>
    <CalendarDay>{'T'}</CalendarDay>
    <CalendarDay>{'F'}</CalendarDay>
    <CalendarDay>{'S'}</CalendarDay>
    <CalendarDay>{'S'}</CalendarDay>
  </View>
);
