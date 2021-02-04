import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 49,
    backgroundColor: "#131313",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 75,
    justifyContent: "space-between",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 16,
  },
});

export default styles;
