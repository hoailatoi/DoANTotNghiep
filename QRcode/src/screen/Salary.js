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
import firebase from '../componemt/firebase';

export default class Salary extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      lichHop: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    firebase
      .database()
      .ref('lichHop')
      .on('value', (snashot) => {
        const lichHops = [];
        snashot.forEach((doc) => {
          lichHops.push({
            key: doc.key,
            noidung: doc.toJSON().noidung,
            time: doc.toJSON().time,
          });
          if (this._isMounted) {
            this.setState({
              lichHop: lichHops,
              loading: false,
            });
          }
          console.log(lichHops);
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          fontsize: 18,
        }}>
        {this.state.lichHop.length == 0 ? (
          <View>
            <Text>Chưa Có Lịch</Text>
          </View>
        ) : (
          <View>
            {this.state.lichHop.map((i) => {
              return (
                <View key={i.key}>
                  <Text>{i.noidung}</Text>
                  <Text>{i.time}</Text>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
