import React from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

export default [
  {
    categoryName: 'Forms',
    description: '',
    components: [
      {
        name: 'Input',
        description: '',
        example: (
          <View>
            <TextInput style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }} />
          </View>
        )
      },
      {
        name: 'Input with defaultValue',
        description: '',
        example: (
          <View>
            <TextInput defaultValue="woah" style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }} />
          </View>
        )
      }
    ]
  },
  {
    categoryName: 'Images'
  },
  {
    categoryName: 'Text'
  },
  {
    categoryName: 'Table'
  },
  {
    categoryName: 'Progress Bars'
  },
  {
    categoryName: 'Hero'
  },
  {
    categoryName: 'Media Block'
  },
  {
    categoryName: 'Title'
  },
  {
    categoryName: 'Tout'
  },
  {
    categoryName: 'Media'
  },
  {
    categoryName: 'Carousel'
  },
]
