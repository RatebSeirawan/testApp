import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {BottomTabsIcon} from '../lib/atoms';
import Home from '../sences/Home';
import Profile from '../sences/Profile';
import Colors from '../styles';

const HOME_ACTIVE = require('../assets/icons/home-active.png');
const HOME_INACTIVE = require('../assets/icons/home-inactive.png');
const CALENDAR_ACTIVE = require('../assets/icons/calendar-active.png');
const CALENDAR_INACTIVE = require('../assets/icons/calendar-inactive.png');
const NOTIFICATION_ACTIVE = require('../assets/icons/notification-active.png');
const NOTIFICATION_INACTIVE = require('../assets/icons/notification-inactive.png');
const PERSON_ACTIVE = require('../assets/icons/person-active.png');
const PERSON_INACTIVE = require('../assets/icons/person-inactive.png');
const NEW = require('../assets/icons/new.png');

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <BottomTabsIcon icon={HOME_ACTIVE} />
          ) : (
            <BottomTabsIcon icon={HOME_INACTIVE} />
          ),
      },
    },
    Calendar: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <BottomTabsIcon icon={CALENDAR_ACTIVE} />
          ) : (
            <BottomTabsIcon icon={CALENDAR_INACTIVE} />
          ),
      },
    },
    Create: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: <BottomTabsIcon icon={NEW} create />,
      },
    },
    Notifications: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <BottomTabsIcon icon={NOTIFICATION_ACTIVE} />
          ) : (
            <BottomTabsIcon icon={NOTIFICATION_INACTIVE} />
          ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) =>
          focused ? (
            <BottomTabsIcon icon={PERSON_ACTIVE} />
          ) : (
            <BottomTabsIcon icon={PERSON_INACTIVE} />
          ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    order: ['Home', 'Calendar', 'Create', 'Notifications', 'Profile'],
    activeColor: Colors.charcoalGrey,
    inactiveColor: Colors.enaraGray,
    shifting: true,
    labeled: false,
    backBehavior: 'history',
  },
);
