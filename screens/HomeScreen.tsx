import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AlbumCategory from "../components/AlbumCategory";

const ALBUMS = [
  {
    id: "1",
    imageUri: "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
    artistHeadline: "Post Malone",
  },
  {
    id: "2",
    imageUri: "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
    artistHeadline: "Post Malone 2",
  },
  {
    id: "3",
    imageUri: "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
    artistHeadline: "Post Malone 3",
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={ALBUMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AlbumCategory title='Chill' albums={ALBUMS} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
