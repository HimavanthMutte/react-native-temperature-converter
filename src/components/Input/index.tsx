import { Text, TextInput, View } from "react-native";
import styles from "./index.style";

type InputProps = {
  default: string;
  unit: string;
  onChange: (text: string) => void;
};

export default function Input(props: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={3}
        defaultValue={props.default}
        placeholder="Type your temperature..."
        onChangeText={(text) => props.onChange(text)}
      />
      <Text style={styles.unit}>{props.unit}</Text>
    </View>
  );
}
