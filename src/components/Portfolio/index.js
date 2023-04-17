import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import bookStore from '../../assets/images/bookStore.png'
import cityBook from '../../assets/images/cityBook.png'
import dogShow from '../../assets/images/dogShow.png'
import port from '../../assets/images/portfolio.png'
import notesApp from '../../assets/images/notesApp.png'
import traveLog from '../../assets/images/traveLog.png'
import Realtor from '../../assets/images/Realtorhelper.png'
import ReactP from '../../assets/images/React.png'
import SupportDesk from '../../assets/images/SupportDesk.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {}, [])

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
          <div className="img-container">
            <img src={SupportDesk} alt="SupportDesk" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/supportDesk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://lasupportdesk.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={bookStore} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/bookStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://react-bookstore.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={traveLog} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/Travel-Log-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://www.loom.com/share/2b7a8c8eaf884a08bcd225c79e78ddde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>

          <div className="img-container">
            <img src={notesApp} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/Notepad_api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://blooming-oasis-43438.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={dogShow} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/dog_project4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://urldogshowback.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={port} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://6369af711cf693453eb2e670--transcendent-fenglisu-a3a9fb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={cityBook} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/project-3-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://twitter-clone-frontend123.herokuapp.com/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={Realtor} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/Full-crud-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://www.loom.com/share/67bac857a0d64787ac48e5788f9e3264"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={ReactP} alt="bookStore" />
            <div className="btns">
              <a
                href="https://github.com/Levonalp/React-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              <a
                href="https://levonalshabi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
