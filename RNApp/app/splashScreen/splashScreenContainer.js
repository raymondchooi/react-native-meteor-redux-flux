import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import LoginContainer from '../login/loginContainer';

class SplashScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentDidMount() {
    //Simulate loading
    this.timer = setTimeout( () => {
      if(this.props.userName == undefined) {
        Actions.login();
      } else {
        Actions.locker();
      }
    }, 1000);
  }

  render() {
    return (
      <View style={ styles.container }>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F34F5A',
  },
});

SplashScreenContainer.propTypes = {
  userName: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}

export default connect(mapStateToProps)(SplashScreenContainer);
