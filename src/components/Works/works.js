import React from 'react';
import './works.css';
import uom from '../../assets/university.png';
import wso2 from '../../assets/wso2.png';
import ta from '../../assets/ta.jpg';


const Works = () => {
  return (
    <section id="works">
      <span className="skillTitle">Education & Professional Experience</span>
            <span className="skillDesc">
                A quick overview of my academic background and career journey.
            </span>

      <div className="timeline">
        {/* Timeline item */}
        <div className="timelineItem">
          <div className="timelineImage">
            <img src={uom} alt="University of Moratuwa" />
          </div>
          <div className="timelineContent">
            <h3>BSc. Eng (Hons), Computer Science & Engineering</h3>
            <span>University of Moratuwa • 2022 - Present</span>
            <p>CGPA: 3.89 / 4.00</p>
          </div>
        </div>

        <div className="timelineItem">
          <div className="timelineImage">
            <img src={wso2} alt="WSO2" />
          </div>
          <div className="timelineContent">
            <h3>Software Engineer Intern</h3>
            <span>WSO2 • 2024 - 2025</span>
            <p>
              Designed and implemented an end-to-end workflow support system in WSO2 Identity Server
            </p>
          </div>
        </div>
        <div className="timelineItem">
          <div className="timelineImage">
            <img src={ta} alt="Teaching Assistant" />
          </div>
          <div className="timelineContent">
            <h3>Teaching Assistant</h3>
            <span>University of Moratuwa • 2025</span>
            <p>
              Assisted in teaching and mentoring students in Advanced Software Engineering courses.
            </p>
          </div>
        </div>

        {/* Add more items here */}
      </div>
    </section>

  )
}

export default Works
