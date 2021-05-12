import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import firebase from '../componemt/firebase';

export default class DA extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      DuAn: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    firebase
      .database()
      .ref('DuAn')
      .on('value', (snashot) => {
        const DuAns = [];
        snashot.forEach((doc) => {
          DuAns.push({
            key: doc.key,
            noidung: doc.toJSON().noidung,
            time: doc.toJSON().time,
          });
          if (this._isMounted) {
            this.setState({
              DuAn: DuAns,
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
        {this.state.DuAn.length == 0 ? (
          <View>
            <Text>Chưa có dự án cần làm</Text>
          </View>
        ) : (
          <View>
            {this.state.DuAn.map((i) => {
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
