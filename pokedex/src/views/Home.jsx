import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Bienvenido Maestro Pokemon!!</h1>
      </div>
      <div>
        <Image
          className="pokecentral"
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/pokemon.jpg?tf=1200x1200"
          rounded
        />
      </div>
    </div>
  );
};

export default Home;
