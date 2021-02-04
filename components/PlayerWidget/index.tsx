import React from "react";
import { View, Image, Text } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const song = {
  id: "1",
  imageUri:
    "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
  title: "Post Song",
  artist: "Post Malone",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color="white" />
          <FontAwesome5 name="play" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
