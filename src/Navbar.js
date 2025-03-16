import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vico-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Juristbyrå VICO" className="h-12" />
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="text-black hover:text-gray-600 font-medium">
          Hem
        </Link>
        <Link></Link>
      </div>
    </nav>
  )
}