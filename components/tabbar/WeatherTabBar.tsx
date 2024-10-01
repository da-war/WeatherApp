import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

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
      <Text>WeatherTabBar</Text>
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
