import ConvertButton from "@/components/ConvertButton";
import DisplayTemperature from "@/components/DisplayTemperature";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import coldImage from "../../assets/cold.png";
import hotImage from "../../assets/hot.png";
import {
  convertTemperatureTo,
  getOpposite,
  isColdTemperature,
} from "../utils/temperature";
import styles from "./index.styles";

export default function App() {
  const [inputValue, changeInput] = useState("0");
  const [unit, changeUnit] = useState("°C");
  const [currentBackground, setBackground] = useState(coldImage);

  const oppositeUnit = getOpposite(unit);

  let temperature = convertTemperatureTo(+inputValue, oppositeUnit);
  if (Number.isNaN(temperature)) temperature = 0;

  useEffect(() => {
    if (isColdTemperature(temperature, unit)) {
      setBackground(coldImage);
    } else {
      setBackground(hotImage);
    }
  }, [inputValue, unit]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Image style={styles.background} source={currentBackground} />
        <View style={styles.workspace}>
          <DisplayTemperature
            unit={oppositeUnit}
            temperature={temperature.toFixed(1).toString()}
          />
          <Input unit={unit} default={inputValue} onChange={changeInput} />
          <ConvertButton onPress={() => changeUnit(oppositeUnit)} unit={unit} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
