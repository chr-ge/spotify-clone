import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { listAlbumCategorys } from "../src/graphql/queries";
import AlbumCategory from "../components/AlbumCategory";

export default function HomeScreen() {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data: any = await API.graphql(
          graphqlOperation(listAlbumCategorys)
        );
        setCategories(data.data.listAlbumCategorys.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlbumCategories();
  }, []);

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
      />
    </View>
  );
}
