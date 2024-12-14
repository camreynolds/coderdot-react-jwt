import React from 'react'
import {Navbar} from "react-bootstrap"
import "./Header.css"

const Header = () => {
  return (
    <>
      <Navbar bg={token ? "primary" : "dark"} variant="dark" >

      </Navbar>
    </>
  )
}

export default Header