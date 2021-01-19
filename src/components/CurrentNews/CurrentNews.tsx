import React from "react";
import { INews } from "../../interfaces";
import "./CurrentNews.css";

interface INewsArrayProps {
  onRemove(id: number): void;
  onEdit(e: string, id: number): void;
  newsData: INews[];
}

const CurrentNews: React.FC<INewsArrayProps> = ({
  onRemove,
  onEdit,
  newsData,
}) => {
	
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };
  const editHandler = (event: React.ChangeEvent<HTMLElement>, id: number) => {
    onEdit(event.target.innerText, id);
  };

  if (newsData.length) {
    return (
      <div className="current-news">
        <div className="current-news-title">
          <span className="title-news">CURRENT NEWS</span>
        </div>
        {newsData.map((news) => {
          return (
            <div className="news" key={news.id}>
              <div className="news-container">
                <h3 className="news-title">{news.newsTitle}</h3>
                <p
                  className="news-text"
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  title="Click to edit the news..."
                  spellCheck={"false"}
                  onBlur={(event) => editHandler(event, news.id)}
                >
                  {news.newsText}
                </p>
                <div className="news-icons">
                  <div className="news-author">Author: {news.newsAuthor}</div>
                  <div>
                    <i
                      className="small material-icons black-text i-delete"
                      title="Delete"
                      onClick={(event) => removeHandler(event, news.id)}
                    >
                      delete_forever
                    </i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="current-news">
        <div className="current-news-title">
          <span className="title-news">CURRENT NEWS</span>
        </div>
        <p className="not-news">
          <span>
            At the moment there is no news. You can share something
            interesting...
          </span>
        </p>
      </div>
    );
  }
};

export default CurrentNews;
