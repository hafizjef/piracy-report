import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleWare } from 'redux-logger'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import allReducers from './app/reducers/index'
import splash from './app/containers/splash'

const logger = createLogger({predicate: (getState, action) => __DEV__})
const store = createStore(
    allReducers,
    applyMiddleWare(thunk, logger)
)

const Main = () => (
    <Provider store={store}>
        <splash />
    </Provider>
)

AppRegistry.registerComponent('PiracyReport', () => Main);
