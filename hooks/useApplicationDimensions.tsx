import {
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const useApplicationDimensions = () => {
  const { width, height, scale, fontScale } = useWindowDimensions();
  return {
    width,
    height: height + (StatusBar.currentHeight || 0),
    scale,
    fontScale,
  };
};

export default useApplicationDimensions;

const styles = StyleSheet.create({});
