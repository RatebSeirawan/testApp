import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from './src/styles';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: '#f1c40f',
  },
};

const Navigation = createAppContainer(AppNavigator);

export default () => (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigation />
    </PaperProvider>
  </SafeAreaProvider>
);
