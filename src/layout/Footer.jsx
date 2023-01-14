import React from 'react'
import './Footer.scss'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <p className="align-item-center">
        <FaCopyright />
        {new Date().getFullYear()} Powered by Retrospective Wall
      </p>
    </div>
  )
}

export default Footer
