import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import '../components/Navbar.css'

const Navbar = () => {

    const location = useLocation();
    const isHome = location.pathname === "/";
  return (

    <nav className="navbar">
        <h2 className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Yogesh.dev</Link>
        </h2>
        <ul>
            { isHome ? (
            <>
            <li><ScrollLink to="home" smooth={true} duration={500} offset={-210} >Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} offset={-140} >About Me</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500} offset={-20} >Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} offset={-90} >Contact</ScrollLink></li>
            </>
            ) : (
            <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </>
            )}
             
        </ul>
    </nav>
    
  )
}

export default Navbar