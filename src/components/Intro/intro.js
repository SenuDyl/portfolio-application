import React from 'react'
import './intro.css'
import bg from '../../assets/senuri_image.jpeg';
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaMedium} from "react-icons/fa";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className='introText'>I'm<span className='introName'> Senuri Mallikarachchi</span><br /> Full-stack Developer</span>
        <p className='introPara'>Crafting intuitive experiences, end to end.</p>
        <a
          href="/Senuri_Mallikarachchi_Resume.pdf"
          download
          className="resumeLink"
        >
          <button className="btn">
            <FiDownload className="btnIcon" />
            Download Resume
          </button>
        </a>
        {/* Social media icons */}
        <div className="socialLinks">
          <a href="https://github.com/SenuDyl" target="_blank" rel="noopener noreferrer">
            <FaGithub className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/senuri-mallikarachchi-33596b267/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="socialIcon" />
          </a>
          <a href="https://medium.com/@senurimallikarachchi" target="_blank" rel="noopener noreferrer">
            <FaMedium className="socialIcon" />
          </a>

        </div>

      </div>

      <img src={bg} alt="profile" className="bg" />


    </section >
  )
}

export default Intro;
