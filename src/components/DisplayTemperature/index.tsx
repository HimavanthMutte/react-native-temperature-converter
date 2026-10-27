import { Text } from "react-native";

import styles from "./index.style";

type DisplayTemperatureProps = {
  temperature: string;
  unit: string;
};

export default function DisplayTemperature(props: DisplayTemperatureProps) {
  const { temperature, unit } = props;
  return (
    <Text style={styles.temperatureText}>
      {temperature} {unit}
    </Text>
  );
}
