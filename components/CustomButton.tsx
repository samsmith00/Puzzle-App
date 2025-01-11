import { View, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


interface CustomButtonProps {
    onPress: () => void;
    title: string; 
    textStyles?: StyleProp<TextStyle>;
    containerStyles?: StyleProp<ViewStyle>

}

const CustomButton = ({onPress, title="", textStyles = {}, containerStyles = {}}: CustomButtonProps) => {
  return (

     <TouchableOpacity 
     activeOpacity={0.7}
     style={[styles.button, containerStyles]}
     onPress={onPress}

     >

        <Text style={[styles.text, textStyles]}>{title}</Text>

    </TouchableOpacity>

  )
}


const styles = StyleSheet.create ({
    button: {
      backgroundColor: 'white',
      borderRadius: 12,
      minHeight: 62, 
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: -800
    },
    
    text: {
        fontWeight: '600', // 'font-semibold'
        fontSize: 18, // 'text-lg'
        color: 'white'
    },
});

export default CustomButton

