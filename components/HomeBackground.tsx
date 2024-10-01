import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

const HomeBackground = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={["#2E335A", "#1C1B33"]}
        />
      </Rect>
    </Canvas>
  );
};

export default HomeBackground;

const styles = StyleSheet.create({});
