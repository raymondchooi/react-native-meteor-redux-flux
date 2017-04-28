import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import ProfileHeader from './components/profileHeader';

class LockerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.userName);
    return (
      <View style={ styles.container }>
        <ProfileHeader removeCurrentUser={ this.props.removeCurrentUser }
        userName={ this.props.userName }/>
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

LockerContainer.propTypes = {
  removeCurrentUser: PropTypes.func,
  userName: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userName: state.userName,
  };
}

export default connect(mapStateToProps)(LockerContainer);
