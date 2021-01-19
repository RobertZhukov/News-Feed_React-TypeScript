import React from "react";
import { useHistory } from "react-router-dom";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="about">
      <h2>About Programm</h2>
      <h5>
        While developing this learning application, I got acquainted with:
      </h5>
      <ul>
        <li>- TypeScript</li>
        <li>- CSS framework Materialize.</li>
      </ul>
      <h5>Repeated:</h5>
      <ul>
        <li>- React Router</li>
        <li>- React Hooks</li>
        <li>- Localstorage.</li>
      </ul>
      <button className="btn purple darken-3" onClick={() => history.push("/")}>
        Back to news
      </button>
    </div>
  );
};

export default AboutPage;
