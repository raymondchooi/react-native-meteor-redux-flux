import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
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
    backgroundColor: 'blue',
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
