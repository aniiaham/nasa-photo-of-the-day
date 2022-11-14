import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled, { keyframes } from 'styled-components' 

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

const kf = keyframes`
  100% {
  opacity: 1;
`
const StyledTitle = styled.h1`
    text-align: center;
    color: #ECEFF1;
    font-family: serif;
    font-weight: bold;
    font-size: 35px;
`

const StyledParagraph = styled.p`
    width: 80%;
    text-align: left;
    color: #FBFBFB;  
    font-family: "Times New Roman", Times, serif;
    margin: auto;
    width: 70%;
    padding: 10px;
    font-size: 20px;
`
const StyledBackground = styled.div`
    background-color: #37474F;
    padding: 10px;
    
`
const StyledDate = styled.p`
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    font-weight: bold;
    color: #ECEFF1;
    
`
const StyledImage = styled.img`
    width: 600px;
    border-radius: 20px;
`

function App() {
  const [nasaData, setNasaData] = useState(initalData.data);

  useEffect(() => {
    const fetchNasa = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}`)
        .then((res) => {
          // console.log(res)
          if(!res.data.title){
            setNasaData(initalData.data)
          } else {
            setNasaData(res.data);
          }
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
    <StyledBackground>
      <StyledImage src={props.url} alt="Nasa Image"/>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledDate>{props.date}</StyledDate>
      <StyledParagraph>{props.explanation}</StyledParagraph>
    </StyledBackground>
  );
};




const initalData = {
  "data": {
      "date": "2022-11-13",
      "explanation": "A flying saucer from outer space crash-landed in the Utah desert after being tracked by radar and chased by helicopters.  The year was 2004, and no space aliens were involved.  The saucer, pictured here, was the Genesis sample return capsule, part of a human-made robot Genesis spaceship launched in 2001 by NASA itself to study the Sun.  The unexpectedly hard landing at over 300 kilometers per hour occurred because the parachutes did not open as planned.  The Genesis mission had been orbiting the Sun collecting solar wind particles that are usually deflected away by Earth's magnetic field. Despite the crash landing, many return samples remained in good enough condition to analyze. So far, Genesis-related discoveries include new details about the composition of the Sun and how the abundance of some types of elements differ across the Solar System. These results have provided intriguing clues into details of how the Sun and planets formed billions of years ago.",
      "hdurl": "https://apod.nasa.gov/apod/image/2211/GenesisImpact_nasa_960.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Flying Saucer Crash Lands in Utah Desert",
      "url": "https://apod.nasa.gov/apod/image/2211/GenesisImpact_nasa_960.jpg"
  },
  "status": 200,
  "statusText": "",
  "headers": {
      "content-type": "application/json",
      "x-ratelimit-limit": "40",
      "x-ratelimit-remaining": "7"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "method": "get",
      "url": "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  },
  "request": {}
}