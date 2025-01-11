import React, { useState, useEffect, useMemo } from "react";
import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";

// Helper function to shuffle the slices (image pieces)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Solved order for the 3x3 puzzle (this is the correct order)
const solvedOrder = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
];

export default function App() {
  const updateSlices = () => {
    setImageSlices(shuffleArray(solvedOrder));
    setIsSolved(false);
    setVictoryMessage(""); // Reset victory message
  }

  let [imageSlices, setImageSlices] = useState(shuffleArray(solvedOrder)); // The shuffled image slices (pieces)
  const [correctPositions, setCorrectPositions] = useState(solvedOrder); // Correct positions (solved state)
  const [isSolved, setIsSolved] = useState(false); // Track whether the puzzle is solved
  const [victoryMessage, setVictoryMessage] = useState("");

  const source = useMemo(() => require("@/assets/meditation-images/waterfall.webp"), []); // Image source

  // Shuffle the slices initially
  useEffect(() => {
    updateSlices();
  }, []); // This effect runs only once when the component mounts

  // Handle click on a piece and swap with the correct position
  const handlePieceClick = (clickedPosition) => {
    const clickedPieceIndex = imageSlices.findIndex(
      (slice) => slice.x === clickedPosition.x && slice.y === clickedPosition.y
    );

    const targetIndex = correctPositions.findIndex(
      (slice) => slice.x === clickedPosition.x && slice.y === clickedPosition.y
    );

    const newImageSlices = [...imageSlices];

    [newImageSlices[clickedPieceIndex], newImageSlices[targetIndex]] = [
      newImageSlices[targetIndex],
      newImageSlices[clickedPieceIndex],
    ];

    checkVictory(newImageSlices);
    setImageSlices(newImageSlices); // Update state to trigger re-render
  };

  const checkVictory = (slices) => {
    const isPuzzleSolved = slices.every((slice, index) => {
      return slice.x === solvedOrder[index].x && slice.y === solvedOrder[index].y;
    });

    if (isPuzzleSolved) {
      setIsSolved(true);
      setVictoryMessage("Congratulations! You've solved the puzzle!");
    } else {
      setIsSolved(false);
      setVictoryMessage("");
    }
  };

  // Display loading spinner until slices are available
  if (imageSlices.length === 0) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Get screen dimensions
  const { width, height } = Dimensions.get("window");
  const pieceSize = Math.min(width, height) / 3; // Piece size based on screen size
  const rows = 3;
  const cols = 3;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.puzzleContainer}>
        <View style={styles.grid}>
          {imageSlices.map((slice, index) => (
            <TouchableOpacity key={index} onPress={() => handlePieceClick(slice)}>
              <View style={styles.gridItem}>
                <ImageBackground
                  key={`${slice.x}-${slice.y}`}
                  source={source}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  imageStyle={{
                    width: pieceSize * cols,
                    height: pieceSize * rows,
                    top: -(slice.y * pieceSize),
                    left: -(slice.x * pieceSize),
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </View>

      {isSolved && <Text style={styles.victoryMessage}>{victoryMessage}</Text>}

      {/* Reset Button */}
      <View style={styles.resetButtonContainer}>
        <TouchableOpacity onPress={updateSlices} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  puzzleContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 0,
    marginTop: 150,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
  },
  gridItem: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc", 
    width: 128,
    height: 128,
    overflow: "hidden",
  },
  victoryMessage: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    position: "absolute",
    top: 40,
    left: "50%",
    transform: [{ translateX: -180 }],
  },
  resetButtonContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});


