import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import HomeBackground from "@/components/HomeBackground";

import { StatusBar } from "expo-status-bar";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";

const index = () => {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style="light" />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
