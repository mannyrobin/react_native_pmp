import React from 'react';
import { View, Text, Animated, Easing, Image, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

class ChangePasswordScreen extends React.Component {
    static navigationOptions = {
        title: 'Создание пароля',
    };

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            repass: '',
            phone: props.navigation.getParam('phone'),
        }
    }

    componentDidMount() {
    }
    
    changePassword() {
        let { password, repass, phone } = this.state;
        alert(`Password: ${password}, Repass: ${repass}, Phone: ${phone}`);

        this.props.navigation.navigate('Login', {isLogin: true});
    }

    onPasswordChange = newData => {
        this.setState({password: newData});
    }

    onRepassChange = newData => {
        this.setState({repass: newData});
    }

    render() {
        return (<ImageBackground style={styles.container} source={require('../assets/images/smsbg.png')}>
            <View style={styles.confirmForm}>
                <Text style={styles.comment}>Создайте, пожалуйста, новый пароль.</Text>
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
                    <Button color={Colors.orange} title={"сохранить"} onPress={() => {this.changePassword();}}/>
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

export default ChangePasswordScreen;