import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [pessoa, setPessoa] = useState({
    nome: "Elias Fernandes",
    altura: 1.92,
    idade: 30,
    estado: "Paraná",
  });

  return (
    <View style={styles.container}>
      <Text>{pessoa.nome}</Text>
      <Text>{pessoa.idade}</Text>
      <Button
        title="click"
        onPress={() => {
          setPessoa({ ...pessoa, nome: "Jhess", idade: 27 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
