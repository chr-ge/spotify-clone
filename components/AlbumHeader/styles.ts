import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 185,
    height: 185,
    margin: 15,
  },
  innerContainer: {
    flexDirection: "row",
    margin: 5,
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  creator: {
    color: "lightgray",
    fontSize: 16,
    margin: 5,
  },
  likes: {
    color: "lightgray",
    fontSize: 16,
    margin: 5,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 60,
    width: 175,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
