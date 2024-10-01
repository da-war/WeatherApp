import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import ArcComponent from "./elements/ArcComponent";

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
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
