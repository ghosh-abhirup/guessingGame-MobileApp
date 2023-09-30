import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

const PrimaryBtn = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={styles.innerContainer}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },

  btnText: {
    color: "white",
    textAlign: "center",
  },
});
