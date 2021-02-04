import React from "react";
import { View, Text, FlatList } from "react-native";
import { Album } from "../../types";
import AlbumCard from "../AlbumCard";
import styles from "./styles";

interface AlbumCategoryPropsInterface {
  title: string;
  albums: Album[];
}

const AlbumCategory = ({ title, albums }: AlbumCategoryPropsInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <AlbumCard
            id={item.id}
            imageUri={item.imageUri}
            likes={40}
            name="Post Malone"
            creator="George"
            artistHeadline={item.artistHeadline}
          />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default AlbumCategory;
