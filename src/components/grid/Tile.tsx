import { getCurrentTheme } from "@/helpers/settingsHelpers";
import styles from "@/styles/Home.module.css";
import {
  HackerNewsLinkHolder,
  StravaGraphData,
  TileId,
  UserSettings,
  UvGraphData,
} from "@/types";
import { GridItem, GridItemProps, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TileContainer from "@/components/grid/TileContainer";

interface TileProps extends GridItemProps {
  optionHovered: boolean;
  tileId: TileId;
  stravaData: StravaGraphData;
  uvData: UvGraphData[];
  hackerNewsData: HackerNewsLinkHolder[];
  inMemorySettings: UserSettings;
}

const Tile: React.FC<TileProps> = ({
  tileId,
  optionHovered,
  hackerNewsData,
  inMemorySettings,
  stravaData,
  uvData,
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const [shadow, setShadow] = useState<string | undefined>();
  const [border, setBorder] = useState<string | undefined>();
  const theme = getCurrentTheme(inMemorySettings, colorMode);

  useEffect(() => {
    setShadow(theme.globalSettings.dropShadow);
    setBorder(theme.globalSettings.tileBorder);
  }, [
    colorMode,
    inMemorySettings,
    theme.globalSettings.dropShadow,
    theme.globalSettings.tileBorder,
  ]);

  return (
    <GridItem
      borderRadius="15"
      transition=".3s ease-in-out"
      minW="230px"
      outline={optionHovered ? "2px solid white" : ""}
      shadow={shadow}
      border={border}
      style={optionHovered ? { transform: "scale(1.05)" } : {}}
      background={`var(--bg-color-${tileId})`}
      pos="relative"
      overflowY="scroll"
      className={styles.disableScrollbars}
      {...props}
    >
      <TileContainer
        tileId={tileId}
        hackerNewsData={hackerNewsData}
        stravaData={stravaData}
        uvData={uvData}
        city={theme[tileId].cityForWeather}
        stockName={theme[tileId].stockName}
        todoList={theme[tileId].todoList}
        tileType={theme[tileId].tileType}
        bonsaiBaseColor={theme[tileId].bonsaiBaseColor}
        bonsaiTrunkColor={theme[tileId].bonsaiTrunkColor}
      />
    </GridItem>
  );
};

export default React.memo(Tile);