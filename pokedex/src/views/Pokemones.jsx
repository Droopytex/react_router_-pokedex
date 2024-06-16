import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");
  const navegar = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPokemones(results);
    } catch (error) {
      console.log("No atrapaste nada");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="selector">
      <span>Selecciona un pokemon de la lista ...</span> <hr />
      <div>
        <img src="https://i.gifer.com/2iiJ.gif" alt="" />
      </div>
      <select
        className="sel_poke"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="" disabled>
          Elige tu Pokemon
        </option>
        {pokemones.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button
        className="ver_poke"
        onClick={() => navegar(`/pokemones/${name}`)}
      >
        Ver Pokemon
      </button>
    </div>
  );
};

export default Pokemones;
