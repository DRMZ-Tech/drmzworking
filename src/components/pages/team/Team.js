import React from "react";
import "../../../App.css";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Sudesh Morey",
      role: "Chief Executive Officer",
      pic: "https://drmz.in/assets/img/team/team-1.jpg",
      socialMedia: {
        twitter: "https://twitter.com/sudeshmorey",
        linkedin: "https://www.linkedin.com/in/sudesh-morey-1007218/",
        facebook: "https://www.facebook.com/sudesh.morey/",
        instagram: "",
      },
    },
    {
      name: "Manish Nim",
      role: "Product Manager",
      pic: "https://drmz.in/assets/img/team/team-2.jpg",
      socialMedia: {
        twitter: "https://twitter.com/nimmanish",
        linkedin: "https://www.linkedin.com/in/manish-nim-89963577/",
        facebook: "",
        instagram: "",
      },
    },
    {
      name: "Pravesh Sahu",
      role: "CTO",
      pic: "https://drmz.in/assets/img/team/team-3.jpg",
      socialMedia: {
        twitter: "",
        linkedin: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      name: "Sagar Morey",
      role: "CMO",
      pic: "https://drmz.in/assets/img/team/team-4.jpg",
      socialMedia: {
        twitter: "https://twitter.com/SagarMorey2",
        linkedin: "https://www.linkedin.com/in/sagar-morey-308b209a/",
        facebook: "",
        instagram: "",
      },
    },
  ];

  return (
    <div className="team-section" id="team">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-info">
              <img src={member.pic} alt="team" className="member-image" />
              <div className="member-details">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
            <div className="social-media-links">
              {Object.entries(member.socialMedia).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media-icon"
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
