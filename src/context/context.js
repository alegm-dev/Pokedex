import { useState, createContext, useContext, useEffect } from "react";
import { API_URL_EVOLUTIONS } from "../service/api";
import { fetching } from "../service/fetching";

export const PokeContext = createContext();

export const usePokeContext = () => useContext(PokeContext);

export const PokeProvider = ({ children }) => {
  const [getPage, setGetPage] = useState(API_URL_EVOLUTIONS);
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filterPokemon, setFilterPokemon] = useState(pokemons);

  const getAllPokemons = () => {
    fetching(getPage, setNextPageUrl, setPokemons, pokemons, setIsLoading);
  };

  useEffect(() => {
    getAllPokemons();
    return () => setNextPageUrl();
  }, [getPage]);

  const loaderMoreItemNext = () => {
    nextPageUrl && setGetPage(nextPageUrl);
  };

  /*Funciones globlales del carrrito*/
  const functionContext = { loaderMoreItemNext };

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        filterPokemon,
        setFilterPokemon,
        isLoading,
        functionContext
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
