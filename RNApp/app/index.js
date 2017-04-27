import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { autoRehydrate, persistStore} from 'redux-persist';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
          <Router>
            <Scene key='root' hideNavBar={true}>
              
            </Scene>
          </Router>

    )
  }
}
