import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";

export default function App() {
  const [userNum, setUserNum] = useState(null);

  const startGameHandler = (pickedNum) => {
    setUserNum(pickedNum);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootBg}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMethod="auto"
        style={styles.rootBg}
        imageStyle={styles.bgImg}
      >
        <SafeAreaView style={styles.rootBg}>
          {userNum ? (
            <GameScreen chosenNum={userNum} />
          ) : (
            <StartGameScreen onStart={startGameHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootBg: {
    flex: 1,
  },
  bgImg: {
    opacity: 0.25,
  },
});
