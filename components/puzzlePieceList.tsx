import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import AppGradient from './AppGradient'

const puzzlePieceList = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <AppGradient colors={["#5C3D2E", "#3E2A1F", "#4B3621"]}>
            <View style={style.bottomView}>
            
            </View>
        </AppGradient>
    </SafeAreaView>
  )
}

export default puzzlePieceList

const style = StyleSheet.create({
    bottomView: {
        position: "absolute",
        bottom: 60, 
        padding: 10,
        alignItems: "center"

    },
})