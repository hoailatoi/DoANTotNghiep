import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import firebase from '../componemt/firebase';

export default class Camera extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      data: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    firebase
      .database()
      .ref('User')
      .on('value', snashot => {
        const Users = [];
        snashot.forEach(doc => {
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
            if (this._isMounted) {
              this.setState({
                User: Users,
                loading: false,
              });
            }
          }
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  onSuccess = e => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var [User] = this.state.User;
    firebase
      .database()
      .ref()
      .child('data')
      .child(User.email + '/month ' + month + '/date ' + date + '/' + e.data)
      .set({
        value: e.data,
        email: User.email,
        date: date + '/' + month + '/' + year,
        time: hours + ':' + min + ':' + sec,
      });
    alert('Xin Cảm Ơn!');
  };
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <QRCodeScanner
          cameraStyle={{width: '100%', height: '100%'}}
          onRead={this.onSuccess}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBold: {
    fontWeight: '600',
    color: 'green',
  },
});
