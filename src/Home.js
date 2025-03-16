import React from 'react';
import { Link } from 'react-router-dom';
import officeImage from '../assets/office.jpg'; // You'll need to add an office image
import ladyJusticeImage from '../assets/lady-justice.jpg'; // Add the statue image

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradiant-to-r from-black to-transparent opacity-90"></div>
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${officeImage})` }}
        >
          <div className="relative z-10 text-white h-full flex flex-col justify-center px-12 max-w-4xl">
            <h1 className="text-5x1 font-bold mb-4">Välkommen till<br />Juristbyrå VICO</h1>
            <p className="text-xl mb-8">Juristbyrå VICO - vägen till din rättvisa</p>

            <div className="mt-8">
              <p className="mb-2">Stadiongatan 65, 217 62 Malmö</p>
              <p className="mb-6">0793397487</p>

              <div className="flex space-x-4">
                <Link to="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
                  Kontakta oss
                </Link>
                <Link to="/tjanster" className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded">
                  Läs mer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl font-bold mb-6">Juristbyrå VICO</h2>
            <h3 className="text-2xl mb-6">Detta är vi</h3>
            <p className="mb-4">
              Vi erbjuder högkvalitativ juridisk rådgivning på svenska, albanska och
              engelska. Med vår expertis inom olika rättsområden strävar vi efter att
              leverera skräddarsydda lösningar och bästa resultat för våra klienter.
            </p>
          </div>
        </div>
      </div>
      )
}