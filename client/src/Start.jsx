import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OverallDiv = styled.div`
  outline: 2px solid #3a3b3c;
  padding: 25px;
  border-radius: 10px;
  color: #3a3b3c;
  text-align: center;
  margin: auto;
  margin-top: 60px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1.4em;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: uppercase;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  background: #F7F3F9;
  }
  body#tinymce {
    background: #FFFFFF
  }
`;
const NextButton = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 40%;
  padding: 5px;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1.5em;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    color: #6ac49d;
    outline: 1px solid #6ac49d;
    border-color: #6ac49d;
  }
`;

const Start = ({ changeStatus }) => {
  const [theme, setTheme] = useState('friendship')

  return (
    <div>
      <h2>Anime Personality Test</h2>
        <OverallDiv>
          <h4>How well do you know yourself? <br/><br/>Let our AI tell you the perfect starter anime for your personality...</h4>
          <NextButton onClick={changeStatus}>Start</NextButton>
        </OverallDiv>
    </div>
  )

}

export default Start;