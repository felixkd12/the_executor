import style from './App.module.css';
import { useState, useEffect } from "react";
import { Text } from "./Text";
import React from "react";
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState({});

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  }
  /* const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcatText(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  }, []);
  */

  return (
    <div className={style.App}>
      <input placeholder="Felix"
      onChange={(event) => {
        setName(event.target.value);
      }} />
      <button onClick={fetchData}> Predict Age </button>

      <h1> Predicted Name: {predictedAge.name} </h1>
      <h1> Predicted Age: {predictedAge.age} </h1>
      <h1> Predicted Count: {predictedAge.count} </h1>
    </div>
  );
}

export default App;