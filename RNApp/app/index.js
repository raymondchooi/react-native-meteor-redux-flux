import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './global/allReducers';
import SplashScreenContainer from './splashScreen/index';
import LoginContainer from './login/index';

const store = createStore(Reducers);
persistStore(store, {storage: AsyncStorage});

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <View style = {{ flex: 1 }}>
          <Router>
            <Scene key='root' hideNavBar={true}>
              <Scene key="splashScreen"
                initial={true}
                component={SplashScreenContainer}
                title="SplashScreen"/>
              <Scene key="login"
                component={LoginContainer}
                title="LoginScreen"/>
            </Scene>
          </Router>
        </View>
      </Provider>
    )
  }
}
