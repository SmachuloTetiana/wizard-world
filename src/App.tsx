import React, { useEffect, useState } from "react";
import "./App.css";
import { IData } from "./types/data";
import CardList from "./components/CardList";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IData[] | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://wizard-world-api.herokuapp.com/houses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !!data?.length ? (
        <CardList data={data} />
      ) : (
        <p style={{ textAlign: "center" }}>Not found data.</p>
      )}
    </>
  );
}

export default App;
