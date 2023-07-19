import { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faGolang,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import proimg from '../../assets/images/1.jpg'

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
        <div className="half-width">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p className="abt">
              As a full-stack software developer, I am fueled by my passion for
              solving complex technical problems and finding the most efficient
              solutions.
            </p>
            <p className="abt">
              My skills in the MERN and PERN stacks are constantly evolving as I
              strive to implement cutting-edge features. My background in sales
              and real estate appraising has honed my ability to thrive in
              fast-paced environments and effectively utilize my skills.
            </p>
            <p className="abt">
              I am on a mission to find roles where I can collaborate with
              others to research and develop front-end and back-end products
              that truly exceed customer expectations. My ultimate goal is to
              make a meaningful impact through our collective efforts and not
              just to complete tasks.
            </p>
            <br />
          </div>
        </div>

        <div>
          <div className="half-width image-zone">
            <img className="proimg" src={proimg}></img>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
