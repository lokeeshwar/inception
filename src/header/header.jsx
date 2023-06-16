import React from 'react'
import Navbar from './navbar/navbar';
import Logo from './logo/logo';
import './header.css'

export default function Header() {
  return (
    <div id='header'>
      <Logo/>
      <Navbar/>
    </div>
  )
}
