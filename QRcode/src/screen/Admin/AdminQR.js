import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput,TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';

// Simple usage, defaults for all but the value

export default class AdminQR extends Component {
  
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <View><TouchableOpacity style={{ position: 'absolute', marginLeft: -180, marginTop: 5 }} activeOpacity={0.7} onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            color="#009387"
            size={30}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity></View>
        <QRCode size={250} value={this.props.route.params.QR}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
