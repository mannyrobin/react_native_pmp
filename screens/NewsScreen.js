import React from 'react';
import { TouchableOpacity, Image, View, Text, ImageBackground, Picker } from 'react-native';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

const sidemenu = require('../assets/images/icons/sidemenu.png');

export default class NewsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            period: Constants.ALL_ARTICLES,
            articles: [
            ]
        };
    }

    render() {
        let { period, articles } = this.state;
        return <ImageBackground style={styles.container} source={require('../assets/images/background/home.png')}>
            <View style={styles.headerOptions}>
                <Text style={styles.title}>PMP News</Text>
                <Image source={sidemenu} style={{width: 20, height: 15, alignSelf: 'center'}}/>
            </View>
            <View style={styles.periodSelection}>
                <TouchableOpacity style={{...styles.period, backgroundColor: period === Constants.ALL_ARTICLES ? Colors.orange : Colors.gray}}
                    onPress={() => {this.setState({period: Constants.ALL_ARTICLES})}}>
                    <Text>
                        ВСЕ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.period, backgroundColor: period === Constants.TODAY_ARTICLES ? Colors.orange : Colors.gray}}
                    onPress={() => {this.setState({period: Constants.TODAY_ARTICLES})}}>
                    <Text>
                        Сегодня
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.period, backgroundColor: period === Constants.WEEKLY_ARTICLES ? Colors.orange : Colors.gray}}
                    onPress={() => {this.setState({period: Constants.WEEKLY_ARTICLES})}}>
                    <Text>
                            Неделя
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.period, backgroundColor: period === Constants.MONTHLY_ARTICLES ? Colors.orange : Colors.gray}}
                    onPress={() => {this.setState({period: Constants.MONTHLY_ARTICLES})}}>
                    <Text>        
                        Месяц
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    }
};

const styles = {
    container: {
        flex: 1,
        padding: 40,
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
    },
    periodSelection: {
        flexDirection: 'row',
    },
    period: {
        marginTop: 30,
        marginRight: 15,

        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,

        borderWidth: 2,
        borderColor: Colors.darkGray,
        borderRadius: 10,
    },
    headerOptions: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        width: '100%',
    },
};