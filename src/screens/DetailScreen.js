import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/bilal.jpg")} style={styles.logo} />
      <Text style={styles.title}>GANTENG ABANG DEKK</Text>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tekan Saya</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
