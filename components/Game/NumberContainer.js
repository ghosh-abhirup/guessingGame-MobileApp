import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 10,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numText: {
    color: Colors.accent500,
    fontWeight: "bold",
    fontSize: 36,
  },
});
