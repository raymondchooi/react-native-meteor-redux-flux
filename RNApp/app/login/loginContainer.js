import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addCurrentUser } from './actions';
import LoginDetails from './components/loginDetails';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <LoginDetails addCurrentUser={ this.props.addCurrentUser }
        userName={this.props.userName}/>
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
  addCurrentUser: PropTypes.func,
  userName: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCurrentUser: payload => dispatch(addCurrentUser(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
