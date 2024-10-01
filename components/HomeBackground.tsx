import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

const HomeBackground = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("../assets/home/Background.png")}
        resizeMode="cover"
        style={{
          height: "100%",
        }}
      >
        <Image
          source={require("../assets/home/House.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            ...StyleSheet.absoluteFillObject,
            top: "36%",
          }}
        />
      </ImageBackground>
    </>
  );
};

export default HomeBackground;

const styles = StyleSheet.create({});
