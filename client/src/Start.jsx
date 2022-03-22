import React, { useState, useEffect } from 'react';

const Start = ({ changeStatus }) => {
  const [theme, setTheme] = useState('friendship')

  return (
    <div>
      <h2>Anime Personality Test</h2>
        <div>
          <h4>How well do you know yourself? <br/><br/>Let our AI tell you the perfect starter anime for your personality...</h4>
          <button onClick={changeStatus}>Start</button>
        </div>
    </div>
  )

}

export default Start;