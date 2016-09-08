import React, { Component } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import guidelines from '../guidelines'


export default class App extends Component {
  render() {
    console.log(reactElementToJSXString(guidelines[0].components[0].example))
    return (
      <View style={{ flex: 1 }}>
        <Text>hi... testing... woah! does this work?</Text>
        <ScrollView style={{ flex: 1 }}>
          {guidelines.map(category => (
            <View key={ category.categoryName } style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'orange',
            }}>
              <Text>{category.categoryName}</Text>
              {
                category.components && category.components.map(component => (
                  <View key={ component.name }>
                    <Text>{component.name}</Text>
                    {component.example}
                    <Text style={{
                      backgroundColor: '#f9f9f9',
                      padding: 10
                    }}>
                      {reactElementToJSXString(component.example)}
                    </Text>
                  </View>
                ))
              }
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
