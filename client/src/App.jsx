import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Start from './Start.jsx'
import Question from './Question.jsx';
import Result from './Result.jsx'
<<<<<<< HEAD
import styled from 'styled-components';
=======
import styled from "styled-components"
// import GlobalFonts from './fonts/fonts';

const OverallDiv = styled.div`
  color: #3a3b3c;
  text-align: center;
  margin: auto;
  width: 500px;

  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1em;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: uppercase;
`;
>>>>>>> parent of 39357ed (style changes)

const App = () => {
  const [theme, setTheme] = useState();
  const [anime, setAnime] = useState(null);
  const [status, setStatus] = useState('start'); //default start
  const scoreSheet = [
  {
    value: 'love',
    score: 0
  },
  {
    value: 'action',
    score: 0
  },
  {
    value: 'comedy',
    score: 0
  },
  {
    value: 'friendship',
    score: 0
  },
  {
    value: 'adventure',
    score: 0
  }
  ];

  useEffect(() => {
    getPersonality(theme);
  }, [theme]);

  const getPersonality = (theme) => {
    console.log('status', status)
    axios.get(`/personality/${theme}`)
    .then(anime => {
      console.log('Here is your personality match:', anime.data);
      setAnime(anime.data);
    })
    .catch(err => {
      console.log('No animes found!', err);
    })
  }

  const changeStatus = () => {
    if (status === 'start') {
      setStatus('question');
    } else if (status === 'question') {
      setStatus('result');
    } else if (status === 'result') {
      setStatus('start')
    }
  }

  const findHighestScore = () => {
    let currentHighscore = scoreSheet[0].score;
    let topTheme = scoreSheet[0].value;
    scoreSheet.forEach(currObject => {
      if (currObject.score > currentHighscore) {
        currentHighscore = currObject.score;
        topTheme = currObject.value;
      }
    })
    setTheme(topTheme);
    changeStatus();
    console.log('This is your highest scoring theme!! --->' , topTheme)
  }


  //insert styled component tag here
  return (
    <div>
      {status === 'start' ? <Start changeStatus={changeStatus}/> :
      status === 'question' ? <Question anime={anime} theme={theme} scoreSheet={scoreSheet} findHighestScore={findHighestScore}/> :
      status === 'result' ? (anime ? <Result anime={anime[0]} theme={theme} changeStatus={changeStatus}/> : null) : null}
      <br/>
      <p></p>
    </div>
  )

}

export default App;