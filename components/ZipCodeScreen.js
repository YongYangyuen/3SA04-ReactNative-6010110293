import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, ImageBackground} from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
        <View style={styles.zipItem}>
            <Text></Text>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
            <Text></Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code;

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>)
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
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

const styles = StyleSheet.create({
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
