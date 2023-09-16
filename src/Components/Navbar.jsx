import React from "react";
import { Link } from "react-router-dom";
import "../css/bulma.css";
import "../css/style.css";
import { useContextGlobal } from "./utils/global.context";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { theme, toggleTheme } = useContextGlobal();
  return (
    <>
      <div className="tabs is-medium is-centered" id="s">
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
            <button className="button bm" onClick={toggleTheme}>
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
