import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Веб-приложение "Агрегатор календарей"
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Пользователи
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/googleCalendar">
              Google
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/yandexCalendar">
              Yandex
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/agregatorCalendar">
              Agregator
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-light" to="/users/add">
        Добавить пользователя
      </Link>
    </nav>
  );
};

export default Navigation;
