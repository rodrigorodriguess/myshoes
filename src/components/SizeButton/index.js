import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SizeButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.bgColor || "#fff" }]}
    >
      <Text
        style={[styles.text, { color: props.color || "rgba(53,54,58,0.4)" }]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderWidth: 3,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
