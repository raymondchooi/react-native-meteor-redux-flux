import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginReducers from './login/reducers';

import SplashScreenContainer from './splashScreen/index';
import LoginContainer from './login/index';
import LockerContainer from './locker/index';

const store = compose(autoRehydrate())(createStore)(LoginReducers);

export default class App extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <View/>
    } else {
      return (
        <Provider store={ store }>
          <View style={{ flex: 1 }}>
            <Router>
              <Scene key='root' hideNavBar={true}>
                <Scene key="splashScreen"
                  animation='fade'
                  duration='300'
                  initial={true}
                  component={SplashScreenContainer}
                  title="SplashScreen"/>
                <Scene key="login"
                  duration='300'
                  animation='fade'
                  component={LoginContainer}
                  title="LoginScreen"/>
                <Scene key="locker"
                  component={LockerContainer}
                  title="Locker"/>
              </Scene>
            </Router>
          </View>
        </Provider>
      )
    }
  }
}
