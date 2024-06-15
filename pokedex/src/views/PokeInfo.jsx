import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokeInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const getData = async () => {
    try {
      const response = await fetch(URL + name);
      const results = await response.json();
      setPokemon(results);
    } catch (error) {
      console.log("No atrapaste nada");
    }
  };
  console.log(pokemon);

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.front_default} />
    </div>
  );
};

export default PokeInfo;
