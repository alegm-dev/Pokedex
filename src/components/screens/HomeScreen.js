import React, { useEffect, useState } from "react";
import { usePokeContext } from "../../context/context";
import { Header } from "../Header/Header";
import { ListPokemons } from "./ListPokemons/ListPokemons";

export const HomeScreen = () => {
  const [clicked, setClicked] = useState();
  const {
    pokemons,
    filterPokemon,
    isLoading,
    functionContext
  } = usePokeContext();
  const { loaderMoreItemNext } = functionContext;

  useEffect(() => {
    pokemons.sort((a, b) => a.id - b.id);
  }, [pokemons]);

  return (
    <>
      <Header clicked={clicked} setClicked={setClicked} />
      <ListPokemons
        clicked={clicked}
        setClicked={setClicked}
        pokemons={pokemons}
        filterPokemon={filterPokemon}
        isLoading={isLoading}
        loaderMoreItemNext={loaderMoreItemNext}
      />
    </>
  );
};
