/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RegularText} from '../atoms';
import {BarTags} from '../organisms';
import Colors from '../../styles';

export default ({data}) => (
  <View style={styles.container}>
    <BarTags data={data} />
    <View style={{flexDirection: 'row'}}>
      <RegularText size={14} height={38} color={'rgb(136,141,166)'}>
        {'To-do'}
      </RegularText>
      <RegularText
        style={{marginLeft: 12}}
        size={14}
        height={38}
        color={'rgb(136,141,166)'}>
        {'Saved'}
      </RegularText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: '5.1%',
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
