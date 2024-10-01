import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import useApplicationDimensions from "../../../hooks/useApplicationDimensions";

import TrapezoidBackground from "./TrapezodBackground";
import CircleButton from "./CircleButton";

const TabbarItems = () => {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidHeight * 0.51) / 2;
  const buttonCenterX = width / 2 - circleRadius;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 36,
      }}
    >
      <Pressable>
        <MapIcon />
      </Pressable>

      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          top: 12,
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}
      >
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <Pressable>
        <ListIcon />
      </Pressable>
    </View>
  );
};

export default TabbarItems;

const styles = StyleSheet.create({});
