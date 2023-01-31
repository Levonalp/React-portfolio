
import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
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
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <img className="outline-logo" ref={outlineLogoRef} src={LogoS} alt="JavaScript, Developer" />  

    </div>
  )
}
export default Logo
