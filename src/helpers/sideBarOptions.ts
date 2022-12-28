import { Option } from "@/types";

export const globalSettingsOptions: Option[] = [
  {
    title: "Background color",
    subTitle: "Controls the theme background color of the main page",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: -1,
  },
  {
    title: "Drop shadow",
    subTitle: "Controls the drop shadow of all the tiles.",
    localStorageId: "dropShadow",
    optionType: "DropShadowInput",
    tileId: -1,
  },
  {
    title: "Border",
    subTitle: "Controls the border of all the tiles.",
    localStorageId: "tileBorder",
    optionType: "BorderSelect",
    tileId: -1,
  },
  {
    title: "Border Radius",
    subTitle: "Controls the border radius of all the tiles",
    localStorageId: "borderRadius",
    optionType: "BorderRadiusInput",
    tileId: -1,
  },
  {
    title: "Border Color",
    subTitle: "Controls the color of the border for all of the tiles",
    localStorageId: "borderColor",
    optionType: "ColorPicker",
    tileId: -1,
  },
  {
    title: "Grid Gap",
    subTitle: "Controls the grip gap of all the tiles",
    localStorageId: "gridGap",
    optionType: "GridGapInput",
    tileId: -1,
  },
  {
    title: "Reset All and Randomize Buttons",
    subTitle: "Won't be display don't worry about it",
    localStorageId: "null",
    optionType: "RandomizeColors",
    tileId: -1,
  },
];

export const sideBarOptions: Option[] = [
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 0,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 0,
  },
  {
    title: "Bonsai base color",
    subTitle: "Color of the bonsai base",
    localStorageId: "bonsaiBaseColor",
    optionType: "ColorPicker",
    tileId: 0,
  },
  {
    title: "Bonsai trunk color",
    subTitle: "Color of the bonsai trunk",
    localStorageId: "bonsaiTrunkColor",
    optionType: "ColorPicker",
    tileId: 0,
  },
  {
    title: "Reddit feed subreddit",
    subTitle: "Subreddit you want to see the posts from",
    localStorageId: "subReddit",
    optionType: "SubRedditPicker",
    tileId: 0,
  },
  {
    title: "Hacker News Feed Type",
    subTitle: "What type of feed do you want to see from Hacker News?",
    localStorageId: "hackerNewsFeedType",
    optionType: "HackerNewsFeedType",
    tileId: 0,
  },
  {
    title: "Spotify Top Artists Time Length",
    subTitle: "How long back do you want to search over?",
    localStorageId: "spotifyArtistSearchTimeLength",
    optionType: "SpotifyTopArtistsTimeLength",
    tileId: 0,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "MediumTileTypePicker",
    tileId: 0,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 1,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 1,
  },
  {
    title: "City for UV data",
    subTitle: "Name of the city you want the UV data for",
    localStorageId: "cityForUv",
    optionType: "CityInputForUV",
    tileId: 1,
  },
  {
    title: "City for weather forecast",
    subTitle: "Name of the city you want the weather forecast for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 1,
  },
  {
    title: "Type of tile",
    subTitle: "Type of tile you want to display",
    localStorageId: "tileType",
    optionType: "LargeTileTypePicker",
    tileId: 1,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 2,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 2,
  },
  {
    title: "Bonsai base color",
    subTitle: "Color of the bonsai base",
    localStorageId: "bonsaiBaseColor",
    optionType: "ColorPicker",
    tileId: 2,
  },
  {
    title: "Bonsai trunk color",
    subTitle: "Color of the bonsai trunk",
    localStorageId: "bonsaiTrunkColor",
    optionType: "ColorPicker",
    tileId: 2,
  },
  {
    title: "Reddit feed subreddit",
    subTitle: "Subreddit you want to see the posts from",
    localStorageId: "subReddit",
    optionType: "SubRedditPicker",
    tileId: 2,
  },
  {
    title: "Hacker News Feed Type",
    subTitle: "What type of feed do you want to see from Hacker News?",
    localStorageId: "hackerNewsFeedType",
    optionType: "HackerNewsFeedType",
    tileId: 2,
  },
  {
    title: "Spotify Top Artists Time Length",
    subTitle: "How long back do you want to search over?",
    localStorageId: "spotifyArtistSearchTimeLength",
    optionType: "SpotifyTopArtistsTimeLength",
    tileId: 2,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "MediumTileTypePicker",
    tileId: 2,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 3,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 3,
  },
  {
    title: "Bonsai base color",
    subTitle: "Color of the bonsai base",
    localStorageId: "bonsaiBaseColor",
    optionType: "ColorPicker",
    tileId: 3,
  },
  {
    title: "Bonsai trunk color",
    subTitle: "Color of the bonsai trunk",
    localStorageId: "bonsaiTrunkColor",
    optionType: "ColorPicker",
    tileId: 3,
  },
  {
    title: "Reddit feed subreddit",
    subTitle: "Subreddit you want to see the posts from",
    localStorageId: "subReddit",
    optionType: "SubRedditPicker",
    tileId: 3,
  },
  {
    title: "Hacker News Feed Type",
    subTitle: "What type of feed do you want to see from Hacker News?",
    localStorageId: "hackerNewsFeedType",
    optionType: "HackerNewsFeedType",
    tileId: 3,
  },
  {
    title: "Spotify Top Artists Time Length",
    subTitle: "How long back do you want to search over?",
    localStorageId: "spotifyArtistSearchTimeLength",
    optionType: "SpotifyTopArtistsTimeLength",
    tileId: 3,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "MediumTileTypePicker",
    tileId: 3,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 4,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 4,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "LongTileTypePicker",
    tileId: 4,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 5,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 5,
  },
  {
    title: "Bonsai base color",
    subTitle: "Color of the bonsai base",
    localStorageId: "bonsaiBaseColor",
    optionType: "ColorPicker",
    tileId: 5,
  },
  {
    title: "Bonsai trunk color",
    subTitle: "Color of the bonsai trunk",
    localStorageId: "bonsaiTrunkColor",
    optionType: "ColorPicker",
    tileId: 5,
  },
  {
    title: "Reddit feed subreddit",
    subTitle: "Subreddit you want to see the posts from",
    localStorageId: "subReddit",
    optionType: "SubRedditPicker",
    tileId: 5,
  },
  {
    title: "Hacker News Feed Type",
    subTitle: "What type of feed do you want to see from Hacker News?",
    localStorageId: "hackerNewsFeedType",
    optionType: "HackerNewsFeedType",
    tileId: 5,
  },
  {
    title: "Spotify Top Artists Time Length",
    subTitle: "How long back do you want to search over?",
    localStorageId: "spotifyArtistSearchTimeLength",
    optionType: "SpotifyTopArtistsTimeLength",
    tileId: 5,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "MediumTileTypePicker",
    tileId: 5,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 6,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 6,
  },
  {
    title: "City for weather",
    subTitle: "Name of the city you want the weather for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 6,
  },
  {
    title: "Stock ticker",
    subTitle: "Ticker that you want to see the stock info for, in capitals",
    localStorageId: "stockName",
    optionType: "SmallStockInput",
    tileId: 6,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "SmallTileTypePicker",
    tileId: 6,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 7,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 7,
  },
  {
    title: "City for weather",
    subTitle: "Name of the city you want the weather for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 7,
  },
  {
    title: "Stock ticker",
    subTitle: "Ticker that you want to see the stock info for, in capitals",
    localStorageId: "stockName",
    optionType: "SmallStockInput",
    tileId: 7,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "SmallTileTypePicker",
    tileId: 7,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 8,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 8,
  },
  {
    title: "City for weather forecast",
    subTitle: "Name of the city you want the weather forecast for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 8,
  },
  {
    title: "City for UV data",
    subTitle: "Name of the city you want the UV data for",
    localStorageId: "cityForUv",
    optionType: "CityInputForUV",
    tileId: 8,
  },
  {
    title: "Type of tile",
    subTitle: "Type of tile you want to display",
    localStorageId: "tileType",
    optionType: "LargeTileTypePicker",
    tileId: 8,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 9,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 9,
  },
  {
    title: "City for weather",
    subTitle: "Name of the city you want the weather for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 9,
  },
  {
    title: "Stock ticker",
    subTitle: "Ticker that you want to see the stock info for, in capitals",
    localStorageId: "stockName",
    optionType: "SmallStockInput",
    tileId: 9,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "SmallTileTypePicker",
    tileId: 9,
  },
  {
    title: "Background color",
    subTitle: "Background color of the tile",
    localStorageId: "backgroundColor",
    optionType: "ColorPicker",
    tileId: 10,
  },
  {
    title: "Text color",
    subTitle: "Text color of the tile",
    localStorageId: "textColor",
    optionType: "ColorPicker",
    tileId: 10,
  },
  {
    title: "City for weather",
    subTitle: "Name of the city you want the weather for",
    localStorageId: "cityForWeather",
    optionType: "CityInputForWeather",
    tileId: 10,
  },
  {
    title: "Stock ticker",
    subTitle: "Ticker that you want to see the stock info for, in capitals",
    localStorageId: "stockName",
    optionType: "SmallStockInput",
    tileId: 10,
  },
  {
    title: "Type of tile",
    subTitle: "Choose what you want this tile to display",
    localStorageId: "tileType",
    optionType: "SmallTileTypePicker",
    tileId: 10,
  },
];
