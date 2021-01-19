import React from "react";
import { connect } from "react-redux";
import {
  searchActionCreator,
  updateWordActionCreator,
} from "../../Redux/NewsReducer";
import Navbar from "./Navbar";

let mapStateToProps = (state: any) => {
  return {
    searchWord: state.newsPage.searchWord,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    searchWordHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateWordActionCreator(e.target.value));
    },
    searchNewsHandler: () => {
      dispatch(searchActionCreator());
    },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
