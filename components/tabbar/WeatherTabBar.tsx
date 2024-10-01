import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";

const WeatherTabBar = () => {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponent width={width} height={TabBarHeight} />
      <TabBarItems />
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
