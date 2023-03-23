import React from 'react';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';

function Game() {
  return (
    <div className="container">
        <img className="logo"src={Logo} alt="Logo" />

        <div className="card">
          <div className="card-question">
              <h2 className="card-title">Pergunta 1 de 5</h2>
              <p className="question">Qual a melhor linguagem de programação?</p>
          </div>

          <div className="card-answer">
            
          </div>
        
       </div>



    </div>
  ) 
}

export default Game;