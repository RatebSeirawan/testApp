import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {HomeHeader, HomeOptionsBar} from '../../lib/templates';
import {Meals} from '../../lib/organisms';

import {headerAvatars, tags} from './mock';

export default ({navigation}) => {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeHeader userName="Mahmoud" data={headerAvatars} />
        <HomeOptionsBar data={tags}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgb(242,244,246)',
  },
});
