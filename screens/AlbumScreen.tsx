import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";

import AlbumHeader from "../components/AlbumHeader";
import SongListItem from "../components/SongListItem";
import { getAlbum } from "../src/graphql/queries";
import { Album } from "../types";

const AlbumScreen = () => {
  const route: any = useRoute();
  const [album, setAlbum] = useState<(Album & { songs: any }) | null>(null);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const data: any = await API.graphql(
          graphqlOperation(getAlbum, { id: route.params.id })
        );
        setAlbum(data.data.getAlbum);
      } catch (err) {
        console.log(err);
      }
    };

    getAlbums();
  }, []);

  if (!album) return <Text style={{ color: "white" }}>Loading...</Text>;

  return (
    <View>
      <FlatList
        data={album.songs.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SongListItem
            id={item.id}
            title={item.title}
            artist={item.artist}
            imageUri={item.imageUri}
            uri={item.uri}
          />
        )}
        ListHeaderComponent={
          <AlbumHeader
            id={album.id}
            imageUri={album.imageUri}
            creator={album.creator}
            name={album.name}
            artistHeadline={album.artistHeadline}
            likes={album.likes}
          />
        }
      />
    </View>
  );
};

export default AlbumScreen;
