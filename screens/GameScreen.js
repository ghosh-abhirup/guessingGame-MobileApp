import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Card from "../components/UI/Card";
import Colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

let minBoundary = 1;
let maxBoundary = 100;

const generateRandom = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    return generateRandom(min, max, exclude);
  }
  return num;
};

const GameScreen = ({ chosenNum, gameOver, increaseRounds }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, chosenNum)
  );

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

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

    increaseRounds();
    const newGuess = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    if (currentGuess == chosenNum) {
      gameOver();
    }
  }, [currentGuess, chosenNum, gameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.cardTitle}>Higher or Lower?</Text>
        <View style={{ flexDirection: "row", gap: 4, marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryBtn>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryBtn>
          </View>
        </View>
      </Card>
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
  cardTitle: {
    color: Colors.accent500,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "open-sans",
  },
});
