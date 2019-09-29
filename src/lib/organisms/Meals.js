import React from 'react';
import {View} from 'react-native';
import {Meal} from '../molecules';

const TEMP = require('../../assets/food.jpg');

export default () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 32}}>
      <Meal title="Breakfast" />
      <Meal title="Lunch" />
      <Meal title="Dinner" />
    </View>
  );
};
