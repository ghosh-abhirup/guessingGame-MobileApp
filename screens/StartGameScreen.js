import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Colors from "../utils/colors";

const StartGameScreen = ({ onStart }) => {
  const [enteredNum, setEnteredNum] = useState("");

  const confirmInput = () => {
    const chosenNum = parseInt(enteredNum);

    if (isNaN(chosenNum) || chosenNum > 99 || chosenNum <= 0) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: () => setEnteredNum("") }]
      );
      return;
    }

    console.log("Valid number");
    onStart(enteredNum);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inpElement}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNum}
        onChangeText={(num) => setEnteredNum(num)}
      />

      <View style={styles.btnContainer}>
        <View style={{ flex: 1 }}>
          <PrimaryBtn>Reset</PrimaryBtn>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryBtn onPress={confirmInput}>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },

  inpElement: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
});
