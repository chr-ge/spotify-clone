import React, { useState, useEffect } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio/Sound";
import { getSong } from "../../src/graphql/queries";
import { useAppContext } from "../../contexts/AppContext";
import { Song } from "../../types";
import styles from "./styles";

const PlayerWidget = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const { songId } = useAppContext();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data: any = await API.graphql(
          graphqlOperation(getSong, { id: songId })
        );
        setSong(data.data.getSong);
      } catch (err) {
        console.log(err);
      }
    };

    if(songId) fetchSong();
  }, [songId]);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song!.uri },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    if (song) playCurrentSong();
  }, [song]);

  const onPlayPausePress = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (!sound || !duration || !position) return 0;

    return (position / duration) * 100;
  };

  if(!song) return null

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color="white" />
            <Pressable onPress={onPlayPausePress} android_disableSound>
              <FontAwesome5
                name={isPlaying ? "pause" : "play"}
                size={30}
                color="white"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
