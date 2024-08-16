import React, { useEffect, Suspense } from 'react';
import Typed from 'typed.js';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "../css/home.css";
import rocket from "../assets/rocket.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
    useEffect(() => {
        const typed = new Typed(".typing", {
            strings: ["Coder", "Web Developer", "Designer", "Footballer"],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home maincontainer" id="home">
            <nav className="social-nav">
                <ul>
                    <li><a href="https://www.linkedin.com/in/supratit-datta-1b902b258" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i><span>LinkedIn</span></a></li>
                    <li><a href="https://twitter.com/Supratit_datta" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i><span>Twitter</span></a></li>
                    <li><a href="https://github.com/SupratitDatta" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><span>GitHub</span></a></li>
                    <li><a href="https://www.instagram.com/its_supratit_here?igsh=MWJuMXNjZG5xNGRiOA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i><span>Instagram</span></a></li>
                </ul>
            </nav>

            <div className="max-width left">
                <div className="home-detail">
                    <div className="detail-1">Hello There 👋, I'm</div>
                    <div className="detail-2">Supratit Datta</div>
                    <div className="detail-3">And I'm a <span className="typing"></span></div>
                    <div className="btn">
                        <a href="#about">Know Me</a>
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
            <div className='right'>
                <Canvas className='threesphere'>
                    <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.5}>
                            <MeshDistortMaterial
                                color="#7a06d3"
                                attach="material"
                                distort={0.5}
                                speed={3}
                            />
                        </Sphere>
                    </Suspense>
                </Canvas>
                <img className='rocketpic' src={rocket} alt="Rocket"></img>
            </div>
            <div className="night">
                <div className="shooting_star"></div>
                <div className="shooting_star"></div>
                <div className="shooting_star"></div>
                <div className="shooting_star"></div>
            </div>
        </section>
    );
}

export default Home;