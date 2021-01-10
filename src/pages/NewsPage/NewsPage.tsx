import React, { useState, useEffect } from "react";
import AddNewsForm from "../../components/AddNewsForm/AddNewsForm";
import CurrentNews from "../../components/CurrentNews/CurrentNews";
import "./NewsPage.css";

interface INews {
  newsText: string;
  newsTitle: string;
  newsAuthor: string;
  id: number;
  editNews: boolean;
}

interface INewsPageProps {
  searchWord: string;
}

const NewsPage: React.FC = (props) => {
  const [newsArray, setNewsArray] = useState<INews[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("newsArray") || "[]");
    setNewsArray(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("newsArray", JSON.stringify(newsArray));
  }, [newsArray]);

  const newsArrayHandler = (news: INews) => {
    setNewsArray((prev) => [news, ...prev]);
  };

  const removeHandler = (id: number) => {
    const confirmRemove = window.confirm("Are you whant delete this task?");

    if (confirmRemove) {
      setNewsArray((prev) => prev.filter((news) => news.id !== id));
    }
  };

  const editHandler = (newText: string) => {
    console.log("in the development");
  };

  return (
    <div className="news-page">
      <AddNewsForm onAddHandler={newsArrayHandler} />
      <CurrentNews
        onNewsArray={newsArray}
        onRemove={removeHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default NewsPage;
