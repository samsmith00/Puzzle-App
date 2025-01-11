import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import meditationImages from "@/constants/meditation-images"
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import  backgroundImage  from "@/assets/logo-images/waves.gif"





const App = () => {
  const router = useRouter();
  
  // useEffect(() => {
  //   StatusBar.setBarStyle('light-content')
  // })
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}> 
       <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.imageBackground}
        />
        <StatusBar backgroundColor="white" barStyle="light-content" />
        {/* <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}> */}
          <SafeAreaView style={styles.safeArea}>
            <View>
              <Text style={styles.title}>Puzzle App</Text>
            </View>
            <View>
              <Text style={styles.subheader}>
                Calm Your Mind, One Puzzle at a Time
              </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <CustomButton
                onPress={() => router.push("/choose-puzzle")}
                title="Start Playing"
                containerStyles={styles.buttonContainerStyle}
                textStyles={{ color: "white", fontSize: 15 }}
              />
            </View>
          </SafeAreaView>
        {/* </AppGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  subheader: {
    textAlign: "center",
    color: "white",
    fontWeight: "light",
    fontSize: 18,
    marginTop: -355,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },  
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainerStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
});

export default App;
