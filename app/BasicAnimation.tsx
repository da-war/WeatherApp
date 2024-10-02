import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const BasicAnimation = () => {
  const Size = 200;
  const scale = useSharedValue(1);
  const borderRadius = useSharedValue(0);

  const squareCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    scale.value = withRepeat(withSpring(2), -1, true);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          { width: Size, height: Size, backgroundColor: "red" },
          squareCircleStyles,
        ]}
      ></Animated.View>
    </View>
  );
};

export default BasicAnimation;

const styles = StyleSheet.create({});
