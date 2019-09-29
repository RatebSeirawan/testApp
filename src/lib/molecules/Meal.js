import React from 'react';
import {View} from 'react-native';
import {Avatar, RegularText} from '../atoms';

const TEMP = require('../../assets/food.jpg');

export default ({uri, title}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Avatar uri={TEMP} size={112} />
      <RegularText color="rgb(96,102,127)" size={20} height={40}>
        {title}
      </RegularText>
    </View>
  );
};
