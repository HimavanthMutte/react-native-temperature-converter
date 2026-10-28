import DisplayTemperature from "@/components/DisplayTemperature";
import Input from "@/components/Input";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotImage from "../../assets/hot.png";
import { convertTemperatureTo, getOpposite } from "../utils/temperature";
import styles from "./index.styles";
export default function App() {
  const [inputValue, changeInput] = useState("0");
  const [unit, changeUnit] = useState("°C");
  const oppositeUnit = getOpposite(unit);
  let temperature = convertTemperatureTo(+inputValue, oppositeUnit);
  if (Number.isNaN(temperature)) temperature = 0;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Image style={styles.background} source={hotImage} />
        <View style={styles.workspace}>
          <DisplayTemperature
            unit={oppositeUnit}
            temperature={temperature.toString()}
          />
          <Input unit={unit} default={inputValue} onChange={changeInput} />
          <Text>Convert to Celcius</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
