import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const REACT_APP_API_KEY = "DEMO_KEY"

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    const fetchNasa = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}`)
        .then((res) => {
          // console.log(res)
          setNasaData(res.data);
          console.log(res);
        })
        .catch((err) => {
          // console.log(err);
        });
    };
    fetchNasa();
  }, []);

  return (
    <div className="App">
      <Nasa title={nasaData.title} url={nasaData.url} explanation={nasaData.explanation} date={nasaData.date}/>
    </div>
  );
}

export default App;

const Nasa = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} alt="Nasa Image"/>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
    </div>
  );
};
