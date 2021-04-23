import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { AgeList } from "./src/components/AgeList";

export default function App() {
  const [idade, setIdade] = useState<number>();
  const [listIdade, setListIdade] = useState<number[]>([]);
  const inputNum = useRef<any>();

  function handleAddAge() {
    if (!Number.isInteger(idade)) {
      return Alert.alert("Digite um numero inteiro");
    }
    setListIdade((oldVal: any) => [...oldVal, idade]);
    inputNum.current.text = "";
  }

  function handleInputChange(val: string) {
    setIdade(Number(val));
  }

  function handleCalcMedia() {
    const media = listIdade.reduce(
      (acc, currentVal) => (acc + currentVal) / listIdade.length
    );
    Alert.alert(`Media:${media} / Total Pessoas: ${listIdade.length}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Idades</Text>
        <View style={styles.inputAreaData}>
          <TextInput
            ref={inputNum}
            keyboardType="numeric"
            style={styles.inputData}
            placeholder="Digite sua Idade"
            onChangeText={handleInputChange}
          ></TextInput>
          <TouchableOpacity style={styles.btnInsert} onPress={handleAddAge}>
            <Text style={styles.btnInsertText}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollList}>
        <ScrollView>
          <AgeList listData={listIdade} />
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.btnCalc} onPress={handleCalcMedia}>
        <Text style={styles.btnCalcText}>Calcular Média</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  containerInput: {
    width: "100%",
  },
  inputAreaData: {
    width: "100%",
    flexDirection: "row",
  },
  inputData: {
    flex: 3,
    backgroundColor: "#fff",
    marginRight: 10,
    paddingLeft: 20,
    fontSize: 20,
  },
  btnInsert: {
    flex: 1,
    backgroundColor: "#1ABC9C",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnInsertText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 15,
  },
  btnCalc: {
    backgroundColor: "#3498DB",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  btnCalcText: {
    color: "#fff",
    fontSize: 25,
  },

  scrollList: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
  },
});
