import React from 'react'; // ทำการ import library ที่จำเป็น
import {StyleSheet, Text, View, FlatList, TouchableHighlight, ImageBackground} from 'react-native';

const availableZipItems = [ // ประกาศตัวแปรเพื่อเก็บรายชื่อจังหวัด และรหัสไปรษณีย์ของจังหวัดนั้นๆ เป็น Array
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigate}) => ( // นิยาม Arrow function เพื่อทำการแสดงรายการ จังหวัดและรหัสไปรษณีย์ที่สามารถเลื่อนเลือกได้
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
        <View style={styles.zipItem}>
            <Text></Text>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
            <Text></Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code;    // นิยาม Arrow function เพื่อทำการรับค่า item แล้ว return code ของ item นั้นๆ

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({navigation}) => { // นิยาม Arrow function ที่ return headerTitle เป็นข้อความ
        return {
            headerTitle: (<Text>Choose a zip code</Text>)
        }
    }

    render() {
        const {navigate} = this.props.navigation;   // set ค่า navigate เป็น navigation ของ props นี้

        return (    // แสดงรูปภาพพื้นหลังของหน้าเลือก zipCode
            <View>
                <ImageBackground source={require('./bg.jpg')} style={styles.bg}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={ ({item}) => <ZipItem {...item} navigate={navigate}/> }
                />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({ // ปรับแต่ง styles ของ layout ต่างๆ ให้สวยงาม
    zipItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    zipPlace: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.5
    },

    zipCode: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    bg: {
        width: '100%',
        height: '100%'
    }
});
