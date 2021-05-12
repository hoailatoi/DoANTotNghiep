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
} from 'react-native';
import firebase from '../componemt/firebase';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

export default class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      loading: false,
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref('User')
      .on('value', (snashot) => {
        const Users = [];
        snashot.forEach((doc) => {
          if (
            firebase.auth().currentUser.email ===
            doc.toJSON().email + '@gmail.com'
          ) {
            Users.push({
              key: doc.key,
              name: doc.toJSON().name,
              email: doc.toJSON().email,
              address: doc.toJSON().address,
              phone: doc.toJSON().phone,
            });

            this.setState({
              User: Users,
              loading: false,
            });
            console.log(Users);
          }
        });
      });
  }
  render() {
    return (
      <View style={{padding: 20}}>
        {this.state.User.map((item) => {
          return (
            <View key={item.key}>
              <View style={styles.header}>
                <Animatable.Image
                  animation="zoomIn"
                  style={styles.image}
                  source={require('../image/Acount.png')}
                />
              </View>
              <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5 name="address-book" size={20}></FontAwesome5>
                  <Text style={{marginLeft: 10}}>
                    <Text>Tên: {item.name}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    name="email-lock"
                    size={20}></MaterialCommunityIcons>
                  <Text style={{marginLeft: 10}}>
                    Email: {item.email}@gmail.com
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    name="map-marker-radius-outline"
                    size={20}></MaterialCommunityIcons>
                  <Text style={{marginLeft: 10}}>Địa Chỉ: {item.address}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    name="phone-in-talk"
                    size={20}></MaterialCommunityIcons>
                  <Text style={{marginLeft: 10}}>SĐT: {item.phone}</Text>
                </View>
              </ScrollView>
            </View>
          );
        })}
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => this.Logout()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 5,
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
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  }
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
    width: 360,
    height: 320,
  },
});
