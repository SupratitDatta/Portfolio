import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project1 from "../assets/projectIcons/project1.png";
import project2 from "../assets/projectIcons/project2.png";
import project3 from "../assets/projectIcons/project3.png";
import project4 from "../assets/projectIcons/project4.png";
import project5 from "../assets/projectIcons/project5.png";
import project6 from "../assets/projectIcons/project6.png";
import "../css/projects.css";

const projects = [
    {
        "title": "Profit Pulse",
        "frameworks": "React, Javascript, CSS, Python, TensorFlow, Node.js, Git",
        "date": "July 2024",
        "icon": project1,
        "points": [
            "A web application where traders can input their data to receive Reorder Point (ROP), Return on Investment (ROI), and Stock analysis using an ML model.",
            "Integrated the client-side with the model through APIs.",
            "Developed features for data input, real-time analysis, and user authentication using Firebase for secure access."
        ],
        "githubLink": "https://github.com/SupratitDatta/Profit-Pulse"
    },
    {
        "title": "Novel Net",
        "frameworks": "React Native, TypeScript, TailwindCSS, Expo, Git",
        "date": "June 2024",
        "icon": project2,
        "points": [
            "An online book app where users can read books, explore a variety of genres, and add them to their favorites.",
            "Implemented an intuitive book browsing feature that increased user engagement by enabling seamless navigation through 100+ titles.",
            "Developed a favorites management system for personalized experiences."
        ],
        "githubLink": "https://github.com/SupratitDatta/Novel-Net"
    },
    {
        "title": "Pristine",
        "frameworks": "React, TypeScript, SCSS, Node.js, Express.js, MongoDB, Firebase, Leaflet, Git",
        "date": "May 2024",
        "icon": project3,
        "points": [
            "A Real Estate website that allows users to browse a variety of properties (50+) available for rent or purchase.",
            "Users can log in using integrated Firebase Authentication, select properties, view details and images, explore maps, and post their own listings."
        ],
        "githubLink": "https://github.com/SupratitDatta/Pristine"
    },
    {
        "title": "Tech Trove",
        "frameworks": "Next.js, TailwindCSS, Node.js, MongoDB, NextAuth, Cloudinary, Git",
        "date": "March 2024",
        "icon": project4,
        "points": [
            "Crafted an immersive e-commerce platform featuring a wide selection of electronic gadgets, organized into categories and sections with search filters.",
            "Integrated NextAuth for user authentication, enabling users to log in, add products to the cart, and make purchases.",
            "Created an admin panel for managing products and categories, including adding, updating, removing items, viewing orders, and checking payment status."
        ],
        "githubLink": "https://github.com/SupratitDatta"
    },
    {
        "title": "Pulse News",
        "frameworks": "React, Javascript, CSS, Git",
        "date": "January 2024",
        "icon": project5,
        "points": [
            "An interactive website offering real-time news updates across multiple categories with accurate source and date.",
            "Includes a search bar and categorized sections for personalized, user-specific news content."
        ],
        "githubLink": "https://github.com/SupratitDatta/Pulse-News"
    },
    {
        "title": "Rail Ease",
        "frameworks": "HTML, CSS, PHP, SQL, Git",
        "icon": project6,
        "date": "December 2023",
        "points": [
            "Developed a convenient Train Ticket booking platform where users can book, cancel, and view their tickets.",
            "An admin panel is also present for admins to add or remove any Train."
        ],
        "githubLink": "https://github.com/SupratitDatta/Rail-Ease"
    }
];

const ExperienceCard = ({ projects }) => {
    return (
        <VerticalTimelineElement className="vertical-element"
            contentStyle={{ background: "#222", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid crimson" }}
            date={<span className="timeline-date">{projects.date}</span>}
            icon={
                <div className=''>
                    <img src={projects.icon} alt={projects.title} className='project-icon' />
                </div>
            }>
            <div className="project-details">
                <h3 className="project-title">{projects.title}
                    <a href={projects.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                        <FontAwesomeIcon icon={faGithub} className="github-icon" />
                    </a>
                </h3>
                <p className="project-framework" style={{ margin: 0 }}> {projects.frameworks} </p>
            </div>
            <ul className="project-points">
                {projects.points.map((point, index) => (
                    <li key={`projects-point-${index}`} className="pnt"> {point} </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

function Projects() {
    return (
        <section className="project maincontainer" id="project">
            <div className="max-width">
                <h2 className="title">Pro<span className="pro">jects</span></h2>
                <h4 className="subtitle"><span className="what">What I</span> <span className="created">have</span> created</h4>
            </div>
            <div className='vertical-projects'>
                <VerticalTimeline>
                    {projects.map((projects, index) => (
                        <ExperienceCard
                            key={`projects-${index}`}
                            projects={projects}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Projects;