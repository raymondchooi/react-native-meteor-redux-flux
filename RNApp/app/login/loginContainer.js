import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import LoginDetails from './components/loginDetails';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <LoginDetails/>
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

LoginContainer.propTypes = {
  user: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(LoginContainer);
