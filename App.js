import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [meta, setMeta] = useState("");
  const [metaCurso, setMetaCurso] = useState([]);

  const entradaMeta = (textoInserido) => {
    setMeta(textoInserido);
  };

  const adicionarMeta = ()=>{
    setMetaCurso(metasAtuais => [...metasAtuais, meta])
   
  } 

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Insira aqui suas metas"
          style={styles.input}
          onChangeText={entradaMeta} value={meta}
        />
        <Button title="ADD" onPress={adicionarMeta} />
      </View>
      <View>
        {metaCurso.map((meta) => <Text key={meta}> {meta}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
