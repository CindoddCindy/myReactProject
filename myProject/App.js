import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './view_layout/SplashScreen';

const App = createSwitchNavigator({
  SplashScreen:{
    screen:SplashScreen,
    navigationOptions:{
      headerShown:false,
    }
  }
});

export default createAppContainer(App);