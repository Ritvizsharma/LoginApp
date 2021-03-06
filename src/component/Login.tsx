import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const Login = ({ navigation }: Props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorBox, setShowErrorBox] = useState(false);


    function onLogin() {
        if (username === 'ritviz@gmail.com' && password === '123456') {
            setShowErrorBox(false);
            navigation.navigate('HelloScreen', {
                name: 'Amused',
                enthusiasmLevel: 4,
                username,
            });
        } else {
            setShowErrorBox(true);
        }
    }

    const errorText = 'Either username or password is incorrect'
    return (
        <SafeAreaView>
            <KeyboardAvoidingView style={styles.root}>
                <View style={styles.loginView}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </View>
                <TextInput style={styles.usernameView} onChangeText={(username) => setUsername(username)} value={username} />
                <TextInput style={styles.passwordView} onChangeText={(password) => setPassword(password)} value={password} />
                <TouchableOpacity style={styles.loginButtonView} onPress={() => onLogin()}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                {showErrorBox ? <View style={styles.errorView}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View> : null}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    loginView: {
        alignItems: 'center'
    },
    loginText: {
        fontSize: 24,
        color: '#343423',
        textAlign: 'center'
    },
    usernameView: {
        height: 50,
        width: 300,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#343434',
        textAlign: 'center'
    },
    passwordView: {
        height: 50,
        width: 300,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#343434',
        textAlign: 'center'
    },
    loginButtonView: {
        height: 50,
        width: 300,
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: '#343423',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    errorView: {
        marginTop: 20,
        alignItems: 'center'
    },
    errorText: {
        color: 'red'
    }
});