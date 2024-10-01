import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Forecast } from "@/models/Weather";
import { ScrollView } from "react-native-gesture-handler";
import ForecastCapsule from "./ForecastCapsule";

interface ForecastScrollProps {
  forecastArray: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
}

const ForecastScroll = ({
  forecastArray,
  capsuleHeight,
  capsuleRadius,
  capsuleWidth,
}: ForecastScrollProps) => {
  return (
    <View>
      <ScrollView
        horizontal
        style={{
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", padding: 16, gap: 12 }}>
          {forecastArray.map((forecast, index) => (
            <ForecastCapsule
              width={capsuleWidth}
              height={capsuleHeight}
              radius={capsuleRadius}
              forecast={forecast}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ForecastScroll;

const styles = StyleSheet.create({});
