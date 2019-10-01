import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RegularText, MediumText, Avatar} from '../atoms';
import Colors from '../../styles';

export default ({name, title, uri}) => {
  return (
    <View style={styles.container}>
      <Avatar uri={{uri}} size={width} style={{marginBottom: 4}} />
      <RegularText color="rgb(96,102,127)" size={14} height={16}>
        {name}
      </RegularText>
      <MediumText color={Colors.lightPeach} size={11} height={14}>
        {title}
      </MediumText>
    </View>
  );
};

const width = 80;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 14,
    alignItems: 'center',
    width,
  },
});
