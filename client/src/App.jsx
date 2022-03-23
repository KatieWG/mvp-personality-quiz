import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Start from './Start.jsx'
import Question from './Question.jsx';
import Result from './Result.jsx'
import styled from 'styled-components';

const App = () => {
  const [theme, setTheme] = useState();
  const [anime, setAnime] = useState(null);
  const [status, setStatus] = useState('start'); ///////
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
      status === 'result' ? (anime && theme ? <Result anime={anime[0]} theme={theme} changeStatus={changeStatus}/> : null) : null}
      <br/>
      <p></p>
    </div>
  )

}

export default App;