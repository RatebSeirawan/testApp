import React from 'react';
import {View} from 'react-native';
import {ProgressImage, RegularText, MediumText} from '../atoms';
import Colors from '../../styles';

const TEMP = require('../../assets/food.jpg');

export default ({uri, title, data}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <ProgressImage uri={uri} />
      <RegularText color="rgb(96,102,127)" size={16} height={20} spacing={-0.2}>
        {title}
      </RegularText>
      <MediumText color={Colors.lightBlue} size={16} height={20} spacing={-0.2}>
        {data}
      </MediumText>
    </View>
  );
};
