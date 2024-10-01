import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import HomeBackground from "@/components/HomeBackground";

import { StatusBar } from "expo-status-bar";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import WeatherInfo from "@/components/section/WeatherInfo";
import { currentWeather } from "@/data/CurrentWeather";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <WeatherTabBar />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
