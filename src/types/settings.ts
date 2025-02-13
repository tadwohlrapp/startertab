import { Booking, FavoriteLink, RSSFeed, TodoObject } from "@/types/tiles";
import { Layouts } from "react-grid-layout";

export type Option = {
  title: string;
  subTitle: string;
  localStorageId: string;
  optionType: OptionType;
};

export type OptionType =
  | "ColorPicker"
  | "SubRedditPicker"
  | "MediumTileTypePicker"
  | "DropShadowInput"
  | "LargeTileTypePicker"
  | "SmallTileTypePicker"
  | "LongTileTypePicker"
  | "BorderRadiusInput"
  | "BorderSelect"
  | "SmallStockInput"
  | "GridGapInput"
  | "RandomizeColors"
  | "LargeStockTile"
  | "CityInputForWeather"
  | "HackerNewsFeedType"
  | "SpotifyTopArtistsTimeLength"
  | "CityInputForUV"
  | "TitleForFavorites"
  | "TitleForRSSFeed";

export const TileTypes = [
  "Reddit Feed",
  "Hacker News Feed",
  "Strava Graph",
  "Search Bar",
  "Bonsai",
  "Small Weather Tile",
  "Large Weather Tile",
  "UV Graph",
  "Day Planner",
  "Theme Picker",
  "Small Spotify Tile",
  "Time",
  "Twitter Feed Tile",
  "Markdown File Tile",
  "Todo List",
  "Large Spotify Tile",
  "Small Stock Tile",
  "Large Stock Tile",
  "Spotify Top Artist Tile",
  "Blank Tile",
  "Favorite Links Tile",
  "RSS Feed Tile",
  "Outlook Meetings Tile",
  "Google Meetings Tile",
  "None",
] as const;

export type TileType = typeof TileTypes[number];

export type TileSettingsKey = keyof TileSettings;

export type TileSize = "small" | "large" | "medium" | "long";

export type TileSettings = {
  backgroundColor: string;
  bonsaiBaseColor?: string;
  bonsaiTrunkColor?: string;
  borderColor?: string;
  borderRadius?: string;
  bookings?: Booking[];
  cityForUv?: string;
  cityForWeather?: string;
  dropShadow?: string;
  favoriteLinks?: FavoriteLink[];
  favoriteLinksTitle?: string;
  globalTileTextColor?: string;
  globalTileBackgroundColor?: string;
  gridGap?: string;
  hackerNewsFeedType?: string;
  markdownFileText?: string;
  rssFeeds?: RSSFeed[];
  rssFeedTitle?: string;
  sidebarBackgroundColor?: string;
  sidebarBorderColor?: string;
  spotifyArtistSearchTimeLength?: string;
  stockName?: string;
  stravaToken?: string;
  subReddit?: string;
  subRedditSortType?: string;
  subTextColor?: string;
  tempDisplayInCelsius?: string;
  themePickerBubbleColor?: string;
  tileBorder?: string;
  tileId: number;
  tileType: TileType;
  tileSize: TileSize;
  textColor: string;
  todoList?: TodoObject[];
  twitterFeedURL?: string;
};

export type ThemeSettings = {
  downloadedFromMarketplace: boolean;
  globalSettings: TileSettings;
  themeName: string;
  tileLayout: Layouts;
  tiles: TileSettings[];
};

export type UserSettings = {
  themes: ThemeSettings[];
};
