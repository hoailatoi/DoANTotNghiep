import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//Tổng
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import Salary from './src/screen/Salary';
import ForgotPass from './src/screen/ForgotPass';
import EditAccount from './src/screen/EditAccount';
import Camera from './src/screen/Camera';
import create from './src/screen/create';
import meeting from './src/screen/meeting';
import DA from './src/screen/DA';
import TK from './src/screen/TK';
import TC from './src/screen/TC';
import DXN from './src/screen/DXN';
//Admin
import AdminHome from './src/screen/Admin/AdminHome';
import AdminQR from './src/screen/Admin/AdminQR';
import AdminLH from './src/screen/Admin/AdminLH';
import AdminDXN from './src/screen/Admin/AdminDXN';
import AdminTC from './src/screen/Admin/AdminTC';
import AdminDA from './src/screen/Admin/AdminDA';
import AdminDS from './src/screen/Admin/AdminDS';

//ATBM ttconst Stack = createStackNavigator();
const TabScreen = createMaterialBottomTabNavigator();

function Tab(props) {
  return (
    <TabScreen.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{backgroundColor: '#009387'}}>
      <TabScreen.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <TabScreen.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({color}) => (
            <Icon name="ios-camera" color={color} size={26} />
          ),
        }}
      />
      <TabScreen.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </TabScreen.Navigator>
  );
}
const StackScreen = createStackNavigator();
function Stack() {
  return (
    <StackScreen.Navigator initialRouteName="Login">
      <StackScreen.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="Tab"
        component={Tab}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{
          title: 'ForgotPass',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminHome"
        component={AdminHome}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="AdminQR"
        component={AdminQR}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="create"
        component={create}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="meeting"
        component={meeting}
        options={{
          title: 'Bảng Lương',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="DXN"
        component={DXN}
        options={{
          title: 'Đơn Xin Nghỉ',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminTC"
        component={AdminTC}
        options={{
          title: 'Đơn Tăng Ca',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminLH"
        component={AdminLH}
        options={{
          title: 'Tạo Lịch Họp',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminDXN"
        component={AdminDXN}
        options={{
          title: 'Đơn Xin Nghỉ',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminDS"
        component={AdminDS}
        options={{
          title: 'Danh Sách Nhân Viên',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="AdminDA"
        component={AdminDA}
        options={{
          title: 'Tạo Dự Án Cần Làm',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="DA"
        component={DA}
        options={{
          title: 'Dự Án',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="TC"
        component={TC}
        options={{
          title: 'Lịch Tăng Ca',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="TK"
        component={TK}
        options={{
          title: 'Tổng Kết',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <StackScreen.Screen
        name="Salary"
        component={Salary}
        options={{
          title: 'Lịch Họp',
          headerStyle: {
            backgroundColor: '#08d4c4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </StackScreen.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
export default App;
