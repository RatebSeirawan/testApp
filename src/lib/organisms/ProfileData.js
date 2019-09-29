/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {MediumText} from '../atoms';
import {WeightStats, Tag} from '../molecules';
import Colors from '../../styles';

const WEIGHT = require('../../assets/icons/weight.png');
const ARROW_DOWN = require('../../assets/icons/arrow-down.png');

export default () => {
  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <MediumText color={Colors.title} size={26} height={52}>
        {'Rateb Seirawan'}
      </MediumText>
      <WeightStats icon={WEIGHT} name={'Current Weight: '} stats={169.76} />
      <WeightStats icon={ARROW_DOWN} name={'Weight Gain: '} stats={44.98} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 4,
        }}>
        <Tag>{'SEE ALL WEIGHTS'}</Tag>
        <Tag>{'INBODY DASHBOARD'}</Tag>
      </View>
    </View>
  );
};
