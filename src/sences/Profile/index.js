/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ProfileHeader, Progress} from '../../lib/templates';
import {Meals} from '../../lib/organisms';

export default ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={{
          flex: 1,
          alignSelf: 'stretch',
          backgroundColor: 'rgb(242,244,246)',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1,
            paddingTop: 24,
            backgroundColor: '#fff',
          }}>
          <ProfileHeader />
        </View>

        <Meals />
        <Progress />
      </ScrollView>
    </SafeAreaView>
  );
};
// Current Weight: 169.76 lbs
// Weight Gain: 44.98 lbs
