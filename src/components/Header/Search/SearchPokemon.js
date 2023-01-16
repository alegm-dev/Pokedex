import React, { useState } from "react";
import { View, StyleSheet, Keyboard, TouchableOpacity } from "react-native";
import { Search } from "../../../assets/Icons/Search";
import { textColor, customColor } from "../../../assets/color";
import { Input } from "./Input";

export const SearchPokemon = ({ clicked, setClicked }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Search style={styles.iconSearch} />
        <Input style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: customColor.input,
    borderRadius: 10,
    flexDirection: "row"
  },
  searchBar: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center"
  },
  input: {
    fontSize: 20,
    marginLeft: 20,
    width: "100%"
  },
  iconSearch: {
    marginLeft: 1,
    color: textColor.grey
  }
});
