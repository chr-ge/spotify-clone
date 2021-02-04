import React, { useState, useEffect } from "react";
import { View, Image, Text, Pressable  } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio/Sound";
import styles from "./styles";

const song = {
  id: "1",
  uri: "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
  imageUri: "https://i.pinimg.com/736x/d4/66/18/d46618c066d144acc4a82fec6a4c8275.jpg",
  title: "notJust Dev Beats",
  artist: "Vadim",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis)
    setPosition(status.positionMillis)
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if(!sound || !duration || !position) return 0

    return (position / duration) * 100
  }

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
