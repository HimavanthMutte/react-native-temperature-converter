import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./index.styles";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.workspace}>
          <Text>Temperature Converter</Text>
          <Text>Input</Text>
          <Text>Convert to Celcius</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
