import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Reset Button with Three-Color Green Gradient */}
      <LinearGradient
        colors={['#00C853', '#4CAF50', '#1B5E20']} // Green gradient with three colors
        style={styles.resetButton}
      >
        <TouchableOpacity style={styles.resetButtonTouchable}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
