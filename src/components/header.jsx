import Logo from "./logo";
import NavLink from "./nav-link";

import { navLink } from "../constants";

import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <ul className="nav-links">
        {navLink.map((item) => {
          return <NavLink {...item} />;
        })}
      </ul>
      <span className="bars">
        <i class="fa-solid fa-bars"></i>
      </span>
    </header>
  );
};

export default Header;
