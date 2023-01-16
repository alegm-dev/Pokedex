import Axios from "axios";

export const fetching = async (
  URL,
  nextPage,
  setGetPokemons,
  getPokemons,
  loading
) => {
  const arrayPokemons = [];
  try {
    const res = await Axios.get(URL);
    const data = res.data;
    const results = data.results;
    console.log(data);
    nextPage(data.next);
    for (const rest of results) {
      const res = await Axios.get(rest.url);
      const data = await res.data;
      arrayPokemons.push(data);
      setGetPokemons([...getPokemons, ...arrayPokemons]);
      loading(false);
    }
  } catch (err) {
    console.error(err);
  }
};
