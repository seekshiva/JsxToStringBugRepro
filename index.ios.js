/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import App from 'app/App'

class DesignGuidelines extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}>
        <View style={{
          paddingTop: 30,
          paddingBottom: 10,
          backgroundColor: 'orange',
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 17,
          }}>Design Guidelines</Text>
        </View>
        <View style={{
          flex: 1,
          // paddingTop: 40,
          backgroundColor: 'white'
        }}>
          <App />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('DesignGuidelines', () => DesignGuidelines);
