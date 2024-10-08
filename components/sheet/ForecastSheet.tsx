import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "./ForecastSheetBackground";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import ForecastScroll from "../forecast/ForecastScroll";
import { hourly, weekly } from "@/data/ForecastData";
import { ForecastType } from "@/models/Weather";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import WindWidget from "../forecast/widgets/WindWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";
import { useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import { useForecastSheetPosition } from "@/context/ForecastSheetContext";

const ForecastSheet = () => {
  const snapPoints = ["38.5%", "83%"];

  const currentPosition = useSharedValue(0);

  const { width, height } = useApplicationDimensions();
  const smallWidgetSize = width / 2 - 20;
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const secondSnapPoint = height * (parseFloat(snapPoints[1]) / 100);
  const minY = height - secondSnapPoint;
  const maxY = height - firstSnapPoint;
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;

  const [selectedForecast, setSelectedForecast] = React.useState<ForecastType>(
    ForecastType.Hourly
  );

  const animatedPosition = useForecastSheetPosition();

  // Calculate normalized position (0 to 1)
  const normalizedPosition = (position: number) => {
    "worklet";
    return (position - maxY) / (minY - maxY);
  };

  // Animate and normalize the current position
  useAnimatedReaction(
    () => {
      return currentPosition.value;
    }, // Track the current position of the BottomSheet
    (cv) => {
      // Normalize the position and log the value
      const normalizedValue = normalizedPosition(cv);
      if (normalizedValue === -0) {
        console.log("Normalized Position:", 0);
      } else {
        console.log("Normalized Position:", normalizedValue);
        animatedPosition.value = normalizedValue;
      }
    }
  );

  return (
    <BottomSheet
      snapPoints={snapPoints}
      animatedPosition={currentPosition}
      animateOnMount={false}
      style={{
        flex: 1,
      }}
      handleIndicatorStyle={{
        backgroundColor: "rgba(0,0,0,0.3)",
        width: 48,
        height: 5,
        borderRadius: 3,
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl onPress={(type) => setSelectedForecast(type)} />
        <Separator width={width} height={3} />
        <BottomSheetScrollView
          style={{ flex: 1, paddingBottom: 200 }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <ForecastScroll
            capsuleWidth={capsuleWidth}
            capsuleHeight={capsuleHeight}
            capsuleRadius={capsuleRadius}
            forecastArray={
              selectedForecast === ForecastType.Hourly ? hourly : weekly
            }
          />
          <View
            style={{
              flex: 1,
              paddingTop: 30,
              paddingBottom: 50,
            }}
          >
            <AirQualityWidget width={width - 30} height={150} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 15,
                gap: 10,
              }}
            >
              <UvIndexWidget width={smallWidgetSize} height={smallWidgetSize} />
              <WindWidget width={smallWidgetSize} height={smallWidgetSize} />
              <SunriseWidget width={smallWidgetSize} height={smallWidgetSize} />
              <RainFallWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <FeelsLikeWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <HumidityWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <VisibilityWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <PressureWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
            </View>
          </View>
        </BottomSheetScrollView>
      </>
    </BottomSheet>
  );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
