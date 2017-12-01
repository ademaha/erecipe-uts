import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Boiler from './Boiler';

import { StackNavigator } from "react-navigation";

export default class Indek extends Component<{}> {
  static navigationOptions = {
    header: null
  };

  render() {
  const { navigation } = this.props;
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

const Navigasi = StackNavigator ({
  Login: { screen: Login },
  Register: { screen: Register },
  Boiler: { screen: Boiler }
});

AppRegistry.registerComponent('erecipe', () => Navigasi);

