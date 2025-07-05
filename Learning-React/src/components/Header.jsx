import React from 'react'

function Header(props) {
  return (
    <header>
        <title>{props.tiitle}</title>
        <h1>{props.judul}</h1>
    </header>
  )
}

export default Header
