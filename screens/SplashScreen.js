import React from 'react';
import { View, Animated, Easing, Image, ImageBackground, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };

        setTimeout(function(){
            this.props.navigation.navigate('Login', {isLogin: true});
        }.bind(this), 2000);

        this.spinValue = new Animated.Value(0);
    }

    onDidFocus() {
        this.setState({
            isLoading: true,
        }),

        setTimeout(function(){
            this.props.navigation.navigate('Login', {isLogin: true});
        }.bind(this), 2000);
    }

    componentDidMount() {        
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
        }).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (<ImageBackground style={styles.container} source={require('../assets/images/splash.png')}>
            <NavigationEvents onDidFocus={(payload) => {this.onDidFocus(payload)}}/>
            <Animated.Image source={require('../assets/images/loading.png')} style={{transform: [{rotate: spin}], ...styles.loading}}/>
        </ImageBackground>)
    }
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        width: 40,
        height: 40,
    }
};

export default SplashScreen;