import React, { useState, useEffect } from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/quiz.png';
import { questions, shuffle } from '../../database/questions';




function Game() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsSelected, setQuestionsSelected] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);


  useEffect(() => {
    if (questionsSelected.length > 0)
      return;

    const shuffledQuestions = shuffle(questions);
    const selectedQuestions = shuffledQuestions.slice(0,5);
    setQuestionsSelected(selectedQuestions);
  },[questionsSelected])


  return (
    <div className="container">
        <img className="logo"src={Logo} alt="Logo" />

        <div className="card">
          <div className="card-question">
              <h2 className="card-title">Pergunta 1 de 5</h2>
              <p className="question">Qual a melhor linguagem de programação?</p>
          </div>

          <div className="card-answer">
            <div className="card-options">
              <button className="card-option">
                C++
              </button>
              <button className="card-option">
                JavaScript
              </button>
              <button className="card-option">
                Python
              </button>
              <button className="card-option">
                Java
              </button>
              <button className="card-option">
                C#
              </button>
            </div>
          </div>
        
       </div>



    </div>
  ) 
}

export default Game;