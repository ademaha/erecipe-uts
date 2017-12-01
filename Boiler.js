import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

//import { StackNavigator } from "react-navigation";

export default class Boiler extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <Text>Welcome to erecipe</Text>;
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("Boiler", () => Boiler);
