import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../components/Shoes";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/banner.png")} style={styles.img} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#b9b9bd" }]}>•</Text>
          <Text style={[styles.text, { color: "#b9b9bd" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line}></View>

      <ScrollView>
        <Text style={[styles.text, { fontWeight: "bold" }]}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/1.png")}
            cost="R$140,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike AirMax 90
          </Shoes>
          <Shoes
            img={require("../../assets/2.png")}
            cost="R$370,00"
            onClick={() => navigation.navigate("Detail")}
          >
            AirJordan 15
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/3.png")}
            cost="R$650,90"
            onClick={() => alert("Clicado")}
          >
            Adidas Superstar
          </Shoes>
          <Shoes
            img={require("../../assets/4.png")}
            cost="R$2.700"
            onClick={() => alert("Clicado")}
          >
            Adidas Yeezy Boost 350 V2
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/5.png")}
            cost="R$1650,80"
            onClick={() => alert("Clicado")}
          >
            Adidas Pharrell Hu NMD
          </Shoes>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  img: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: "5%",
    marginBottom: "1%",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_700Bold",
    fontSize: 21,
    marginHorizontal: "1%",
    fontWeight: "normal",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#d8d8d8",
    marginBottom: 5,
  },
});
