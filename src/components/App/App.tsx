import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/AboutPage";
import NewsPage from "../../pages/NewsPage/NewsPage";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./App.css"

const App: React.FC = () => {
	/* const [searchWord, setSearchWord] = useState<string>("")

	const searchWordHandler = (filterWord: string) => {
		setSearchWord(filterWord)
	} */

  return (
    <BrowserRouter>
      <Navbar /* onSearchWord={searchWordHandler} */ />
      <Switch>
        <Route component={NewsPage} path="/" /* onSearchWord={searchWord} */ exact />
        <Route component={AboutPage} path="/about" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
