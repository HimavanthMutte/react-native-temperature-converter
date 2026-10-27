import { TextInput, View } from "react-native";
import styles from "./index.style";
export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Type your temperature..." />
    </View>
  );
}
