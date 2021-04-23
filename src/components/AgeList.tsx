import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

interface listDataProps {
  listData: number[];
}

export function AgeList({ listData }: listDataProps) {
  return (
    <FlatList
      keyExtractor={(item, index) => String(item + index)}
      contentContainerStyle={styles.listIdade}
      data={listData}
      renderItem={({ item }) => (
        <Text
          style={[
            styles.listText,
            item < 20 && styles.blue,
            item >= 20 && item <= 40 && styles.purple,
            item > 40 && styles.orange,
          ]}
        >
          {item}
        </Text>
      )}
      showsVerticalScrollIndicator={true}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  listIdade: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  blue: {
    color: "#2BB1DB",
  },
  orange: {
    color: "#E48A1F",
  },
  purple: {
    color: "#824DF2",
  },
  listText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
