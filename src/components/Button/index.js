import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTitle}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: "#35363a",
    borderRadius: 5,
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#fff",
    fontSize: 17,
  },
});
