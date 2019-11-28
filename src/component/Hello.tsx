import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

export interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    enthusiasmLevel: number;
    username: string;
}

export default class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            enthusiasmLevel: this.props.navigation.state.params ? this.props.navigation.state.params.enthusiasmLevel || 1 : 1,
            username: this.props.navigation.state.params? this.props.navigation.state.params.username || '' : '',
        }; 
    }

    onIncrement = () =>
        this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
    onDecrement = () => {
        const { enthusiasmLevel } = this.state;
        enthusiasmLevel > 0 ?
            this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 }) : null;
    }
    getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

    render() {
        const { enthusiasmLevel, username } = this.state;
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Hello{' '}
                    {username +
                        this.getExclamationMarks(enthusiasmLevel)}
                </Text>

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="-"
                            onPress={this.onDecrement}
                            accessibilityLabel="decrement"
                            color="red"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="+"
                            onPress={this.onIncrement}
                            accessibilityLabel="increment"
                            color="blue"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

// styles
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