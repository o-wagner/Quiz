import React from 'react';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';

function Home() {
  return (
    <div className="container">
        <h1 className="title">Bem vindo ao</h1>
        <img className="logo"src={Logo} alt="Logo" />
        <small className="description">Teste seus conhecimentos </small>
        <button className="btn-start">✔ Começar</button>
        
        <footer className="footer">
            <p>Criado por  
                <a href="https://github.com/o-wagner" target="_blank" rel="noreferrer" className="author"> Wagner Oliveira 🚬</a>
            </p>
        </footer>
    </div>
  ) 
}

export default Home;