import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Forecast, ForecastType } from "@/models/Weather";
import { Canvas, RoundedRect, Shadow } from "@shopify/react-native-skia";
import { DEGREE_SYMBOL } from "@/utils/Constants";
import { convertTo12hrFormat, getDayOfWeek } from "@/utils/dateHelper";

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
  const { date, icon, probability, temperature, type } = forecast;

  const timeDateOpacityDisplay = (): [string, number] => {
    let opacity = 0;
    let timeOrDate = "";
    if (type === ForecastType.Hourly) {
      timeOrDate = convertTo12hrFormat(date);
      opacity = timeOrDate.toLowerCase() === "now" ? 1 : 0.3;
    } else {
      const [dayOfWeek, isToday] = getDayOfWeek(date);
      timeOrDate = dayOfWeek;
      opacity = isToday ? 1 : 0.3;
    }
    return [timeOrDate, opacity];
  };

  const [timeToDisplay, capsultOpacity] = timeDateOpacityDisplay();

  return (
    <View style={{ width: width, height: height }}>
      <Canvas style={{ flex: 1, ...StyleSheet.absoluteFillObject }}>
        <RoundedRect
          x={0}
          y={0}
          width={width}
          height={height}
          r={radius}
          color={`rgba(72,49,157,${capsultOpacity})`}
        >
          <Shadow dx={5} dy={4} blur={10} color={"rgba(0,0,0,0.25)"} inner />
        </RoundedRect>
      </Canvas>
      <View style={[styles.cap]}>
        <Text style={styles.time}>{timeToDisplay}</Text>
        <View>
          <Image
            source={icon}
            style={{ width: width / 2, height: width / 2 }}
          />

          <Text style={[styles.probability, { opacity: capsultOpacity }]}>
            {probability}%
          </Text>
        </View>
        <Text style={styles.temperature}>
          {temperature} {DEGREE_SYMBOL}
        </Text>
      </View>
    </View>
  );
};

export default ForecastCapsule;

const styles = StyleSheet.create({
  time: {
    fontFamily: "SF-SemiBold",
    fontSize: 15,
    lineHeight: 20,
    color: "white",
    letterSpacing: -0.5,
    textAlign: "center",
  },
  probability: {
    fontFamily: "SF-SemiBold",
    fontSize: 13,
    lineHeight: 18,
    color: "#40CBDB",
    textAlign: "center",
  },
  temperature: {
    fontFamily: "SF-Regular",
    fontSize: 20,
    lineHeight: 24,
    color: "white",
    letterSpacing: 0.38,
    textAlign: "center",
  },
  cap: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 19,
  },
});
