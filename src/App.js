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

  useEffect(() => {
    user === "" && setResult([]);
  }, [user]);

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <header className="App-header">
        <h2>
          Aplikasi pencari repository{" "}
          <a style={{ textDecoration: "none" }} href="//github.com">
            GitHub
          </a>
        </h2>
        input username : {` `}
        <input
          placeholder="input username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          onKeyDown={(e) => e.code === "Enter" && getRepository(user)}
        />
        <button
          type="submit"
          onClick={() => {
            getRepository(user);
          }}
        >
          submit
        </button>
      </header>
    </div>
  );
}

export default App;
