import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {HomeHeader} from '../../lib/templates';
import {Meals} from '../../lib/organisms';

const AVATAR =
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/65896448_2328726727210042_1283631425442021376_n.jpg?_nc_cat=109&_nc_oc=AQnmMSjGAM2JanXhEj6TRKNGIJ2ir1tnE5pYszKS__YmXzkrM32azbbAV7wwBjws-AI&_nc_ht=scontent-lht6-1.xx&oh=ea9cb11f27bc8e6623d497b753831232&oe=5E302A8A';

export default ({navigation}) => {
  const headerAvatars = [
    {uri: AVATAR, name: 'Marie', title: 'Dietitian'},
    {uri: AVATAR, name: 'Joe', title: 'Supervising Doctor'},
    {uri: AVATAR, name: 'John', title: 'Doe'},
    {uri: AVATAR, name: 'Marie', title: 'Dietitian'},
    {uri: AVATAR, name: 'Joe', title: 'Morgan'},
    {uri: AVATAR, name: 'John', title: 'Doe'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeHeader userName="Mahmoud" data={headerAvatars} />
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
