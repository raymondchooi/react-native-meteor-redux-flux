import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class RNApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('RNApp', () => HelloWorldApp);
