import React from 'react';
import { TouchableOpacity, Image, View, Text, ImageBackground, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

const sidemenu = require('../assets/images/icons/sidemenu.png');
const fitness = require('../assets/images/icons/fitness.png');
const beauty = require('../assets/images/icons/beauty.png');

export default class NewsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            period: Constants.ALL_ARTICLES,
            articles: [
                {
                    id: '00000001',
                    image: require('../assets/images/sample/article_1.png'),
                    date: 'Сегодня', 
                    title: 'Первая тренировка',
                    comment: 'Полезная информация о подготовке',
                    mode: 'fitness',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    • Magna aliqua. Ut enim ad minim veniam
                    • Magna aliqua. Ut enim ad minim veniam
                    • Magna aliqua. Ut enim ad minim veniam
                    • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
                {
                    id: '00000002',
                    image: require('../assets/images/sample/article_2.png'),
                    date: 'Неделя', 
                    title: 'Прием косметолога',
                    comment: 'Полезная информация о подготовке',
                    mode: 'beauty',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
                {
                    id: '00000003',
                    image: require('../assets/images/sample/article_3.png'),
                    date: 'Сегодня', 
                    title: 'Первая тренировка',
                    comment: 'Полезная информация о подготовке',
                    mode: 'fitness',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
                {
                    id: '00000004',
                    image: require('../assets/images/sample/article_1.png'),
                    date: 'Сегодня', 
                    title: 'Первая тренировка',
                    comment: 'Полезная информация о подготовке',
                    mode: 'fitness',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
                {
                    id: '00000005',
                    image: require('../assets/images/sample/article_2.png'),
                    date: 'Неделя', 
                    title: 'Прием косметолога',
                    comment: 'Полезная информация о подготовке',
                    mode: 'beauty',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
                {
                    id: '00000006',
                    image: require('../assets/images/sample/article_3.png'),
                    date: 'Сегодня', 
                    title: 'Первая тренировка',
                    comment: 'Полезная информация о подготовке',
                    mode: 'fitness',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                        • Magna aliqua. Ut enim ad minim veniam
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
                },
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
            <FlatList
                data={articles}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return <View style={styles.article}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Article', {article: item})}}>
                            <Image source={item.image} style={styles.articleImage}/>
                        </TouchableOpacity>
                        <Text style={styles.articleTitle}>{item.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>{item.comment}</Text>
                            <Text>{item.date}</Text>
                        </View>
                        <Image source={item.mode === "fitness" ? fitness : beauty} style={styles.articleMode}/>
                    </View>
                }}
            />
        </ImageBackground>
    }
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
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
    article: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    articleImage: {
        width: '100%',
        height: 200,
    },
    articleTitle: {
        fontSize: 24,
        fontWeight: '900',
    },
    articleMode: {
        position: 'absolute',
        right: 10,
        top: 10,

        width: 28,
        height: 28,
    }
};