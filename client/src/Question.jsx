import React, { useState, useEffect } from 'react';
import { questionData } from './QuestionData.js';

const Question = ({ changeStatus, scoreSheet, findHighestScore }) => {
  const [theme, setTheme] = useState('')
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questionData[questionNumber])

  const changeQuestion = (number) => {
    console.log('number', number)
    if (number < 6) {
      setQuestionNumber(number + 1);
      setCurrentQuestion(questionData[questionNumber])
    }
  }

  const updateScore = (score, index) => {
    scoreSheet[index].score = score + 1;
    console.log('current scoreSheet: ', scoreSheet)
  }

  return (
    <div>
      <h2>Question {currentQuestion.number + 1} / 6</h2>
    <div>
      <h4>{currentQuestion.number + 1}. {currentQuestion.question}</h4>
      <button onClick={() => updateScore(scoreSheet[0].score, 0)}>{currentQuestion.answers[0]}</button>
      <br />
      <button onClick={() => updateScore(scoreSheet[1].score, 1)}>{currentQuestion.answers[1]}</button>
      <br />
      <button onClick={() => updateScore(scoreSheet[2].score, 2)}>{currentQuestion.answers[2]}</button>
      <br />
      <button onClick={() => updateScore(scoreSheet[3].score, 3)}>{currentQuestion.answers[3]}</button>
      <br />
      <button onClick={() => updateScore(scoreSheet[4].score, 4)}>{currentQuestion.answers[4]}</button>
      <br />
      <br />
      { questionNumber === 6 ?
      <button onClick={findHighestScore}>End quiz and see result</button> :
      <button onClick={() => changeQuestion(questionNumber)}>Next question</button>
      }
    </div>
    </div>
  )
}

export default Question;