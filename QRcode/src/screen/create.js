import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../componemt/firebase';
import Icon from 'react-native-vector-icons/Ionicons';

const create = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email + '@gmail.com', password);
      firebase.database().ref().child('User').push({
        email: email,
        address: address,
        name: name,
        phone: phone,
        type: '0',
      });
      ToastAndroid.showWithGravity(
        'Tạo tài khoản thành công ',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      navigation.navigate('AdminHome'),
        {
          keyUser: email,
        };
    } catch (err) {
      const checkPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (
        email.length == 0 ||
        password.length == 0 ||
        name.length == 0 ||
        address.length == 0 ||
        phone.length == 0
      ) {
        ToastAndroid.showWithGravity(
          'Bạn chưa nhập đầy đủ thông tin',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
      } else {
        if (password.length < 6) {
          ToastAndroid.showWithGravity(
            'Mật khẩu phải lớn hơn 6 kí tự ',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
        } else {
          if (checkPhone.test(phone) === false) {
            ToastAndroid.showWithGravity(
              'Nhập sai định dạng số điện thoại',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
            );
          } else {
            ToastAndroid.showWithGravity(
              'Tài khoản đã tồn tại',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
            );
          }
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
      <View><TouchableOpacity style={{ position: 'absolute', marginLeft: -20, marginTop: 5 }} activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            color="#fff"
            size={30}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity></View>
        <Text style={styles.text_header}>Tạo Ngay Tài Khoản</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <Text
              style={{
                flex: 1,
                paddingLeft: 10,
                color: '#05375a',
              }}>
              @gmail.com
            </Text>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Mật Khẩu
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Mật Khẩu"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Tên Khách Hàng
          </Text>
          <View style={styles.action}>
            <Feather name="user" color="#05375a" size={20} />
            <TextInput
              placeholder="Tên User"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={setName}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Địa Chỉ
          </Text>
          <View style={styles.action}>
            <FontAwesome name="address-book" color="#05375a" size={20} />
            <TextInput
              placeholder="Địa Chỉ"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={setAddress}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Số Điện Thoại
          </Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Số Điện Thoại"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => signUp()}>
              <LinearGradient
                colors={['#FF1493', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Đăng Ký
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1493',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:20,
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  color_textPrivate1: {
    color: 'blue',
  },
});

export default create;
