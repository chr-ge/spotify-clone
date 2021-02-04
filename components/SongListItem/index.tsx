import React from "react";
import { View, Image, Text } from "react-native";
import { Song } from "../../types";
import styles from "./styles";

const SongListItem = ({ id, title, artist, imageUri }: Song) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>   
      </View>
    </View>
  );
};

export default SongListItem;
