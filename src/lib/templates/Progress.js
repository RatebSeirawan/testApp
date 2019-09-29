/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Progress} from '../molecules';
import {MediumText} from '../atoms';
import {elevationShadow} from '../utils';

const HEART_BEAT = require('../../assets/icons/heart-beat.png');
const EXERCIES = require('../../assets/icons/exercies.png');
const DISTANCE = require('../../assets/icons/distance.png');
const CARDS = require('../../assets/icons/cards.png');
const STEPS = require('../../assets/icons/steps.png');
const STAND = require('../../assets/icons/stand.png');
const SHARE = require('../../assets/icons/share.png');

export default () => (
  <View style={container}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 24,
      }}>
      <Progress uri={CARDS} title="Cards:" data="No cards" />
      <Progress uri={STEPS} title="Steps:" data="3367965" />
      <Progress uri={DISTANCE} title="Distance:" data="450 KM" />
    </View>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 24,
      }}>
      <Progress uri={HEART_BEAT} title="Heart rate:" data="No cards" />
      <Progress uri={EXERCIES} title="Exercies:" data="No data" />
      <Progress uri={STAND} title="Stand:" data="No data" />
    </View>
    <TouchableOpacity
      onPress={() => {}}
      style={{
        marginVertical: 8,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <MediumText color="rgb(136,141,166)" size={12} height={18}>
        {'SHARE PROGRESS'}
      </MediumText>
      <Image source={SHARE} style={{marginLeft: 12}} />
    </TouchableOpacity>
  </View>
);

const container = {
  backgroundColor: '#fff',
  marginTop: 20,
  marginBottom: 40,
  marginHorizontal: 12,
  borderRadius: 12,
  ...elevationShadow(3),
};
