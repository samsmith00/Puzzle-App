import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'

// children just the content we put in it 
const AppGradient = ({ children, colors}: {children: any, colors: string[]}) => {
  return (
    <LinearGradient colors={colors} style={{flex: 1, }}>
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({
  content: {
    flex: 1, // Ensures content fills available space
  },
});