/**
 * Created by AnTran on 3/25/17.
 */
import React, { Component } from 'react';
import {
    View, Button
} from 'react-native';

import styles from './styles'
import Home from '../home/Home';

export default class Login extends Component {

    onClickLogin = (navigator) => {
        navigator.push({
            title: 'Home',
            component: Home
        })
    }

    render() {
        const {navigator} = this.props
        return (
            <View style={styles.container}>
                <Button style={styles.buttonLogin}
                        onPress={() => this.onClickLogin(navigator)}
                        title="Login"
                        color="#000"/>
            </View>
        );
    }
}