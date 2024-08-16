import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import "../css/about.css";
import profilepic from "../assets/profilepic.jpg";

const data = [
    "Web  Design",
    "API Handling",
    "Illustration",
    "Development",
    "Data Structures",
];

const ListItem = styled(motion.li)`
    ::after {
        text-transform: uppercase;
        content: "${(props) => props.text.toLocaleUpperCase()}";
    }
`;

function About() {
    return (
        <section className="about maincontainer" id="about">
            <div className="max-width">
                <h2 className="title">Over<span className="view">view</span></h2>
                <h4 className="subtitle"><span className="who">who</span> <span className="i">I</span>am</h4>
                <div className="about-content">
                    <div className="left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='my-details'>
                            <img src={profilepic} className='profile-picture' alt="Profile"></img>
                            <p className='about-me'>
                                I am an Enthusiastic Full Stack Developer specializing in the MERN stack. With experience in front-end and back-end development, I can craft dynamic web applications tailored to meet diverse project needs.I am Passionate about continuous learning and collaborative teamwork, I thrive in creating scalable and innovative solutions to bring your dreams to action.
                            </p>
                        </div>
                    </div>
                    <div className="right"
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="designs">
                            <ul className='items'>
                                {data.map((item) => (
                                    <ListItem key={item} text={item}>
                                        {item.toLocaleUpperCase()}
                                    </ListItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;