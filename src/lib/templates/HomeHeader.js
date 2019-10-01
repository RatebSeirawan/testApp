/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Avatar, MediumText} from '../atoms';
import {HomeAvatar} from '../molecules';
import {Card} from '../organisms';
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
      renderItem={({item}) => <HomeAvatar {...item} />}
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
