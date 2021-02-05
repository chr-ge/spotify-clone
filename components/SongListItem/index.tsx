import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useAppContext } from "../../contexts/AppContext";
import { Song } from "../../types";
import styles from "./styles";

const SongListItem = ({ id, title, artist, imageUri }: Song) => {
  const { setSongId } = useAppContext();

  return (
    <Pressable onPress={() => setSongId(id)}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SongListItem;
