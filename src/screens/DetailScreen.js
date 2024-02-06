// components/DetailsScreen/js
import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const DetailScreen = () => {
  return (
    <View style={[styles.container]}>
      <Image source={require("../assets/bilal.jpeg")} style={styles.image} />
      <Text style={styles.judul}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },

  judul: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
});

export default DetailScreen;
