import { Text, TouchableOpacity, View } from "react-native";
import styles from "./index.styles";

type ConvertButtonProps = {
  unit: string;
  onPress: () => void;
};

export default function ConvertButton(props: ConvertButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>Convert to {props.unit}</Text>
      </TouchableOpacity>
    </View>
  );
}
