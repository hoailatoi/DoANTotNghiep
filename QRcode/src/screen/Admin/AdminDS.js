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

export default class AdminDS extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      User: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    firebase
      .database()
      .ref('User')
      .on('value', (snashot) => {
        const Users = [];
        snashot.forEach((doc) => {
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
          console.log(Users);
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <View>
        {this.state.User.map((i) => {
          return (
            <View key={i.key} style={{ marginTop: 20, flex: 1}}>
                <Text>{i.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
