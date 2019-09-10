import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__left info">
          <p className="info__paragraph">ToDo-App</p>
          <NavLink to="/about" className="info__about">About</NavLink>
        </div>

        <nav className="header__right nav">
          <ul className="nav__items">
            <li>
              <NavLink exact className="nav__item" to="/">New Task</NavLink>
            </li>
            <li>
              <NavLink className="nav__item" to="/todo">Tasks</NavLink>
            </li>
            <li>
              <NavLink className="nav__item" to="/done">Done</NavLink>
            </li>
            <li>
              <NavLink className="nav__item" to="/removed">Removed</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;