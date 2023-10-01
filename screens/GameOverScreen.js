import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../utils/colors";
import PrimaryBtn from "../components/UI/PrimaryBtn";

const GameOverScreen = ({ chosenNum, roundsNum, startNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imgParent}>
        <Image
          source={require("../assets/images/success.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text style={styles.summaryText}>
        You needed <Text style={styles.highlightText}>{roundsNum}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlightText}>{chosenNum}</Text>
      </Text>

      <PrimaryBtn onPress={startNewGame}>Start New Game</PrimaryBtn>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  imgParent: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 4,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 20,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
