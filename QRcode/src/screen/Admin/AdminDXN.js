import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native';
import firebase from '../../componemt/firebase';

export default class AdminDXN extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      DonXN: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    firebase
      .database()
      .ref('DonXN')
      .on('value', (snashot) => {
        const DonXNs = [];
        snashot.forEach((doc) => {
            DonXNs.push({
            key: doc.key,
            noidungdon: doc.toJSON().noidung,
            time: doc.toJSON().time,
          });
          if (this._isMounted) {
            this.setState({
                DonXN: DonXNs,
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
        {this.state.DonXN.length == 0 ? (
          <View>
            <Text>Chưa có dự án cần làm</Text>
          </View>
        ) : (
          <View>
            {this.state.DonXN.map((i) => {
              return (
                <View key={i.key}>
                  <Text>{i.noidungdon}</Text>
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
