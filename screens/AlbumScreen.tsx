import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import AlbumHeader from "../components/AlbumHeader";
import SongListItem from "../components/SongListItem";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {}, []);

  return (
    <View>
      <FlatList
        data={[
          {
            id: "1",
            title: "Good Song",
            artist: "Mark",
            imageUri:
              "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
          },
          {
            id: "2",
            title: "Better Song",
            artist: "Mark Cuban",
            imageUri:
              "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
          },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SongListItem
            id={item.id}
            title={item.title}
            artist={item.artist}
            imageUri={item.imageUri}
          />
        )}
        ListHeaderComponent={
          <AlbumHeader
            id="1"
            imageUri="https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg"
            creator="George"
            name="Post Malone"
            artistHeadline="Post Malone"
            likes={40}
          />
        }
      />
    </View>
  );
};

export default AlbumScreen;
