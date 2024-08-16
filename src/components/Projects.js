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
import project7 from "../assets/projectIcons/project7.png";
import project8 from "../assets/projectIcons/project8.png";
import project9 from "../assets/projectIcons/project9.png";
import "../css/projects.css";

const projects = [
    {
        "title": "Lights Out Game",
        "frameworks": "ReactJs, Javascript, HTML, CSS",
        "icon": project1,
        "date": "July 2023",
        "points": [
            "This is a game developed using ReactJs where a grid of lights are present.",
            "On clicking a light it turns on/off but its surrounding lights also switch their state.",
            "The user has to turn off all the lights to win.",
            "It has a responsive design and ensures cross-browser compatibility."
        ],
        "githubLink": "https://github.com/SupratitDatta/Lights-Out-Game"
    },
    {
        "title": "Wonder Ways",
        "frameworks": "ReactJS, CSS, Git",
        "icon": project2,
        "date": "August 2023",
        "points": [
            "Wonder Ways is an online Tourism Ticket booking website offering a wonderful dream destination packages for complete tours.",
            "Users can view various tourism packages, get to know the place, and get reviews from the website."
        ],
        "githubLink": "https://github.com/SupratitDatta/Wonder-Ways"
    },
    {
        "title": "Rail Ease",
        "frameworks": "HTML, CSS, PHP, SQL, Git",
        "icon": project3,
        "date": "September 2023",
        "points": [
            "Developed a convenient Train Ticket booking platform where users can book, cancel, and view their tickets.",
            "An admin panel is also present for admins to add or remove any Train."
        ],
        "githubLink": "https://github.com/SupratitDatta/Rail-Ease"
    },
    {
        "title": "Corona Detector from X-ray",
        "frameworks": "HTML, SASS, ReactJS, Python, TensorFlow, Git",
        "icon": project4,
        "date": "Nov 2023 - Dec 2023",
        "points": [
            "A collaborative project which utilizes a website interface where users upload rib X-rays to check the presence of COVID-19 infection showing you the most probable result with its probability.",
            "My contribution focused mainly on frontend development, seamlessly integrating it with the backend ML model through APIs."
        ],
        "githubLink": "https://github.com/SupratitDatta/"
    },
    {
        "title": "Restaurant Website",
        "frameworks": "ReactJs, CSS, SASS, Node.js, Express.js, MongoDB, Git",
        "icon": project5,
        "date": "Dec 2023",
        "points": [
            "Developed a restaurant website using the MERN stack that showcases various menus and dishes available, along with details about the restaurant.",
            "The site also allows users to book tables in advance, with reservations stored in MongoDB."
        ],
        "githubLink": "https://github.com/SupratitDatta/Restaurant-Website"
    },
    {
        "title": "Abhivyakti Website",
        "frameworks": "ReactJs, CSS, SASS, Node.js, Express.js, MongoDB, Git",
        "icon": project6,
        "date": "Dec 2023 - Jan 2024",
        "points": [
            "Played a major role in the development of the Abhivyakti website, the cultural fest of my college (IIIT,N).",
            "Developed the event page and profile page, added designs, and made contributions to the backend."
        ],
        "githubLink": "https://www.abhivyaktifest.in/home"
    },
    {
        "title": "Youtube Clone",
        "frameworks": "ReactJs, CSS, SASS, Git",
        "icon": project7,
        "date": "January 2024",
        "points": [
            "Developed a React-based YouTube clone featuring various types of video sections, channel visits, video playback, details, and a working search bar.",
            "Utilized an API to fetch a diverse range of videos displayed across various sections."
        ],
        "githubLink": "https://github.com/SupratitDatta/Youtube-Clone"
    },
    {
        "title": "Pulse News",
        "frameworks": "ReactJs, CSS, SASS, Node.js, Express.js, MongoDB, Git",
        "icon": project8,
        "date": "February 2024",
        "points": [
            "Developed a dynamic news platform using React.js, allowing users to access daily news updates fetched from a reliable API.",
            "Implemented a robust search feature enabling users to quickly find news articles based on keywords and topics.",
            "Designed a category section for easy navigation, helping users explore news across health, sports, technology, and entertainment."
        ],
        "githubLink": "https://github.com/SupratitDatta/Pulse-News"
    },
    {
        "title": "Ecommerce Website",
        "frameworks": "Next.js, TailwindCSS, Node.js, Express.js, MongoDB, Git",
        "icon": project9,
        "date": "March 2024 - April 2024",
        "points": [
            "Crafted an immersive e-commerce platform using Next.js & TailwindCSS for the front-end, showcasing an extensive selection of electronic gadgets.",
            "An admin panel allows seamless addition and management of products, categories, and orders.",
            "User and admin sign-in is enabled with Google Auth, allowing them to log in using their Google account."
        ],
        "githubLink": "https://github.com/SupratitDatta/"
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