import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TC extends Component {
    render() {
        return (
            <View style={{margin:20,flexDirection:'row',justifyContent:'space-around'}}>
              <Text>Hôm nay bạn không có lịch tăng ca</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
