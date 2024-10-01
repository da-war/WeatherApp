import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

const index = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={10} y={10} width={100} height={100}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(200, 200)}
          colors={["red", "green", "cyan"]}
        />
      </Rect>
    </Canvas>
  );
};

export default index;

const styles = StyleSheet.create({});
