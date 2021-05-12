import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from 'react-native';

import firebase from '../componemt/firebase';
import * as Animatable from 'react-native-animatable';

const ForgotPass = ({navigation}) => {
    const [email, setEmail] = useState('');

    const Send = async () => {
        try {
            const response = await firebase.auth().sendPasswordResetEmail(email);
            ToastAndroid.showWithGravity(
                "Vui lòng kiểm tra hộp thư gmail",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
            navigation.navigate('Login');
        } catch (err) {
            if(email.length == 0)
            {
                ToastAndroid.showWithGravity(
                    "Bạn chưa nhập email",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }
            else{
                ToastAndroid.showWithGravity(
                    "Nhập sai định dạng email",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
            }
        }
    }
    return (
        <View style={styles.container}>
          <Animatable.Image animation="zoomIn" style={styles.image} source={require("../image/Não.png")} />
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Account"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => Send() }>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    export default ForgotPass;
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