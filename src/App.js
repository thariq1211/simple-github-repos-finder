import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [result, setResult] = useState([]);
  const [user, setUser] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState();

  const getRepository = async (user) => {
    setResult([]);
    setIsError(null);
    setIsFetching(true);
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setIsFetching(!isFetching);
      })
      .catch((err) => console.log(err));
  };

  return <></>;
}

export default App;
