import React from 'react';
import { View, Text, TextInput, Image, ImageBackground } from 'react-native';

const fitness = require('../assets/images/icons/fitness.png');
const beauty = require('../assets/images/icons/beauty.png');

export default class ArticleScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            article: props.navigation.getParam('article'),
        };
    }

    render() {
        let { article } = this.state;

        return <ImageBackground style={styles.container} source={require('../assets/images/background/home.png')}>
            <View style={styles.header}>
                <Text>{article.title}</Text>
                <Text>{article.comment}</Text>
                <Image source={article.image}/>
            </View>
            <Image source={article.mode === "fitness" ? fitness : beauty}/>
            <Text>Описание</Text>
            <Text>{article.description}</Text>
        </ImageBackground>
    }
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
    title: {

    },
    comment: {

    },
    image: {

    }
};