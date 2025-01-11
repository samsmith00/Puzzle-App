import { SafeAreaView, Text } from 'react-native'
import React from 'react'
//import SafeAreaView from 'react-native-safe-area-context'

const Content = ({children}: {children: any}) => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10, paddingVertical: 3, marginLeft: 48}}>
      <Text>{children}</Text>
    </SafeAreaView>
  )
}

export default Content