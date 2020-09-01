import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default function Dot(props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.color }]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: (Dimensions.get("window").width * 0.05) / 2,
    marginHorizontal: "2.5%",
    elevation: 5,
  },
});
