import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = ({ anime, theme, changeStatus }) => {
console.log("anime: ", anime)

  if (anime === undefined) {
      return ( <div></div> )
  } else {
    return (
      <div>
        <h3>Results</h3>
        <h3>Your starter anime is: </h3>
        <p>{anime.name}</p>

        <h4>Description: </h4>
        <p>{anime.description}</p>

        <h4>Personality analysis: </h4>
        <p>{anime.analysis}</p>
      <button onClick={changeStatus}>Retake the quiz</button>
      </div>
    )
  }

}

export default Result;