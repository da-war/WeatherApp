import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Weather } from "@/models/Weather";
import { DEGREE_SYMBOL } from "@/utils/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WeatherInfoProps {
  weather: Weather;
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  const { city, temperature, condition, high, low } = weather;
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: "22%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperatureText}>
        {temperature} {DEGREE_SYMBOL}
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H: {high} {DEGREE_SYMBOL} L: {low} {DEGREE_SYMBOL}
      </Text>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  cityText: {
    fontSize: 34,
    fontFamily: "SF-Regular",
    color: "white",
    lineHeight: 41,
    marginBottom: 6,
  },
  temperatureText: {
    margin: 6,
    lineHeight: 96,
    fontSize: 96,
    fontFamily: "SF-Thin",
    color: "white",
  },
  conditionText: {
    fontSize: 20,
    fontFamily: "SF-SemiBold ",
    color: "rgba(235,235,245,0.6)",
    lineHeight: 20,
  },
  minMaxText: {
    fontSize: 20,
    color: "white",
    fontFamily: "SF-SemiBold",
    lineHeight: 20,
    marginTop: 6,
  },
});
