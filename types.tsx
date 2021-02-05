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
  name: string;
  creator: string;
  imageUri: string;
  likes: number;
  artistHeadline: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};
