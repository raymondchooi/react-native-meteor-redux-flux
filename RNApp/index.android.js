import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './app/index';

class RNApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('RNApp', () => App);
