import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Air Max 90",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.img}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24, marginTop: 2 }]}>
            R$ 140,90
          </Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Max 90 </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#6fc2b2" />
          <Dot color="#919193" />
          <Dot color="#5b478e" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#35363a" color="#fff">
              42
            </SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>35</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>32</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.descriptionArea}>
          <Text style={styles.shoeTitle}>Nike Air Max 90</Text>
          <Text style={styles.shoeDescription}>
            O Air Max 90 é um dos principais sneakers da família Max Air. Essa
            segunda versão da linha de tecnologia aparente, desenvolvida pela
            Nike, foi lançada em 1990, com ainda mais ar e amortecimento. Hoje,
            o Nike 90 é encontrado em várias versões e cores para atender aos
            mais diferentes gostos.
          </Text>
          <Text style={styles.shoeInfo}>- Categoria: amortecimento</Text>
          <Text style={styles.shoeInfo}>
            - Materiais: Cabedal em couro, Solado de espuma com amortecimento
            Air Max, Solado de borracha.
          </Text>
        </View>

        <Button />

        <View style={styles.line} />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "4%",
  },
  descriptionArea: {
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  shoeTitle: {
    fontSize: 22,
    marginVertical: "0.5%",
    fontFamily: "Poppins_700Bold",
  },
  shoeDescription: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
  },
  shoeInfo: {
    fontSize: 16,
    marginVertical: "1%",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    marginVertical: "2%",
  },
});
