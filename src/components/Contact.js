import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/contact.css";

function Contact() {

    const notify = (evt) => {
        if (evt === true) {
            toast.success("Message sent successfully", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error("Failed to send message", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: "",
                theme: "colored",
            });
        }
    }

    const { ref, inView } = useInView();
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const formRef = useRef();
    const [, setError] = useState(false);
    const [, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_supra', 'template_suphere', formRef.current, {
            publicKey: '3bGDQpXtdELAT5GXB',
        }).then(
            () => {
                setSuccess(true);
                notify(true);
                formRef.current.reset();
            },
            (error) => {
                setError(true);
                notify(false);
                console.log('FAILED...', error.text);
            },
        );
    };

    useEffect(() => {
        if (inView) {
            animateLeft();
            animateRight();
        }
    }, [inView]);

    const animateLeft = () => {
        if (leftRef.current) {
            leftRef.current.style.transform = 'translateX(0)';
        }
    };

    const animateRight = () => {
        if (rightRef.current) {
            rightRef.current.style.transform = 'translateX(0)';
        }
    };

    return (
        <section className="contact maincontainer" id="contact" ref={ref}>
            <div className="max-width">
                <h2 className="title">Con<span className="me">tact</span></h2>
                <h4 className="subtitle"><span className="connect">Get I</span><span className="with">n T</span>ouch</h4>

                <div className='contact-data'>
                    <motion.div className='contact-left' ref={leftRef} initial={{ x: -100 }} animate={{ x: inView ? 0 : -100 }} transition={{ duration: 0.5 }}>
                        {/* <h1 className='get'>Get I<span className="touch">n Touch</span></h1> */}
                        <p>Thank you for visiting my profile. If you're interested in connecting, collaborating, or looking to hire me, please feel free to send me an email.</p>
                        {/* <div className="user icons">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <div className="details">
                                <h1>NAME</h1>
                                <h2>Supratit Datta</h2>
                            </div>
                        </div> */}
                        <div className="email icons">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <div className="details">
                                <h1>EMAIL</h1>
                                <h2>supratit@gmail.com</h2>
                            </div>
                        </div>
                        <div className="phoneno icons">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <div className="details">
                                <h1>PHONE NO</h1>
                                <h2>+91 9875324347</h2>
                            </div>
                        </div>
                        <div className="address icons">
                            <FontAwesomeIcon icon={faLocationDot} className="icon" />
                            <div className="details">
                                <h1>LOCATION</h1>
                                <h2>Kolkata, India</h2>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="contact-right" ref={rightRef} initial={{ x: 100 }} animate={{ x: inView ? 0 : 100 }} transition={{ duration: 0.5 }}>
                        <form className="form-data" method="POST" action='#' ref={formRef} onSubmit={sendEmail} >
                            <div className="field name">
                                <input type="text" placeholder="Name" required name="name"></input>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required name="email"></input>
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="8" placeholder="Message..." required name="message"></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit" className='send-button'>Send</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <div className="footer">
                <span>Created By <a href='https://github.com/SupratitDatta/' target='_blank' rel="noopener noreferrer">Supratit Datta</a> | <FontAwesomeIcon className="copyright icon" icon={faCopyright} /> 2024</span>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Contact;