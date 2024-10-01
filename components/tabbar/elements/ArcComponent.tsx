import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  LinearGradient,
  Path,
  Rect,
  vec,
} from "@shopify/react-native-skia";

interface ArcComponentProps {
  width: number;
  height: number;
}

const ArcComponent = ({ height, width }: ArcComponentProps) => {
  const archPath = `M 0 0 Q ${width / 2} ${
    height / 2
  } ${width} 0 L ${width} ${height} L 0 ${height} Z`;

  const archBorder = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`;
  return (
    <Canvas style={{ height: height }}>
      <Path path={archPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={["rgba(58,58,106,0.26)", "rgba(37,36,76,01)"]}
        />
      </Path>
      <Path
        path={archPath}
        style={"stroke"}
        strokeWidth={0.5}
        color={"rgba(117,130,244,0.5)"}
      />
    </Canvas>
  );
};

export default ArcComponent;

const styles = StyleSheet.create({});
