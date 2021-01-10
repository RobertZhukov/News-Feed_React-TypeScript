import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


interface INews {
	newsText: string;
	newsTitle: string;
	newsAuthor: string;
	id: number;
	editNews: boolean;
  }

interface INavbarProps {
	onSearchWord(searchWord: string): void
}

const Navbar: React.FC = (props) => {

	//const newsArray = JSON.parse(localStorage.getItem("newsArray") || "[]");

	//const [newsFilterArray, setNewsFilterArray] = useState<INews[]>([...newsArray]);
	const [searchWord, setSearchWord] = useState("")

	/* useEffect(() => {
		localStorage.setItem("newsFilterArray", JSON.stringify(newsFilterArray));
	  }, [newsFilterArray]);
 */
	/* const searchHandler = () => {
		let newArray = newsFilterArray.filter((news) => news.newsText === searchWord)
	
		if(newsArray) {
			console.log(newArray)
			//setNewsFilterArray(newArray)
		}
	  } */

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value)
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
            <a href="/">
              News feed
            </a>
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
