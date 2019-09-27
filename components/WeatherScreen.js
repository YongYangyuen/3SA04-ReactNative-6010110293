import React from 'react';  // import library ต่างๆ ที่จำเป็นรวมทั้งปุ่ม Button
import {StyleSheet, Text, View, Button} from 'react-native';
import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => { // ทำการนิยาม Arrow function เพื่อสร้างปุ่ม Change zip เพื่อใช้ในการกดเพื่อเลือกเปลี่ยน zipCode ได้
        return {
                headerTitle: (<Text>Weather</Text>),
                headerRight: (
                    <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                />)
        }
    }

    render() {  // เก็บค่า zipCode จาก parameter
        const zipCode = this.props.navigation.getParam('zipCode')

        return(
            <Weather zipCode={zipCode}/> // ส่งค่า zipCode ไปให้ Weather
        );
    }
}