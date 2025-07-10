import React from 'react'
import './Footer.css'

function Footer(props) {
  return (
    <div className="footer-container">
        <p> {props.paragraf} <props className="year">{new Date().getFullYear()}</props> {props.author}</p>
    </div>
  )
}

export default Footer
