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
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        facebook: "",
        instagram: "",
      },
    },
    {
      name: "Manish Nim",
      role: "Product Manager",
      pic: "https://drmz.in/assets/img/team/team-2.jpg",
      socialMedia: {
        twitter: "",
        linkedin: "",
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
        twitter: "",
        linkedin: "",
        facebook: "",
        instagram: "",
      },
    },
  ];

  return (
    <div className="team-section">
      <h1>Our Team</h1>
      <div className="team-member">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <div>
              <img src={member.pic} alt="team" />
            </div>
            <div className="social-media-links">
              {Object.entries(member.socialMedia).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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
