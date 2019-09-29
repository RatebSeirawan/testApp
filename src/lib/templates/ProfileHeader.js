/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Avatar} from '../atoms';
import {ProfileData, Calendar} from '../organisms';
import {ProgressPicker} from '../molecules';

const AVATAR =
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/65896448_2328726727210042_1283631425442021376_n.jpg?_nc_cat=109&_nc_oc=AQnmMSjGAM2JanXhEj6TRKNGIJ2ir1tnE5pYszKS__YmXzkrM32azbbAV7wwBjws-AI&_nc_ht=scontent-lht6-1.xx&oh=ea9cb11f27bc8e6623d497b753831232&oe=5E302A8A';

export default () => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Avatar uri={{uri: AVATAR}} size={128} style={{marginHorizontal: 12}} />
      <ProfileData />
    </View>
    <ProgressPicker />
    <Calendar />
  </View>
);
