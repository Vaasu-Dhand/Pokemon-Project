import React from 'react';
import logo from '../Images/Logo.svg'

export default function NavBar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" className="logo" />
      </nav>
    </div>
  )
}
