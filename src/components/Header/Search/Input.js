import React, { useState } from "react";
import { TextInput, Keyboard } from "react-native";
import { textColor } from "../../../assets/color";
import { usePokeContext } from "../../../context/context";

export const Input = ({ style, setClicked }) => {
  const [search, setSearch] = useState();

  const { filterPokemon, setFilterPokemon } = usePokeContext();

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = filterPokemon.filter((item) =>
        item.includes(text.toLowerCase())
      );
      setFilterPokemon(newData);
      setSearch(text);
    }
  };

  return (
    <>
      <TextInput
        style={style}
        placeholderTextColor={textColor.grey}
        placeholder="Que pokemon quieres ver?"
        onChangeText={(text) => searchFilterFunction(text)}
        value={(text) => setSearch(text)}
      />
    </>
  );
};
