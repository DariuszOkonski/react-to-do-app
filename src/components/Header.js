import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <p className="header__paragraph">ToDo-App</p>
          <NavLink to="/about" className="header__about">About</NavLink>
        </div>

        <nav className="header__navigation">
          <ul className="header__items">
            <li className="header__item">
              <NavLink to="/">New Task</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/todo">Tasks To Do</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/done">Done Tasks</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/removed">Removed Tasks</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;