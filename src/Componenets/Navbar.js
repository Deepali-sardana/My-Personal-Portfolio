import React, { useState } from 'react';
import './Design.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Deepali's Portfolio<i className="fa-solid fa-headset fa-lg" style={{ color: "#21BDA9" }}></i></Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{color:"#21bdbf"}}>
            {isOpen ? <span>&#10006;</span> : <span className="navbar-toggler-icon" style={{color:"white"}}></span>}
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent" style={{justifyContent:"end"}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/project">Projects</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href='mailto:deepalisardana1234@gmail.com'>
                  <i className="fa-solid fa-envelopes-bulk  fa-2xl" style={{ color: "white" }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
