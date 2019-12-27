import React from 'react';
import { Text, View, ImageBackground, FlatList, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainMenu = [
    { title: 'Главная', file: require('../assets/images/mainmenu/home.png'), navigate: 'Home' },
    { title: 'Профиль', file: require('../assets/images/mainmenu/profile.png'), navigate: 'Profile' },
    { title: 'PMP News', file: require('../assets/images/mainmenu/news.png'), navigate: 'News' },
    { title: 'Карта', file: require('../assets/images/mainmenu/map.png'), navigate: 'Map' },
    { title: 'Меню бара', file: require('../assets/images/mainmenu/bar.png'), navigate: 'Bar' },
    { title: 'Подарочные сертификатыи карты', file: require('../assets/images/mainmenu/gift.png'), navigate: 'Gift' },
    { title: 'Уведомления', file: require('../assets/images/mainmenu/notification.png'), navigate: 'Notification' },
    { title: 'О PMP', file: require('../assets/images/mainmenu/about.png'), navigate: 'About' },
];

const BottomMenu = [
    { title: 'bucket', file: require('../assets/images/mainmenu/bucket.png') },
    { title: 'setting', file: require('../assets/images/mainmenu/setting.png') },
    { title: 'logout', file: require('../assets/images/mainmenu/logout.png') },
];

class MainMenuScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {        
    }

    render() {
        return (<ImageBackground style={styles.container} source={require('../assets/images/background/mainmenu.png')}>
            <Text style={styles.title}>P M P</Text>
            <View style={styles.menuPad}>
                <FlatList
                    data={MainMenu}
                    numColumns={2}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => {
                        return (<View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => {+this.props.navigation.navigate(item.navigate)}}>
                                <View style={styles.circleIcon}>
                                    <Image source={item.file} style={styles.menuIcon}/>
                                </View>
                                <Text style={{fontSize: 14, textAlign: 'center'}}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>)
                    }}
                />
            </View>
            <View style={{width: '100%', height: '10%', alignItems: 'center'}}>
                <FlatList
                    data={BottomMenu}
                    numColumns={3}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => {
                        return (<View style={{margin: 10}}>
                            <Image source={item.file} style={styles.bottomMenuItem}/>
                        </View>)
                    }}
                />
            </View>
        </ImageBackground>)
    }
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: 35,
        textAlign: 'center',
        fontSize: 18,
    },
    menuPad: {
        height: '70%',
        width: '100%',
    },
    menuItem: {
        width: '50%',
        height: 150,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: Colors.gray,
    },
    bottomMenuItem: {
        width: 50,
        height: 50,
    },
    circleIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.orange,
    },
    menuIcon: {
        width: 22,
        height: 22,
        alignSelf: 'center',
    },
};

export default MainMenuScreen;