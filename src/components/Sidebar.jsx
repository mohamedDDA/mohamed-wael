import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Brands
import {
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

// Solid (required)
import {
  faEnvelope,

} from "@fortawesome/free-solid-svg-icons";


const socialLinks = [
  { icon: faEnvelope, url: "mailto:mohammed.web.dev1@gmail.com", label: "email" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/mohamed-wael-035423264", label: "LinkedIn" },
  { icon: faWhatsapp, url: "https://wa.me/+201099452977", label: "Whatsapp" },
];
const Sidebar = ({ className = '' }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="brand">
        <h1 className="typing">
          &lt;Mohamed <span className="brand-accent">Wael/&gt;</span>
        </h1>
      </div>
      <div className="profile-card">
        <div className="profile-image">
          <img src="./images/profile.png" alt="" />
        </div>

        <div className="profile-info">
          <p className="profile-role">MERN Stack Developer</p>
        </div>

      </div>


      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            className="social-link"
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className='social-icon' icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;