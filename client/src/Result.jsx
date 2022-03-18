import React, { useState, useEffect } from 'react';
import styled from "styled-components";
// import GlobalFonts from './fonts/fonts';

const ContainerDiv = styled.div`
  color: #3a3b3c;
  text-align: center;
  width: 500px;
  margin: auto;
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
const StyledDiv = styled.div`
  background-color: #f5f5f5;
  outline: 2px solid #3a3b3c;
  padding: 25px;
  border-radius: 30px;
  margin-top: 40px;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  background: #F7F3F9;
  }
  body#tinymce {
    background: #FFFFFF
  }
`;
const RestartButton = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 150px;
  padding: 5px;
  margin-top: 30px;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1em;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    color: #0077ed;
    outline: 1px solid #0077ed;
    border-color: #0077ed;
  }
`;

const Result = ({ anime, theme, changeStatus }) => {
console.log("anime: ", anime)

  if (anime === undefined) {
      return ( <div></div> )
  } else {
    return (
        <ContainerDiv>
          <h2>Results</h2>
            <StyledDiv>
              <h3>Your starter anime is: </h3>
                <h2>{anime.name}</h2>
              <h4>Description: </h4>
                <p>{anime.description}</p>
              <h4>Personality analysis: </h4>
                <p>{anime.analysis}</p>
              <br/>
            </StyledDiv>
          <br/>
        <RestartButton onClick={changeStatus}>Retake the quiz</RestartButton>
        </ContainerDiv>

    )
  }

}

export default Result;