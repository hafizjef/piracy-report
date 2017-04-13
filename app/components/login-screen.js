import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from '../styles/index'

let user = {
    name: '',
    password: ''
}

function usernameListener(event) {
    user.name = event.text
}

function passwordListener(event) {
    user.password = event.text
}

function loginHandler() {
    if(user.name!==''){
        console.log('username:', user.name)
    }
}

const loginScreen = () => (
    <View>
        <Text>Username:</Text>
        <TextInput 
            style={styles.inputBoxes}
            underlineColorAndroid='transparent'
            onChangeText={(name) => {user = ({name})}}
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

export default loginScreen;