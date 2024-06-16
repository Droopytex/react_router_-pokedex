import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./componentes/Navbar";
import Pokemones from "./views/Pokemones";
import PokeInfo from "./views/PokeInfo";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react_router_-pokedex" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokeInfo />} />
      </Routes>
    </>
  );
}

export default App;
