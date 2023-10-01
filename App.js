import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNum, setUserNum] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const startGameHandler = (pickedNum) => {
    setUserNum(pickedNum);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootBg}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMethod="auto"
        style={styles.rootBg}
        imageStyle={styles.bgImg}
      >
        <SafeAreaView style={styles.rootBg}>
          {isGameOver ? (
            <GameOverScreen />
          ) : userNum ? (
            <GameScreen
              chosenNum={userNum}
              gameOver={() => setIsGameOver(true)}
            />
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
