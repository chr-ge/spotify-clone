import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 49,
    backgroundColor: "#131313",
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "black",
  },
  progress: {
    height: 3,
    backgroundColor: '#BCBCBC'
  },
  row: {
    flexDirection: "row",
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
    width: 70,
    height: 70,
    marginRight: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 14,
  },
});

export default styles;
