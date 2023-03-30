import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';

function Score({ score }) {
const navigate = useNavigate();

function restart(){
  return navigate('/');
}

const messages = {
  0: 'Você não sabe nada de REACT 😒',
  1: 'Você sabe muito pouco sobre REACT 🤔',
  2: 'Você um pouco sobre REACT 🤨',
  3: 'Você está no caminho 😋',
  4: 'Você é muito bom nisso 😎',
  5: 'Você trabalha com isso????'
}

  return (
    <div className="container">
        <h1 className="title">Pontuação</h1>
        <img className="logo"src={Logo} alt="Logo" />
        <small className="description">{ score ? messages[score] : messages[5]}</small>

        <div className="score-container">
          <big className="score">{ score ? score : 5 }</big>
          <small className='total'>/5 </small>
        </div>

        <button onClick={restart} className="btn-restart">✔ Reiniciar</button>
        
        <footer className="footer">
            <p>Criado por  
                <a href="https://github.com/o-wagner" target="_blank" rel="noreferrer" className="author"> Wagner Oliveira 🚬</a>
            </p>
        </footer>
    </div>
  ) 
}

export default Score;