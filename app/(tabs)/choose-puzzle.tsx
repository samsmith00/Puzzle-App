import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import React, { useEffect } from "react";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import  backgroundImage  from "@/assets/logo-images/waves.gif"

interface Puzzle {
  id: string;
  title: string;
  route: string;
}

const choose_puzzle = () => {
  const router = useRouter(); // Initialize the router here

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  const puzzles: Puzzle[] = [
    { id: "1", title: "Puzzle One", route: "/puzzleOne" },
    { id: "2", title: "Puzzle Two", route: "/puzzleTwo" },
    { id: "3", title: "Puzzle Three", route: "/puzzleThree" },
    { id: "4", title: "Puzzle Four", route: "/puzzleFour" },
    { id: "5", title: "Puzzle Five", route: "/puzzleFive" },
  ];

  const renderItem = ({ item }: { item: Puzzle }) => {
    return (
      <TouchableOpacity
        style={styles.buttonContainerStyle}
        onPress={() => router.push(item.route as Href)} // Use the router object here
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
        <Text style={styles.title}>Choose A Puzzle</Text>
        <FlatList
          data={puzzles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default choose_puzzle;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },  
  buttonContainerStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
