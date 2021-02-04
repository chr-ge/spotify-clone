export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Album: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artistHeadline: string;
}
