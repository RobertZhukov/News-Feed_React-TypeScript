import React from "react";
import AddNewsForm from "../../components/AddNewsForm/AddNewsForm";
import CurrentNews from "../../components/CurrentNews/CurrentNews";
import { IEditNews, INews, INewsPage } from "../../interfaces";
import "./NewsPage.css";

interface INewsPageProps {
  newsPage: INewsPage
  addNewsHandler(news: INews): void;
  removeNewsHandler(id: number): void;
  editNewsHandler(editNews: IEditNews): void;
}

const NewsPage: React.FC<INewsPageProps> = ({
  newsPage,
  addNewsHandler,
  removeNewsHandler,
  editNewsHandler
}) => {

  const removeHandler = (id: number) => {
    const confirmRemove = window.confirm("Are you whant delete this task?");

    if (confirmRemove) {
      removeNewsHandler(id);
    }
  };
  
  const editHandler = (e: string, id: number) => {
	let editNews = { e, id }
	editNewsHandler(editNews)
  };

  return (
    <div className="news-page">
      <AddNewsForm onAddHandler={addNewsHandler} />
      <CurrentNews
        onRemove={removeHandler}
        onEdit={editHandler}
        newsData={newsPage.newsData}
      />
    </div>
  );
};

export default NewsPage;
