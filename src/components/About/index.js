import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython, 
  faGolang
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='abt'>
          As a full-stack software developer, I am fueled by my passion for solving complex technical problems and finding the most efficient solutions. 
          </p>
          <p className='abt'>
          My skills in the MERN and PERN stacks are constantly evolving as I strive to implement cutting-edge features. My background in sales and real estate appraising has honed my ability to thrive in fast-paced environments and effectively utilize my skills.
          </p>
          <p className='abt'>
         
           I am on a mission to find roles where I can collaborate with others to research and develop front-end and back-end products that truly exceed customer expectations. My ultimate goal is to make a meaningful impact through our collective efforts and not just to complete tasks.
          </p>
          <br />
          <p align="LEFT" size="3X">
          Download Resume
          </p>
          <a className='res' target="blank" href="https://drive.google.com/file/d/1fSAsmUlhqDX9MNlhbb3S1Yg3GyHRSb-Y/view?usp=share_link">
            {' '}
            <FontAwesomeIcon icon={faFile} color="#EFD81D" size='3x' padding="5px"/>
         </a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGolang} color="5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
