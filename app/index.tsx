import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./home";
import BasicAnimation from "./BasicAnimation";

const index = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BasicAnimation />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
