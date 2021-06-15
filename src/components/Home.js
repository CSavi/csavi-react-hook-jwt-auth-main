import React, { useState, useEffect } from "react";

import DataRetriever from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(DataRetriever.getPublicContent());
    // TODO: Add a promise/callback once an api all is set up
    // .then(
    //   (response) => {
    //     setContent(response);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response && error.response.data) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
    // );
  }, []);

  return (
    <div className="container">
      <header className="context-header">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;