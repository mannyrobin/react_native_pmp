import React from 'react';
import { View, Text, Animated, Easing, Image, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLogin: props.navigation.getParam('isLogin') === true ? true : false,
            phoneNumber: '',
            password: '',
            repass: '',
        };

        this.spinValue = new Animated.Value(0);
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
    
    login() {
        let { phoneNumber, password } = this.state;
        alert(`Phone: ${phoneNumber}, Password: ${password}`);
        this.props.navigation.navigate('ConfirmSMS', {mode: Constants.LOGIN_CONFIRM, phone: phoneNumber});
    }

    register() {
        let { phoneNumber, password, repass } = this.state;
        alert(`Phone: ${phoneNumber}, Password: ${password}, Check: ${repass}`);
        this.props.navigation.navigate('ConfirmSMS', {mode: Constants.REGISTER_CONFIRM, phone: phoneNumber});
    }

    recoverPassword() {
        let { phoneNumber } = this.state;
        this.props.navigation.navigate('ConfirmSMS', {mode: Constants.FORGET_PASSWORD, phone: phoneNumber});
    }

    onPhoneNoChange = newData => {
        this.setState({phoneNumber: newData});
    }

    onPasswordChange = newData => {
        this.setState({password: newData});
    }

    onRepassChange = newData => {
        this.setState({repass: newData});
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        let { isLogin } = this.state;

        return (<ImageBackground style={styles.container} source={require('../assets/images/splash.png')}>
            {/*<Animated.Image source={require('../assets/images/loading.png')} style={{transform: [{rotate: spin}], ...styles.loading}}/>*/}
            <View style={styles.signForm}>
                <View style={styles.mode}>
                    <Text style={{...(isLogin === true ? styles.modeSelection : styles.modeDeselection)}}
                        onPress={() => {this.setState({isLogin: true})}}>Авторизация</Text>
                    <Text style={{...(isLogin !== true ? styles.modeSelection : styles.modeDeselection)}}
                        onPress={() => {this.setState({isLogin: false})}}>Регистрация</Text>
                </View>
                {
                    isLogin === true ? (<View>
                        <View style={styles.inputBack}>
                            <TextInput placeholder="Введите, пожалуйста, номер телефона" placeholderTextColor="#999"
                                onChangeText={phone => {this.onPhoneNoChange(phone)}}/>
                        </View>
                        <View style={{...styles.inputBack, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput style={styles.password} placeholder="Введите, пожалуйста, пароль" placeholderTextColor="#999"
                                onChangeText={pwd => {this.onPasswordChange(pwd)}}/>
                            <Text style={styles.forgetPassword}
                                onPress={() => {this.recoverPassword()}}>
                                Забыли пароль?
                            </Text>
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.orange} title={"Продолжить"} onPress={() => {this.login()}}/>
                        </View>
                    </View>) : (<View>
                        <View style={styles.inputBack}>
                            <TextInput placeholder="Введите, пожалуйста, номер телефона" placeholderTextColor="#999"
                                onChangeText={phone => {this.onPhoneNoChange(phone);}}/>
                        </View>
                        <View style={{...styles.inputBack, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput style={styles.password} placeholder="Введите, пожалуйста, пароль" placeholderTextColor="#999"
                                onChangeText={pwd => {this.onPasswordChange(pwd)}}/>
                            <Image source={require('../assets/images/visible.png')} width={20} height={20}/>
                        </View>
                        <View style={{...styles.inputBack, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput style={styles.password} placeholder="Повторите, пожалуйста, пароль" placeholderTextColor="#999"
                                onChangeText={repwd => {this.onRepassChange(repwd)}}/>
                            <Image source={require('../assets/images/invisible.png')} width={20} height={20}/>
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.orange} title={"Продолжить"} onPress={() => {this.register()}}/>
                        </View>
                    </View>)
                }
            </View>
        </ImageBackground>)
    }
};

const styles = {
    container: {
        flex: 1,
    },
    loading: {
        width: 40,
        height: 40,
    },
    signForm: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 60,

        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: 'white',

        borderRadius: 10,
    },
    mode: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modeSelection: {
        padding: 10,
        width: '40%',
        textAlign: 'center',

        borderRadius: 10,

        color: Colors.orange,
        backgroundColor: Colors.gray,

        fontWeight: '700',
    },
    modeDeselection: {
        padding: 10,
        width: '40%',
        textAlign: 'center',

        borderRadius: 10,

        fontWeight: '700',
    },
    inputBack: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.gray,
    },
    password: {
        width: '60%',
    },
    forgetPassword: {
        color: 'blue',
        margin: 10,
    },
    passwordVisiblity: {

    },
    button: {
        backgroundColor: Colors.orange,
        margin: 10,
    }
};

export default LoginScreen;