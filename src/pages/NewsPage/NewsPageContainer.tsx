import { connect } from "react-redux";
import { IEditNews, INews } from "../../interfaces";
import {
  addNewsActionCreator,
  removeNewsActionCreator,
  editNewsActionCreator,
} from "../../Redux/NewsReducer";
import NewsPage from "./NewsPage";

let mapStateToProps = (state: any) => {
  return {
    newsPage: state.newsPage,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addNewsHandler: (news: INews) => {
      dispatch(addNewsActionCreator(news));
    },
    removeNewsHandler: (id: number) => {
      dispatch(removeNewsActionCreator(id));
    },
    editNewsHandler: (editNews: IEditNews) => {
      dispatch(editNewsActionCreator(editNews));
    },
  };
};

const NewsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);

export default NewsPageContainer;
