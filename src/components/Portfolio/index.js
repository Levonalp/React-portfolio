import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import bookStore from '../../assets/images/bookStore.png'
import cityBook from '../../assets/images/cityBook.png'
import dogShow from '../../assets/images/dogShow.png'
import port from '../../assets/images/portfolio.png'
import notesApp from '../../assets/images/notesApp.png'
import traveLog from '../../assets/images/traveLog.png'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
    }, []);



    return (
      <>
        <div className="container portfolio-page">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <div className="container-fluid d-fluid">
  <div class="img-container">
    <img src={bookStore} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/bookStore">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
  <div class="img-container">
    <img src={traveLog} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/Travel-Log-React">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
  <div class="img-container">
    <img src={notesApp} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/Notepad_api">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
  <div class="img-container">
    <img src={dogShow} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/dog_project4">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
  <div class="img-container">
    <img src={port} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/Portfolio">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
  <div class="img-container">
    <img src={cityBook} alt="bookStore" />
    <div class="btns">
      <a href="https://github.com/Levonalp/project-3-backend">
        <button class="btn">GitHub</button>
      </a>
       </div>
  </div>
</div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Portfolio;