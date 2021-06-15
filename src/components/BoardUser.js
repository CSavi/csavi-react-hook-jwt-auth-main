import React, {useState, useEffect} from "react";

import DataRetriever from "../services/user.service";

const BoardUser = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        DataRetriever.getUserDashboard().then(
            (response) => {
                setContent(response.data);
            },
            (err) => {
                const errContent =
                    (err.response &&
                    err.response.data &&
                    err.data.message) ||
                    err.message ||
                    err.toString();

                    setContent(errContent);
            }
        );
}, []);

return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
)
};

export default BoardUser;