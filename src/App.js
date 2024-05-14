import './App.css';
import Guitarra from './components/Guitarra'
import Piano from './components/Piano'
import Flauta from './components/Flauta'
import { useState } from 'react'

function App() {

  const[instrumento, setInstrumento] = useState(<Guitarra></Guitarra>)

  const setGuitarra = () => {
    setInstrumento(<Guitarra></Guitarra>)
  }

  const setPiano = () => {
    setInstrumento(<Piano></Piano>)
  }

  const setFlauta = () => {
    setInstrumento(<Flauta></Flauta>)
  }

  return (
    <div className='App container d-flex'>
      <div className='Instrument-selector container d-flex' id='Instrument-selector'>
        <button className='btn btn-secondary' onClick={setGuitarra}>Guitarra</button> 
        <button className='btn btn-secondary' onClick={setPiano}>Piano</button>
        <button className='btn btn-secondary' onClick={setFlauta}>Flauta</button>         
      </div>
      {instrumento}
      <footer>
        <p> Created by EnriqueLabrada </p>
        <div className='enlaces d-flex'>
          <a href='https://github.com/EnriqueLabrada' rel='noreferrer' target='_blank'><i className='bi bi-github'></i></a>
          <a href='https://www.linkedin.com/in/enrique-labrada-rivero-814b4927a/' rel='noreferrer' target='_blank'><i className='bi bi-linkedin'></i></a>
          <a href='https://www.instagram.com/enri_labrada?igsh=MWdnMHZobXNmZGVjbQ==' rel='noreferrer' target='_blank'><i class="bi bi-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
