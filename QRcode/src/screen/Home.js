import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from 'react-native';
import firebase from '../componemt/firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            margin: 20,
            marginTop: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Salary')}>
            <Entypo color="#00b300" name="book" size={50}></Entypo>
            <Text style={styles.HomeText}>Lịch Họp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('DXN')}>
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
            onPress={() => this.props.navigation.navigate('meeting')}>
            <MaterialIcons
              color="#00b300"
              name="monetization-on"
              size={50}></MaterialIcons>
            <Text style={styles.HomeText}>Lương</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('DA')}>
            <EvilIcons color="#00b300" name="chart" size={50}></EvilIcons>
            <Text style={styles.HomeText}>Dự Án</Text>
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
            onPress={() => this.props.navigation.navigate('TC')}>
            <FontAwesome5
              color="#00b300"
              name="business-time"
              size={50}></FontAwesome5>
            <Text style={styles.HomeText}>Tăng Ca</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('TK')}>
            <EvilIcons color="#00b300" name="trophy" size={50}></EvilIcons>
            <Text style={styles.HomeText}>Tổng Kết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
