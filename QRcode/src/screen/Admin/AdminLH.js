import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Button,
} from 'react-native';

import firebase from '../../componemt/firebase';

export default class AdminLH extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      newAdd: '',
      newtime:'',
    };
  }
  render() {
    return (
      <View style={{}}>
        <TextInput
          placeholder="Nhập nội dung"
          multiline
          style={{borderWidth: 1}}
          onChangeText={(text) => {
            this.setState({newAdd: text});
          }}></TextInput>
          <TextInput
          placeholder="Nhập thời gian"
          multiline
          style={{borderWidth: 1}}
          onChangeText={(text) => {
            this.setState({newtime: text});
          }}></TextInput>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.ok()}>
          <Text style={styles.loginText}>Tạo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  ok() {
    if (this.state.newAdd.length == 0 || this.state.newtime.length==0) {
      alert('Bạn cần phải nhập đầy đủ nội dung và thời gian');
    } else {
      firebase.database().ref('lichHop').push({
        noidung: this.state.newAdd,
        time: this.state.newtime,
      });
      this.props.navigation.navigate('AdminHome')
    }
  }
}
const styles = StyleSheet.create({
  loginBtn: {
    width: '60%',
    marginLeft: 70,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1493',
  },
});
