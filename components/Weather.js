import React from 'react';  // import library ต่างๆ ที่จำเป็น
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {    // ประกาศ Contructor set ค่าเริ่มต้นต่างๆ ที่จำเป็น
        super(props);
        this.state = {
            forecast: {
                main: '-',
                description: '-',
                temp: 0
            }
        }
    }

    componentDidUpdate = (prevProps) => {   // สร้าง Arrow function ที่ทำการ update หน้าจอเมื่อเลือก zipCode
        if(prevProps.zipCode !== this.props.zipCode) {
            this.fetchData();
        }
    }

    fetchData = () => { // สร้าง Arrow function เพื่อทำการ Fetch ข้อมูล โดยจะทำการ setState เมื่อเรียกใช้
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()  // สร้าง Arrow function เพื่อทำการ fetch data จากการ Mount

    render() { // แสดง component ต่างๆ ที่แสดงถึงองค์ปประกอบต่างๆ ของหน้าจอ
        return(
            <View style={styles.container}>
                <ImageBackground source={require('./bg1.jpg')} style={styles.backdrop}>
                    <View style={styles.container}>
                        <Text style={styles.font}>Zip code is <Text style={styles.font1}>{this.props.zipCode}.</Text></Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({  // กำหนด style ให้สวยงาม
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backdrop: {
        width: '100%', height: '100%'
    },
    font: {
        fontSize: 30,
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.5
    },
    font1: {
        color: 'red'
    }
});