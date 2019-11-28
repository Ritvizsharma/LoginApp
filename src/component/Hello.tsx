import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Hello = ({ navigation }: Props) => {

    const [enthusiasmLevel, setenthusiasmLevel] = useState(navigation.state.params ? navigation.state.params.enthusiasmLevel || 1 : 1);
    const [username, setusername] = useState(navigation.state.params ? navigation.state.params.username || '' : '');


    function onIncrement() {
        setenthusiasmLevel(enthusiasmLevel + 1);
    }
    function onDecrement() {
        enthusiasmLevel > 0 ? setenthusiasmLevel(enthusiasmLevel - 1) : null;
    }
    function getExclamationMarks(numChars: number) {
       return Array(numChars + 1).join('!');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.greeting}>
                Hello{' '}
                {username +
                    getExclamationMarks(enthusiasmLevel)}
            </Text>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="-"
                        onPress={onDecrement}
                        accessibilityLabel="decrement"
                        color="red"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="+"
                        onPress={onIncrement}
                        accessibilityLabel="increment"
                        color="blue"
                    />
                </View>
            </View>
        </View>
    );
}

export default Hello;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
});