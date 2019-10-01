/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {MediumText} from '../atoms';
import {HomeAvatar} from '../molecules';
import Colors from '../../styles';

export default ({userName, data}) => (
  <View style={styles.container}>
    <MediumText color={Colors.title} size={22} height={42} textAlign="left">
      {`Hey ${userName}`}
    </MediumText>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <HomeAvatar key={item.name} {...item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: '5.1%',
    paddingTop: 18,
  },
});
