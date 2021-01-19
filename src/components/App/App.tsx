import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage/AboutPage";
import NewsPageContainer from "../../pages/NewsPage/NewsPageContainer";
import Footer from "../Footer/Footer";
import NavbarContainer from "../Navbar/NavbarContainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Switch>
        <Route path="/" component={NewsPageContainer} exact />
        <Route component={AboutPage} path="/about" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
