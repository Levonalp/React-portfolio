import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import Logo1 from '../../../assets/images/1.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    // do something with refs here
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        src="https://photos.app.goo.gl/C9puamnWGtvg2hPp8"
        alt="JavaScript,  Developer"
      />
    </div>
  )
}
export default Logo
