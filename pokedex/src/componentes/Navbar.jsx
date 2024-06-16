import { NavLink } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

const Navbar = () => {
  const setSeccion = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navcss">
      <span>
        <CgPokemon />
        Pokedex
      </span>
      <div className="links">
        <NavLink className={setSeccion} to="/">
          Home
        </NavLink>
        <NavLink className={setSeccion} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
