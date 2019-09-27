import React from 'react';  // import library ต่างๆ ที่จำเป็น
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen'

const RootStack = createStackNavigator({ // สร้างตัวแปรเก็บค่าคงที่ Weather กับ ZipCode
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
},{
  initialRouteName: 'Weather',  // set ค่าเริ่มต้นของ Route เป็นชื่อ Weather
  initialRouteParams: {zipCode: '90110'} // set ค่าเริ่มต้นของ zipCode เป็น 90110
}
)

const AppContainer = createAppContainer(RootStack); // สร้างตัวแปรเก็บการสร้าง App Container RootStack

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/> // เรียกใช้ App Container
    );
  }
}
 
