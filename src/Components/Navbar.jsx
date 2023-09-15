import React from "react";
import { Link } from "react-router-dom";
import "../css/bulma.css";
import "../css/style.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <div className="tabs is-centered" id="s">
        <ul>
          <li>
            <Link to="/Favs">Favs</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
