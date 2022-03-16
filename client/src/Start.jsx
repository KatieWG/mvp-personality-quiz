import React, { useState, useEffect } from 'react';

const Start = ({ changeStatus }) => {
  const [theme, setTheme] = useState('friendship')

  useEffect(() => {
  }, []);


  return (
    <div>
      <h4>Take this quiz to find the perfect starter anime for your personality!</h4>
      <button onClick={changeStatus}>Start</button>
    </div>
  )

}

export default Start;