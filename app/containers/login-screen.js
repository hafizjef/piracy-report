import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, TextInput, Button } from 'react-native'
import styles from '../styles/index'

import { userLogin } from '../actions/auth'

let user = {
    email: '',
    password: ''
}

function userEmailListener(event) {
    user.email = event.text
}

function passwordListener(event) {
    user.password = event.text
}

function loginHandler() {
    if(user.email!==''){
        userLogin(user)
    }
}

const loginScreen = () => (
    <View>
        <Text>Useremail:</Text>
        <TextInput 
            style={styles.inputBoxes}
            underlineColorAndroid='transparent'
            onChangeText={(text) => userEmailListener({text})}
        />
        <TextInput 
            style={styles.inputBoxes}
            onChangeText={(text) => passwordListener({text})}
        />
        <Button
            onPress = {() => loginHandler()}
            title='Login'
        />
    </View>
);

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({userLogin: userLogin}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(loginScreen);