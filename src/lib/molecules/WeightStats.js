/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {MediumText, RegularText} from '../atoms';
import Colors from '../../styles';

export default ({icon, name, stats}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={icon} style={{height: 18, width: 17, marginRight: 8}} />
      <RegularText color={Colors.title} size={16} height={30}>
        {name}
      </RegularText>
      <MediumText
        color={Colors.lightBlue}
        size={16}
        height={30}
        spaceing={-0.26}>
        {`${stats} lbs`}
      </MediumText>
    </View>
  );
};
