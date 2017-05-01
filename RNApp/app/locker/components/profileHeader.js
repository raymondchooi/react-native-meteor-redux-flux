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

            <Text style={ styles.profileText }>
              You are all up to date.
            </Text>

            <Text style={ styles.profileText }>
              Check out your locker below:
            </Text>
          </View>

          <View style={ styles.logoutBtnHolder }>
            <View style={ styles.headerSeparator }/>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.logoutBtnPress()}>
              <Image style={ styles.logoutBtn }
                source={ require('../../global/images/logoutIcon.png')}/>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#34495e'
  },
  profileText: {
    color: '#fff',
  },
  textWrap: {
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  logoutBtnHolder: {
    flexDirection: 'row',
  },
  headerSeparator: {
    width: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  logoutBtn: {
    height: 50,
    width: 50,
    right: 0,
    marginHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 15,
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
