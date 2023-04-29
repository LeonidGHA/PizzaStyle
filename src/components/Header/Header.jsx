import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import CartBtn from "../CartBtn/CartBtn";

import css from "./Header.module.scss";

const activeNav = ({ isActive }) => {
  return isActive
    ? `${css.navigation_link} ${css.active}`
    : css.navigation_link;
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header_wrapper}>
          <Logo />
          <nav>
            <ul className={css.nav_list}>
              <li className={css.navigation_item}>
                <NavLink className={activeNav} to="/">
                  Pizza
                </NavLink>
              </li>
              <li className={css.navigation_item}>
                <NavLink className={activeNav} to="/Cart">
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
          <CartBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
