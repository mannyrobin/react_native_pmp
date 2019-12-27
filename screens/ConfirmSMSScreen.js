import React from 'react';
import { View, Text, Animated, Easing, Image, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

class ConfirmSMSScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        let mode = navigation.getParam('mode');
        let title = '';
        switch (mode) {
            case Constants.FORGET_PASSWORD:
                title = 'Восстановление пароля';
                break;
            case Constants.LOGIN_CONFIRM:
                title = 'Авторизация';
                break;
            case Constants.REGISTER_CONFIRM:
                title = 'Регистрация';
                break;
        };

        return {
            title: title,
            headerStyle: {
                backgroundColor: '#00F',
            }
        };
    };

    constructor(props) {
        super(props);
        let mode = props.navigation.getParam('mode');
        let phone = props.navigation.getParam('phone');
        let comment = '';

        switch (mode) {
            case Constants.FORGET_PASSWORD:
                comment = 'Введите, пожалуйста, СМС-код, высланный на Ваш номер телефона для восстановления пароля.';
                break;
            case Constants.LOGIN_CONFIRM:
                comment = 'Введите, пожалуйста, СМС-код, высланный на Ваш номер телефона для входа в приложение.';
                break;
            case Constants.REGISTER_CONFIRM:
                comment = 'Введите, пожалуйста, СМС-код, высланный на Ваш номер телефона для завершения регистрации.';
                break;
        };

        this.state = {
            mode: mode,
            comment: comment,
            confirmCode: '',
            phone: phone,
        };
    }

    componentDidMount() {
    }
    
    confirmSMS() {
        let { mode, confirmCode, phone } = this.state;
        alert(confirmCode);

        if (mode === Constants.FORGET_PASSWORD) {
            this.props.navigation.navigate('ChangePassword', {phone: phone});
        }
        else {
            this.props.navigation.navigate('MainMenu');
        }
    }

    confirmCodeChange(sms) {
        console.log(sms);
        this.setState({confirmCode: sms});
    }

    render() {
        let { mode, comment } = this.state;

        return (<ImageBackground style={styles.container} source={require('../assets/images/smsbg.png')}>
            <View style={styles.confirmForm}>
                <Text style={styles.comment}>{comment}</Text>
                <View style={styles.inputBack}>
                    <TextInput placeholder="Введите, пожалуйста, СМС-код" placeholderTextColor="#999"
                        onChangeText={sms => {this.confirmCodeChange(sms)}}/>
                </View>
                <View style={styles.button}>
                    <Button color={Colors.orange} title={"Продолжить"} onPress={() => {this.confirmSMS();}}/>
                </View>
            </View>
        </ImageBackground>)
    }
};

const styles = {
    container: {
        flex: 1,
    },
    confirmForm: {
        height: '100%',
        marginTop: 15,
        borderRadius: 25,
        backgroundColor: 'white',
    },
    comment: {
        fontSize: 15,
        margin: 35,

    },
    inputBack: {
        margin: 35,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.gray,
    },
    button: {
        backgroundColor: Colors.orange,
        margin: 35,
    }
};

export default ConfirmSMSScreen;