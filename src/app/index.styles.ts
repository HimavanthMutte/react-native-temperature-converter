import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  workspace: {
    height: 400,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFill,
    width: undefined,
    height: undefined,
  },
});

export default styles;
