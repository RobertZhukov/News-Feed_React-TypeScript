import React, { useState } from "react";
import "./AddNewsForm.css";

interface INewsArrayProps {
  onAddHandler(news: object): void;
}

interface INews {
  newsText: string;
  newsTitle: string;
  newsAuthor: string;
  id: number;
  editNews: boolean;
}

const AddNewsForm: React.FC<INewsArrayProps> = (props) => {
  const [newNews, setNewNews] = useState<INews>({
    newsText: "",
    newsTitle: "",
    newsAuthor: "",
	id: 10065456116556,
	editNews: false
  });

  const addHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const news: INews = {
      newsText: newNews.newsText,
      newsTitle: newNews.newsTitle,
      newsAuthor: newNews.newsAuthor,
	  id: Date.now(),
	  editNews: false
    };

    if (
      newNews.newsText.length &&
      newNews.newsAuthor.length &&
      newNews.newsTitle.length
    ) {
		console.log(news)
      props.onAddHandler(news);
      setNewNews((prev) => {
        prev.newsText = "";
        prev.newsTitle = "";
        prev.newsAuthor = "";
        return prev;
      });
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewNews({
      ...newNews,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-news-form">
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <div className="create-title">
                <div className="input-field col s12 m6">
                  <input
                    id="input-css"
                    type="text"
                    placeholder="Title"
                    value={newNews.newsTitle}
                    onChange={changeHandler}
                    name="newsTitle"
                  />
                </div>
              </div>
              <div className="create-author">
                <div className="input-field col s12 m6">
                  <input
                    id="input-csss"
                    type="text"
                    placeholder="Author"
                    value={newNews.newsAuthor}
                    onChange={changeHandler}
                    name="newsAuthor"
                  />
                </div>
              </div>
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={newNews.newsText}
                onChange={changeHandler}
                placeholder="Enter the text of the news..."
                name="newsText"
              ></textarea>
              {/* <form action="#">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input
                      type="file"
                    />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload file"
                    />
                  </div>
                </div>
              </form> */}
              <div className="create-btn">
                <button
                  className="btn purple darken-3"
                  onClick={(event) => addHandler(event)}
                >
                  Create news
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewsForm;
