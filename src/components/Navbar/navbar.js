import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; 
import contactImg from '../../assets/contact.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopListMenuItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopListMenuItem">Skills</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopListMenuItem">Experience</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopListMenuItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="contactImg" className="desktopMenuImg" />Contact Me
      </button>

      {/* Mobile menu icon (visible only on small screens) */}
      <FaBars
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
        style={{ color: '#6EACDA', fontSize: '30px', cursor: 'pointer' }}
      />

      {/* Mobile menu (hidden by default, shown when 'showMenu' state is true) */}
      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListMenuItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListMenuItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListMenuItem" onClick={() => setShowMenu(false)}>Experience</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="ListMenuItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListMenuItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
