import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Album } from "../../types";
import styles from "./styles";

const AlbumCard = ({ id, imageUri, artistHeadline }: Album) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("AlbumScreen", { id })}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.headline}>{artistHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumCard;
