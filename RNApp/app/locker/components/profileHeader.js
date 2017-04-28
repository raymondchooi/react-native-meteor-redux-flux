import React, { Component, PropTypes } from 'react';
import { Alert, Animated, Image, StyleSheet, Text, TextInput,
  TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    this.state={

    }
  }

  logoutBtnPress() {
    Alert.alert(
        'Sign Out',
        'Are you Sure?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.logoutAndRefresh()},
        ],
        { cancelable: false }
      )
  }

  logoutAndRefresh() {
    //this.props.removeCurrentUser("");
    Actions.login({type: "reset"});
  }

  loginBtnPress() {
    if (this.state.userName.length > 0 && this.state.password.length > 0) {
      this.props.addCurrentUser({userName: this.state.userName});
      this.loginProceed();
    } else {
      this.setState({ warningText: "Username or Password too short!" });
    }
  }

  loginProceed() {
    Actions.locker();
  }

  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.wrapper }>
          <View style={ styles.textWrap }>
          <Text style={ styles.profileText }>
            Hey {this.props.userName}!
          </Text>
          </View>
          <View style={ styles.textWrap }>
          <Text style={ styles.profileText }>
            You are all up to date.
          </Text>
          </View>
          <View style={ styles.textWrap }>
          <Text style={ styles.profileText }>
            Check out your locker below:
          </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => this.logoutBtnPress()}>
            <View style={ styles.logoutBtn }>
              <Text style={ styles.loginBtnText }>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    top: 0,
  },
  profileText: {
    color: '#fff',
    paddingVertical: 5,
  },
  textWrap: {
    flexDirection: 'row',
    marginVertical: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  logoutBtn: {
    marginHorizontal: 10,
    backgroundColor: '#34495e',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnText: {
    color: '#fff',
    fontSize: 18,
  },
});

ProfileHeader.propTypes = {
  removeCurrentUser: PropTypes.func,
  userName: PropTypes.string,
};
