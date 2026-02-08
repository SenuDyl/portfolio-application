import React from 'react'
import './skills.css';
import {
    FaJava,
    FaJs,
    FaPython,
    FaGit,
    FaLinux,
    FaDocker,
    FaReact,
    FaNodeJs,
    FaLayerGroup,
    FaUserShield
} from "react-icons/fa";
import { SiC, SiCplusplus, SiMicrodotblog } from "react-icons/si";

import {
    SiTypescript,
    SiSpringboot,
    SiPytorch,
    SiMysql,
    SiSqlite,
    SiPostgresql,
    SiMongodb
} from "react-icons/si";


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Technical Expertise</span>
            <span className="skillDesc">
                Committed to learning, adapting, and building better solutions.
            </span>


            <div className="skillCategory">
                {/* <h3>Programming Languages</h3> */}
                <div className="skillGrid">
                    <div className="skillTile">
                        <FaJava className="icon java" />
                        <span>Java</span>
                    </div>
                    <div className="skillTile">
                        <FaJs className="icon js" />
                        <span>JavaScript</span>
                    </div>
                    <div className="skillTile">
                        <SiTypescript className="icon ts" />
                        <span>TypeScript</span>
                    </div>
                    <div className="skillTile">
                        <FaPython className="icon python" />
                        <span>Python</span>
                    </div>
                    <div className="skillTile">
                        <SiC className="icon c" />
                        <span>C</span>
                    </div>
                    <div className="skillTile">
                        <SiCplusplus className="icon cpp" />
                        <span>C++</span>
                    </div>

                </div>
            </div>

            <div className="skillCategory">
                {/* Frameworks */}
                {/* <h3>Frameworks</h3> */}
                <div className="skillGrid">
                    <div className="skillTile">
                        <FaReact className="icon react" />
                        <span>React.js</span>
                    </div>
                    <div className="skillTile">
                        <FaNodeJs className="icon node" />
                        <span>Node.js</span>
                    </div>
                    <div className="skillTile">
                        <SiSpringboot className="icon spring" />
                        <span>Spring Boot</span>
                    </div>
                    <div className="skillTile">
                        <SiPytorch className="icon pytorch" />
                        <span>PyTorch</span>
                    </div>
                </div>
            </div>

            {/* Databases */}
            <div className="skillCategory">
                {/* <h3>Databases</h3> */}
                <div className="skillGrid">
                    <div className="skillTile">
                        <SiMysql className="icon mysql" />
                        <span>MySQL</span>
                    </div>
                    <div className="skillTile">
                        <SiSqlite className="icon sqlite" />
                        <span>SQLite</span>
                    </div>
                    <div className="skillTile">
                        <SiPostgresql className="icon postgres" />
                        <span>PostgreSQL</span>
                    </div>
                    <div className="skillTile">
                        <SiMongodb className="icon mongodb" />
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>

            {/* Tools */}
            <div className="skillCategory">
                {/* <h3>Tools</h3> */}
                <div className="skillGrid">
                    <div className="skillTile">
                        <FaGit className="icon git" />
                        <span>Git</span>
                    </div>
                    <div className="skillTile">
                        <FaLinux className="icon linux" />
                        <span>Linux</span>
                    </div>
                    <div className="skillTile">
                        <FaDocker className="icon docker" />
                        <span>Docker</span>
                    </div>
                </div>
            </div>
            {/* Technical Fields */}
            <div className="skillCategory">
                {/* <h3>Technical Fields</h3> */}
                <div className="skillGrid">
                    <div className="skillTile">
                        <FaLayerGroup className="icon fullstack" />
                        <span>Full Stack Development</span>
                    </div>
                    <div className="skillTile">
                        <SiMicrodotblog className="icon microservices" />
                        <span>Microservices</span>
                    </div>
                    <div className="skillTile">
                        <SiPytorch className="icon ml" />
                        <span>Machine Learning</span>
                    </div>
                    <div className="skillTile">
                        <FaUserShield className="icon iam" />
                        <span>Identity & Access Management</span>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Skills
