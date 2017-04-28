import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class LockerContainer extends Component {
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

LockerContainer.propTypes = {
  userName: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}

export default connect(mapStateToProps)(LockerContainer);
