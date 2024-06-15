import { NavLink } from "react-bootstrap";

export default function Navbar() {
  const setSeccion = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="flex justify-content-between bg-danger p-3">
      <span>Pokedex</span>
      <div className="flex gap-3">
        <NavLink className={setSeccion} to="/">
          Home
        </NavLink>
        <NavLink className={setSeccion} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </div>
  );
}
