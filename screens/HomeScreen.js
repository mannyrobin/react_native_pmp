import React from 'react';
import { Image, View, Text, ImageBackground, Picker } from 'react-native';
import Colors from '../constants/Colors';

const sidemenu = require('../assets/images/icons/sidemenu.png');

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'fitness',
        };
    }

    render() {
        return <ImageBackground style={styles.container} source={require('../assets/images/background/home.png')}>
            <View style={styles.headerOptions}>
                <Picker
                    style={styles.modePicker}
                    selectedValue={this.state.mode}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({mode: itemValue})
                    }>
                    <Picker.Item label="PMP FITNESS" value="fitness" />
                    <Picker.Item label="PMP BEAUTY" value="beauty" />
                </Picker>
                <Image source={sidemenu} style={{width: 20, height: 15, alignSelf: 'center', }}/>
            </View>
            <Text style={styles.title}>Главная</Text>

            <View style={styles.schedules}>
                <View style={styles.scheduleItem}>
                    <Text style={{textAlign: 'center'}}>Баланс тренировок</Text>
                    <Text style={{width: '70%', height: '70%', textAlign: 'center'}}>5</Text>
                    <Text style={{textAlign: 'center'}}>До 11.11.2019</Text>
                </View>
                <View style={styles.scheduleItem}>
                    <Text style={{textAlign: 'center'}}>Программа лояльности</Text>
                    <Text style={{width: '70%', height: '70%', textAlign: 'center'}}>3</Text>
                    <Text style={{textAlign: 'center'}}>До статуса постоянного клиента</Text>
                </View>
            </View>

            <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30}}>
                <Text>Особые предложения</Text>
                <Text style={{color: Colors.orange}}>ВСЕ</Text>
            </View>
        </ImageBackground>
    }
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
    headerOptions: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        width: '100%',
    },
    modePicker: {
        height: 50,
        width: 150,
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
    },
    schedules: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    scheduleItem: {
        padding: 15,
        
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: Colors.gray,

        width: '45%',
        height: 200,
        backgroundColor: 'white',
    },
};