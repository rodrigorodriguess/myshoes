import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Shoes from "../Shoes";

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>Você também pode gostar:</Text>

      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/1.png")}
              cost="R$140,90"
              onClick={() => alert("Clicou")}
            >
              Nike AirMax 90
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/2.png")}
              cost="R$370,00"
              onClick={() => alert("Clicou")}
            >
              AirJordan 15
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/3.png")}
              cost="R$650,90"
              onClick={() => alert("Clicado")}
            >
              Adidas Superstar
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/4.png")}
              cost="R$2.700"
              onClick={() => alert("Clicado")}
            >
              Adidas Yeezy Boost 350 V2
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/5.png")}
              cost="R$1650,80"
              onClick={() => alert("Clicado")}
            >
              Adidas Pharrell Hu NMD
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/6.png")}
              cost="R$2.200"
              family="Poppins_400Regular,"
              onClick={() => alert("Clicado")}
            >
              Adidas Ultra Boost
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});
