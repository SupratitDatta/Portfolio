import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faCodeMerge, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import "../css/skills.css";

function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        if (inView) {
            if (leftRef.current) {
                leftRef.current.style.transform = 'translateX(0)';
            }
            if (rightRef.current) {
                rightRef.current.style.transform = 'translateX(0)';
            }
        }
    }, [inView]);

    const skillIcons = [
        { src: "https://skillicons.dev/icons?i=c", alt: "C" },
        { src: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
        { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
        { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
        { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
        { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
        { src: "https://skillicons.dev/icons?i=sass", alt: "SASS" },
        { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
        { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap" },
        { src: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
        { src: "https://skillicons.dev/icons?i=typescript", alt: "TypeScript" },
        { src: "https://skillicons.dev/icons?i=react", alt: "React" },
        { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
        { src: "https://skillicons.dev/icons?i=redux", alt: "Redux" },
        { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
        { src: "https://skillicons.dev/icons?i=express", alt: "Express.js" },
        { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
        { src: "https://skillicons.dev/icons?i=php", alt: "PHP" },
        { src: "https://skillicons.dev/icons?i=postgresql", alt: "PostgreSQL" },
        { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
        { src: "https://skillicons.dev/icons?i=firebase", alt: "Firebase" },
        { src: "https://skillicons.dev/icons?i=androidstudio", alt: "Android Studio" },
        { src: "https://skillicons.dev/icons?i=kotlin", alt: "Kotlin" },
        { src: "https://skillicons.dev/icons?i=flask", alt: "Flask" },
        { src: "https://skillicons.dev/icons?i=django", alt: "Django" },
        { src: "https://skillicons.dev/icons?i=tensorflow", alt: "TensorFlow" },
        { src: "https://skillicons.dev/icons?i=scikitlearn", alt: "scikit-learn" },
        { src: "https://skillicons.dev/icons?i=figma", alt: "Figma" },
        { src: "https://skillicons.dev/icons?i=photoshop", alt: "Photoshop" },
        { src: "https://skillicons.dev/icons?i=linux", alt: "Linux" },
        { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
        { src: "https://skillicons.dev/icons?i=postman", alt: "Postman" },
        { src: "https://skillicons.dev/icons?i=gulp", alt: "Gulp" },
        { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
        { src: "https://skillicons.dev/icons?i=arduino", alt: "Arduino" },
    ];

    return (
        <section className="skill maincontainer" id="skill" ref={ref}>
            <div className="max-width">
                <h2 className="title">My S<span className="skills">kills</span></h2>
                <h4 className="subtitle"><span className="what">what</span> <span className="i">I</span> know</h4>

                <div className="skill-content">
                    <motion.div className='tech-know' ref={leftRef} initial={{ x: -100 }} animate={{ x: inView ? 0 : -100 }} transition={{ duration: 0.5 }}>
                        Techno<span className='logies'>logies :</span>
                    </motion.div>
                    <motion.div className='techno' ref={rightRef} initial={{ x: 100 }} animate={{ x: inView ? 0 : 100 }} transition={{ duration: 0.5 }}>
                        <div className="techno-grid">
                            {skillIcons.map((icon, index) => (
                                <motion.img
                                    key={index}
                                    className="techno-icon"
                                    src={icon.src}
                                    alt={icon.alt}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                />
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="skill-cards" initial={{ x: 100 }} animate={{ x: inView ? 0 : 100 }} transition={{ duration: 0.5 }}>
                        <motion.div
                            className="card"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="box">
                                <FontAwesomeIcon icon={faCode} />
                                <div className="text">DATA STRUCTURES</div>
                                <p>I have a good hand in Data Structures and Algorithm and a good knowledge in its theory.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="box">
                                <FontAwesomeIcon icon={faTerminal} />
                                <div className="text">FRONTEND DEVELOPMENT</div>
                                <p>Proficient in crafting engaging user interfaces and seamless user experiences using modern frontend technologies.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="box">
                                <FontAwesomeIcon icon={faDatabase} />
                                <div className="text">BACKEND DEVELOPMENT</div>
                                <p>Experienced in building APIs and managing databases for effective backend development</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="box">
                                <FontAwesomeIcon icon={faCodeMerge} />
                                <div className="text">UI/UX DESIGN</div>
                                <p>I have a good knowledge about UI design and its work process.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;