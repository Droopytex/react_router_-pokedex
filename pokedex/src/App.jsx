import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokeInfo from "./views/PokeInfo";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokeInfo />} />
      </Routes>
    </>
  );
}

export default App;
