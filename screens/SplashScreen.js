import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Image source={require('../assets/images/splash.png')} style={styles.splash}/>
        </View>)
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    splash: {
        width: '100%',
        height: '100%',
    },
});