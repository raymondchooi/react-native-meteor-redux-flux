import React, { Component, PropTypes } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput,
  TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginDetails extends Component {
  constructor(props) {
    super(props);

    this.state={
      warningText: "",
      userName: "",
      password: "",
    }
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
        <View style={ styles.container }/>
        <View style={ styles.wrapper }>
          <Text style={ styles.warningText }>
            { this.state.warningText }
          </Text>

          <View style={ styles.inputWrap }>
            <TextInput style={styles.textInput}
              onChangeText={ (text) => {
                this.setState({ userName: text })}}
              placeholder="Username"
              placeholderTextColor='#d3d3d3'
              autoFocus={true}
              selectTextOnFocus={true}
              underlineColorAndroid='transparent'/>
          </View>

          <View style={ styles.inputWrap }>
            <TextInput style={ styles.textInput }
              onChangeText={ (text) => {
                this.setState({ password: text })}}
              placeholder="Password"
              placeholderTextColor='#d3d3d3'
              selectTextOnFocus={true}
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => this.loginBtnPress()}>
            <View style={ styles.loginBtn }>
              <Text style={ styles.loginBtnText }>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style= { styles.container }/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  warningText: {
    color: '#fff',
    paddingVertical: 5,
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  loginBtn: {
    backgroundColor: '#34495e',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
  },
});

LoginDetails.propTypes = {
  addCurrentUser: PropTypes.func,
  userName: PropTypes.string,
};
