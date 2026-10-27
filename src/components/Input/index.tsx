import { Text, TextInput, View } from "react-native";
import styles from "./index.style";
export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={3}
        defaultValue="0"
        placeholder="Type your temperature..."
      />
      <Text style={styles.unit}>°C</Text>
    </View>
  );
}
