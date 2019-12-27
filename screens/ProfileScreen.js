import React from 'react';
import { FlatList, Image, View, Text, ImageBackground, Picker } from 'react-native';
import Colors from '../constants/Colors';

const sidemenu = require('../assets/images/icons/sidemenu.png');

const menuItemData = [
    {icon: require('../assets/images/icons/person.png'), title: 'Персональные данные', navigate: ''},
    {icon: require('../assets/images/icons/calendar.png'), title: 'Мое расписание', navigate: ''},
    {icon: require('../assets/images/icons/points.png'), title: 'Мои баллы', navigate: ''},
    {icon: require('../assets/images/icons/history.png'), title: 'Статистика и история посещений', navigate: ''},
    {icon: require('../assets/images/icons/food.png'), title: 'Дневник питания', navigate: ''},
    {icon: require('../assets/images/icons/result.png'), title: 'Дневник результатов', navigate: ''},
    {icon: require('../assets/images/icons/chat.png'), title: 'Чат', navigate: ''},
    {icon: require('../assets/images/icons/review.png'), title: 'Мои отзывы', navigate: ''},
]

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'fitness',
        };
    }

    render() {
        return <ImageBackground style={styles.container} source={require('../assets/images/background/profile.png')}>
            <View style={styles.menuPad}>
                <FlatList
                    data={menuItemData}
                    renderItem={({item}) => {
                        return <View style={styles.menuItem}>
                            <Image source={item.icon} width="32" height="32"/>
                            <Text style={{width: '80%', textAlign: 'left'}}>{item.title}</Text>
                            <Text>{'>'}</Text>
                        </View>
                    }}
                    keyExtractor={item => item.title}
                />
            </View>
        </ImageBackground>
    }
};

const styles = {
    container: {
        flex: 1,
    },
    menuPad: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingLeft: 30,
        paddingRight: 30, 

        height: 60,
        width: '100%',
    },
};