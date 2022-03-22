import React, { useState, useEffect } from 'react';

const Result = ({ anime, theme, changeStatus }) => {
console.log("anime: ", anime)

  if (anime === undefined) {
      return ( <div></div> )
  } else {
    return (
        <div>
          <h2>Results</h2>
            <div>
              <h3>Your starter anime is: </h3>
                <h2>{anime.name}</h2>
              <h4>Description: </h4>
                <p>{anime.description}</p>
              <h4>Personality analysis: </h4>
                <p>{anime.analysis}</p>
              <br/>
            </div>
          <br/>
        <button onClick={changeStatus}>Retake the quiz</button>
        </div>

    )
  }

}

export default Result;