import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

const AlbumHeader = ({ name, creator, imageUri, likes }: Album) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.creator}>By {creator}</Text>
        <Text style={styles.likes}>{likes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
