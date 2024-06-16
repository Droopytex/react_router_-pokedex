import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

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
    <div className="selector">
      <Card style={{ width: "18rem" }} className="tarjeta">
        <h3 className="h3">{pokemon?.name}</h3>
        <Card.Img variant="top" src={pokemon?.sprites?.front_default} />
        <Card.Body>
          <Card.Text>
            <span>Peso: {pokemon?.weight}</span> <hr></hr>
            <span>Altura: {pokemon?.height}</span>
            <hr></hr>
            <span>Orden en lista: {pokemon?.order}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokeInfo;
