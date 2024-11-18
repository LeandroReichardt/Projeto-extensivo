import React from 'react';
import './css.css';
import logo from '/assets/IconeStudio.png';
import TattooGallery from './assets/components/TattooGallery';

function App() {
  return (
    <div className="App">
      <>
      <header className="header">
      <h1 id="titulo">Igor Salazar</h1>
        <nav id="head">
            <a href="index.html" class="button">Pagina incial</a>
        <img class="logo" src={logo} alt="Logo do Portfólio" className="logo" />
        <a href="contato.html" class="button">Contato</a>
        </nav>
      </header>
      </>
      <main>
        <TattooGallery />
      </main>
    </div>
  );
}

export default App;
