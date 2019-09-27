import React from 'react'; // import library ต่างๆ ที่จำเป็น
import {StyleSheet, Text, View} from 'react-native';

export default class Forecast extends React.Component {
    render() { // ทำการจัดวาง layout ต่างๆ ลงเพื่อแสดงรหัสไปรษณีย์ และ ทำการพยากรณ์อากาศพร้อมบอกอุณหภูมิ
        return(
            <View style={styles.container}>
                <Text style={styles.font2}>{this.props.main}</Text>
                <Text style={styles.font3}>{this.props.description}</Text>
                <Text></Text>
                <Text style={styles.font1}>{this.props.temp} °C</Text>
                <Text></Text>
                <Text style={styles.credit}>Dev by: Yong Yangyuen</Text>
                <Text>6010110293</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({  // กำหนด style ให้สวยงาม
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
    },

    font1: {
        fontSize: 30,
    },

    font2: {
        fontSize: 25,
    },

    font3: {
        fontSize: 16,
    },

    credit: {
        paddingTop: 365,
    }
});