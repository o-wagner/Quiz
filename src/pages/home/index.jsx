import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';

function Home() {
const navigate = useNavigate();

function start(){
  return navigate('/game');
}
  return (
    <div className="container">
        <h1 className="title">Bem vindo ao</h1>
        <img className="logo"src={Logo} alt="Logo" />
        <small className="description">Teste seus conhecimentos </small>
        <button onClick={start} className="btn-start">✔ Começar</button>
        
        <footer className="footer">
            <p>Criado por  
                <a href="https://github.com/o-wagner" target="_blank" rel="noreferrer" className="author"> Wagner Oliveira 🚬</a>
            </p>
        </footer>
    </div>
  ) 
}

export default Home;