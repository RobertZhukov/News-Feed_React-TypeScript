import React, { useState, useEffect } from "react";
import "./CurrentNews.css";

interface INews {
  newsText: string;
  newsTitle: string;
  newsAuthor: string;
  id: number;
  editNews: boolean;
}

interface onNewsArrayProps {
  onNewsArray: INews[];
  onRemove(id: number): void;
  onEdit(newText: string): void
}

const CurrentNews: React.FC<onNewsArrayProps> = (props) => {
  const [editState, setEditState] = useState<boolean>(false);
  const [textareaText, setTextareaText] = useState("")

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    props.onRemove(id);
  };

  const onEditHandler = (event: React.MouseEvent, news: INews) => {
	  
	news.editNews = !news.editNews
	setEditState(prev => !prev)
  };

  const offEditHandler = (event: React.MouseEvent, news: INews) => {
	  
	news.editNews = !news.editNews
	setEditState(prev => !prev)
	props.onEdit(textareaText)
  };

  const textareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
	setTextareaText(event.target.value)
  }

  if (props.onNewsArray.length) {
    return (
      <div className="current-news">
        <div className="current-news-title">
          <span className="title-news">CURRENT NEWS</span>
        </div>
        {props.onNewsArray.map((news) => {
          if (news.editNews) {
            return (
              <div className="news" key={news.id}>
                <div className="news-container">
                  <h3 className="news-title">{news.newsTitle}</h3>
                  <textarea className="news-text" value={textareaText} onChange={textareaHandler}></textarea>
                  <div className="news-icons">
                    <div className="news-author">Author: {news.newsAuthor}</div>
                    <div>
                      <i
                        className="small material-icons black-text i-edit"
                        title="Edit"
                        onClick={(event) => offEditHandler(event, news)}
                      >
                        check_circle
                      </i>
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
          } else {
            return (
              <div className="news" key={news.id}>
                <div className="news-container">
                  <h3 className="news-title">{news.newsTitle}</h3>
                  <div className="news-text">{news.newsText}</div>
                  <div className="news-icons">
                    <div className="news-author">Author: {news.newsAuthor}</div>
                    <div>
                      <i
                        className="small material-icons black-text i-edit"
                        title="Edit"
                        onClick={(event) => onEditHandler(event, news)}
                      >
                        edit
                      </i>
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
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="current-news">
        <div className="current-news-title">
          <span className="news-title">CURRENT NEWS</span>
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
