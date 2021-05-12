import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import firebase from '../componemt/firebase';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            User: [],
            email: '',
            pass: '',
        });
    }
    componentDidMount() {
        firebase.database().ref('User').on('value', (snashot) => {
            const Users = [];
            snashot.forEach((doc) => {
                {
                    Users.push({
                        key: doc.key,
                        name: doc.toJSON().name,
                        email: doc.toJSON().email,
                        address: doc.toJSON().address,
                        phone: doc.toJSON().phone,
                        type: doc.toJSON().type
                    });

                    this.setState({
                        User: Users,
                        loading: false,
                    });
                }
            })
        });
    }
    render() {
      return (
        <View style={styles.container}>
          <Animatable.Image
            animation="zoomIn"
            style={styles.image}
            source={require('../image/MaFB.png')}
          />
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Account"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => { this.setState({ email: text }); }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(text) => { this.setState({ pass: text }); }}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => this.props.navigation.navigate('ForgotPass')}>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.Login()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      );
    }
    Login() {
        for (let item of this.state.User) {
            if (item.email == this.state.email && item.type == 0) {
                var check = 0;
            }
            if (item.email == this.state.email && item.type == 1) {
                var check = 1;
            }
        }
        if (check == 0) {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email + '@gmail.com', this.state.pass)
                .then(() => {
                    this.props.navigation.navigate('Tab')
                })
                .catch(function (error) {
                    ToastAndroid.showWithGravity(
                        "Vui lòng kiểm tra lại mật khẩu",
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM
                    );
                });
        }
        else if( check ==1 )
        {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email + '@gmail.com', this.state.pass)
                .then(() => {
                    this.props.navigation.navigate('AdminHome')
                })
                .catch(function (error) {
                    ToastAndroid.showWithGravity(
                        "Vui lòng kiểm tra lại mật khẩu",
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM
                    );
                });
        }
        else{
            if (this.state.email.length == 0 || this.state.pass.length == 0) {
                ToastAndroid.showWithGravity(
                    "Bạn chưa nhập email hoặc mật khẩu",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }
            else if (this.state.pass.length < 6) {
                ToastAndroid.showWithGravity(
                    "Mật khẩu phải lớn hơn 6 kí tự ",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }
            else{
                ToastAndroid.showWithGravity(
                    "Tài khoản chứa ký tự đặc biệt hoặc không tồn tại",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    width: 360,
    height: 280,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});