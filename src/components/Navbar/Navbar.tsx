import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface INavbarProps {
  searchWord: string;
  searchWordHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  searchNewsHandler(): void;
}

const Navbar: React.FC<INavbarProps> = ({
  searchWord,
  searchWordHandler,
  searchNewsHandler,
}) => {
	
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchWordHandler(e);
    searchNewsHandler();
  };

  return (
    <>
      <nav id="nav-menu">
        <div className="purple darken-3 nav row">
          <div className="search col s12 m4 l3">
            <i className="material-icons search-icon">search</i>
            <input
              id="icon_prefix2"
              type="text"
              className="materialize-textarea"
              placeholder="Input news"
              value={searchWord}
              onChange={changeHandler}
            ></input>
          </div>
          <div className="logo-brand col s12 m4 l4">
            <a href="/">News feed</a>
          </div>
          <div className="menu col s12 m4 l5">
            <ul>
              <li>
                <NavLink to="/">News</NavLink>
              </li>
              <li>
                <NavLink to="/about">About App</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
