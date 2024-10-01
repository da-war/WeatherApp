import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Forecast } from "@/models/Weather";

interface ForecastCapsuleProps {
  forecast: Forecast;
  width: number;
  height: number;
  radius: number;
}

const ForecastCapsule = ({
  forecast,
  width,
  height,
  radius,
}: ForecastCapsuleProps) => {
  return (
    <View>
      <Text>ForecastCapsule</Text>
    </View>
  );
};

export default ForecastCapsule;

const styles = StyleSheet.create({});
