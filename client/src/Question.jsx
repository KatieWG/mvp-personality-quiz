import React, { useState, useEffect } from 'react';
import { questionData } from './QuestionData.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #f5f5f5;
  outline: 2px solid #3a3b3c;
  padding: 25px;
  font-size: 1.3em;
  border-radius: 30px;
  margin-top: 50px;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
  background: #F7F3F9;
  }
  body#tinymce {
    background: #FFFFFF
  }
`;
const ChoiceButton1 = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 75%;
  padding: 5px;
  margin-bottom: 4px;
  font-size: .9em;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #8E5CFF;
    outline: 1px solid #8E5CFF;
    border-color: #8E5CFF;
  }
`;
const ChoiceButton2 = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 75%;
  padding: 5px;
  font-size: .9em;
  margin-bottom: 4px;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #FF616B;
    outline: 1px solid #FF616B;
    border-color: #FF616B;
  }
`;
const ChoiceButton3 = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 75%;
  font-size: .9em;
  padding: 5px;
  margin-bottom: 4px;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #E488FF;
    outline: 1px solid #E488FF;
    border-color: #E488FF;
  }
`;
const ChoiceButton4 = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 75%;
  padding: 5px;
  margin-bottom: 4px;
  border-radius: 5px;
  font-size: .9em;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #80C7FF;
    outline: 1px solid #80C7FF;
    border-color: #80C7FF;
  }
`;
const ChoiceButton5 = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 75%;
  padding: 5px;
  margin-bottom: 4px;
  border-radius: 5px;
  font-size: .9em;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #8CFF85;
    outline: 1px solid #8CFF85;
    border-color: #8CFF85;
  }
`;
const NextButton = styled.button`
  background-color: #f5f5f5;
  outline: 1px solid #3a3b3c;
  width: 40%;
  padding: 5px;
  font-size: 1em;
  border-radius: 5px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: -.8px;
  word-spacing: 4.6px;
  font-weight: 300;
  text-decoration: none solid rgb(68, 68, 68);
  font-variant: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: #0077ed;
    outline: 1px solid #0077ed;
    border-color: #0077ed;
  }
`;

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
    <StyledDiv>
      <h4>{currentQuestion.number + 1}. {currentQuestion.question}</h4>
      <ChoiceButton1 onClick={() => updateScore(scoreSheet[0].score, 0)}>{currentQuestion.answers[0]}</ChoiceButton1>
      <br />
      <ChoiceButton2 onClick={() => updateScore(scoreSheet[1].score, 1)}>{currentQuestion.answers[1]}</ChoiceButton2>
      <br />
      <ChoiceButton3 onClick={() => updateScore(scoreSheet[2].score, 2)}>{currentQuestion.answers[2]}</ChoiceButton3>
      <br />
      <ChoiceButton4 onClick={() => updateScore(scoreSheet[3].score, 3)}>{currentQuestion.answers[3]}</ChoiceButton4>
      <br />
      <ChoiceButton5 onClick={() => updateScore(scoreSheet[4].score, 4)}>{currentQuestion.answers[4]}</ChoiceButton5>
      <br />
      <br />
      { questionNumber === 6 ?
      <NextButton onClick={findHighestScore}>End quiz and see result</NextButton> :
      <NextButton onClick={() => changeQuestion(questionNumber)}>Next question</NextButton>
      }
    </StyledDiv>
    </div>
  )
}

export default Question;