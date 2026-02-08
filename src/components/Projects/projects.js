import React from 'react';
import './projects.css';
import workflow from '../../assets/workflow_support.png';
import connetor from '../../assets/connector.png';
import soundedge from '../../assets/soundedge.png';
import silentmate from '../../assets/silentmate.png';
import wevote from '../../assets/wevote.png';
import everglow from '../../assets/everglow.png';
import trippin from '../../assets/trippin.jpg';

const projects = [
  {
    title: 'Workflow Support System',
    subtitle: 'Workflow Support System for WSO2 Identity Server',
    description: 'An end-to-end workflow support system, replacing the built-in BPS engine with a simplified solution to handle long running user operation workflows.',
    techStack: ['Java', 'React', 'Maven'],
    github: 'https://github.com/your-github/socialpedia',
    imageUrl: workflow,
  },
  {
    title: 'Hubspot Connector',
    subtitle: 'HubSpot Ballerina Marketing Subscription Connector',
    description: 'An open-source Ballerina connector for HubSpot Marketing Subscriptions to manage subscription preferences via REST endpoints.',
    techStack: ['Ballerina', 'REST APIs'],
    github: 'https://github.com/ballerina-platform/module-ballerinax-hubspot.marketing.subscriptions',
    live: 'https://central.ballerina.io/ballerinax/hubspot.marketing.subscriptions/2.0.0',
    imageUrl: connetor,
  },
  {
    title: 'SoundEdge',
    subtitle: 'Efficient Deep Learning for Environmental Sound Classification',
    description: 'A high-performance deep learning model for environmental sound classification using lightweight architectures',
    techStack: ['Pytorch', 'torchaudio', 'Librosa'],
    github: 'https://github.com/your-github/socialpedia',
    imageUrl: soundedge,
  },
  {
    title: 'SilentMate',
    subtitle: 'Context-aware Mobile Application for Automated Sound Profile Management',
    description: 'A mobile application that automatically adjusts device sound profiles based on user context and environment.',
    techStack: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/SenuDyl/SilentMate---A-Context-Aware-Mobile-Application-for-Automated-Sound-Profile-Management',
    imageUrl: silentmate,
  },
  {
    title: 'WeVote',
    subtitle: 'Cryptographically Secure Online Voting System',
    description: 'A secure and verifiable online voting system, including voter registration, vote encryption, ballot casting, and results tallying processes.',
    techStack: ['Next.js', 'React Native', 'FastAPI', 'MySQL'],
    github: 'https://github.com/DinithiLiyanage/WeVote',
    imageUrl: wevote,
  },
  {
    title: 'EverGlow',
    subtitle: 'Skincare E-commerce Platform',
    description: 'A full-stack, microservices-based skincare e-commerce platform with scalable backend services.',
    techStack: ['React', 'Node.js', 'Express', 'Springboot', 'PostgreSQL'],
    github: 'https://github.com/SenuDyl/mern-skin-care-store',
    imageUrl: everglow,
  },
  {
    title: 'Trippin',
    subtitle: 'Travel Planning and Booking Application',
    description: 'A MERN comprehensive travel planning and booking application with itinerary management and user reviews.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/SenuDyl/react-hotel-booking-app-trippin',
    imageUrl: trippin,
  },
];


const Projects = () => {
  return (
    <section id="projects">
      <span className="skillTitle">Projects</span>
      <span className="skillDesc">
        Turning Ideas into Practical Outcomes.
      </span>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              {/* Render the Tech Stack */}
              <div className="tech-stack">
                {/* <strong>Tech Stack:</strong> */}
                <ul>
                  {project.techStack?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
                {
                  project.live && (
                    <>
                      <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> Live
                      </a>
                    </>
                  )
                }
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Projects;
