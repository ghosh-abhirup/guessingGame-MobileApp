import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryBtn from "../components/UI/PrimaryBtn";

let minBoundary = 1;
let maxBoundary = 100;

const generateRandom = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    return generateRandom(min, max, exclude);
  }
  return num;
};

const GameScreen = ({ chosenNum }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(minBoundary, maxBoundary, chosenNum)
  );

  const nextGuessHandler = (command) => {
    if (
      (command == "higher" && currentGuess > chosenNum) ||
      (command == "lower" && currentGuess < chosenNum)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong", [
        { text: "Close", style: "cancel" },
      ]);
      return;
    }

    if (command === "higher") {
      minBoundary = currentGuess + 1;
    } else {
      maxBoundary = currentGuess;
    }

    const newGuess = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryBtn>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryBtn>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 20,
  },
});
