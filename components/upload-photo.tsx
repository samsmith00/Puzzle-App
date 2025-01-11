import { View, Text, StatusBar, FlatList } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

const uploadPhoto = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={["#19547b",  "#4ca1af",  "#ffd89b"]}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Upload a photo</Text>
        </View>
      </AppGradient>
      <View>
        {/* Need to make some puzzle objects before putting them in the FlatList  */}
        {/* <FlatList></FlatList> */}
      </View>
    </View>
  );
};

export default uploadPhoto;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
});
