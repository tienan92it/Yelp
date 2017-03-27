/**
 * Created by AnTran on 3/25/17.
 */
import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import {Provider} from 'react-redux';
import reducers from './reducers/reducer';

import { createStore } from 'redux';
const store = createStore(reducers);

import Login from './layouts/login/Login.js'

const defaultRoute = {
    title: 'Login',
    component: Login
}

const Yelp = (props) => {
    return (
        <Provider store={store}>
            <Navigator
                initialRoute={defaultRoute}
                renderScene={(route, navigator) => {
                    return <route.component route={route} navigator={navigator}/>
                }}/>
        </Provider>
    )
}

export default Yelp