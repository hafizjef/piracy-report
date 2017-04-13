import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

class Splash extends React.Component {
    static navigationOptions = {
        title: 'Splash Screen'
    }
    render() {
        if (!this.prop.user) {
            return (
                <View>
                    <Text>No user login</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>{this.props.user.email}</Text>
                </View>
            )
        }
    }
}

const SplashScreen = StackNavigator({
  Splash: { screen: Splash },
});

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(SplashScreen);