import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class AdminHome extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      newQR: '',
    };
  }
  render() {
    return (
      <View style={{padding: 20, flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              placeholder="Nhập nội dung để tạo mã"
              style={{borderBottomWidth: 1, marginBottom: 20}}
              onChangeText={(text) => {
                this.setState({newQR: text});
              }}></TextInput>
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.QR()}>
              <Text style={styles.HomeText}>Tạo Mã QR</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('AdminLH')}>
              <Entypo color="#00b300" name="book" size={50}></Entypo>
              <Text style={styles.HomeText}>Lịch Họp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('AdminDXN')}>
              <Entypo color="#00b300" name="open-book" size={50}></Entypo>
              <Text style={styles.HomeText}>Đơn Xin Nghỉ</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('create')}>
              <Ionicons color="#00b300" name="person-add" size={50}></Ionicons>
              <Text style={styles.HomeText}>Tạo Tài Khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('AdminDS')}>
              <Ionicons
                color="#00b300"
                name="person-sharp"
                size={50}></Ionicons>
              <Text style={styles.HomeText}>Danh Sách NV</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('AdminTC')}>
              <FontAwesome5
                color="#00b300"
                name="business-time"
                size={50}></FontAwesome5>
              <Text style={styles.HomeText}>Tăng Ca</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('AdminDA')}>
              <EvilIcons color="#00b300" name="chart" size={50}></EvilIcons>
              <Text style={styles.HomeText}>Dự Án</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{marginBottom: 20}}
            onPress={() => this.Logout()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Foundation name="power" color="black" size={23} />
              <Text
                style={[
                  styles.textSign,
                  {
                    marginLeft: 5,
                    fontSize: 20,
                    color: 'black',
                  },
                ]}>
                Đăng xuất
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  Logout() {
    Alert.alert('Thông báo', 'Bạn chắc chắn sẽ đăng xuất', [
      {
        text: 'Có',
        onPress: () => this.yes(),
      },
      {
        text: 'Không',
      },
    ]);
  }
  yes() {
    this.props.navigation.navigate('Login');
  }
  QR() {
    if (this.state.newQR.length == 0) {
      alert('Bạn cần phải nhập nọi dung để tạo mã');
    } else {
      this.props.navigation.navigate('AdminQR', {
        QR: this.state.newQR,
      });
    }
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '40%',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    elevation: 3,
  },
});
