import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScaledSize,
} from "react-native";
import React from "react";
import {
  Canvas,
  Extrapolate,
  Line,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const HomeBackground = () => {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const myStyles = styles(dimensions);
  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;

  const animatedPosition = useForecastSheetPosition();

  const AnimatedImageBack = Animated.createAnimatedComponent(ImageBackground);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);

  const lftBgColor = useSharedValue("#2E335A");
  const rtBgColor = useSharedValue("#1C1B33");

  const animatedImageStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -height],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedCanvasSmokeStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedPosition.value,
        [0, 0.1],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  useAnimatedReaction(
    () => {
      return animatedPosition;
    },
    (cv) => {
      console.log("sdfsd", cv.value);
    }
  );
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Canvas style={[{ ...StyleSheet.absoluteFillObject }]}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <AnimatedImageBack
        source={require("../assets/home/Background.png")}
        resizeMode="cover"
        style={[
          {
            height: "100%",
          },
          animatedImageStyles,
        ]}
      >
        <AnimatedCanvas
          style={[
            {
              height: smokeHeight,
              ...StyleSheet.absoluteFillObject,
              top: smokeOffsetY,
            },
            animatedCanvasSmokeStyles,
          ]}
        >
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58, 63, 84, 0)", "rgba(58, 63, 84, 1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </AnimatedCanvas>
        <Image
          source={require("../assets/home/House.png")}
          resizeMode="cover"
          style={myStyles.image}
        />
      </AnimatedImageBack>
    </View>
  );
};

export default HomeBackground;

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    image: {
      width: width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
