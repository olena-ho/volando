import "./style.css";
import Viktoriia from "./img/Viktoriia.jpg";
import Olena from "./img/Olena.png";

export const TeamInfo = () => {
  const teamMembers = [
    {
      name: "Viktoriia Nykyforova",
      role: "Frontend Developer",
      image: Viktoriia,
      github: "https://github.com/ViktoriiaKN",
      linkedin: "https://www.linkedin.com/in/viktoriia-nykyforova-a8a7b6193/",
      mail: "mailto:viktoriia-nykyforova@seznam.cz",
    },
    {
      name: "Olena Horovenko",
      role: "Frontend Developer",
      image: Olena,
      github: "https://github.com/olena-ho",
      linkedin: "https://www.linkedin.com/in/olena-horovenko-1857a1a6/",
      mail: "mailto:olena.horovenko@gmail.com",
    },
  ];

  return (
    <div className="team__wrapper">
      <section className="team-section">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-icons">
              <a
                href={member.github}
                aria-label={`${member.name}'s Github profile`}
                className="team-icon"
              >
                <svg width="20" height="20">
                  <use href="/icons.svg#github" />
                </svg>
              </a>
              <a
                href={member.linkedin}
                aria-label={`${member.name}'s Linkedin profile`}
                className="team-icon"
              >
                <svg width="20" height="20">
                  <use href="/icons.svg#linkedin" />
                </svg>
              </a>
              <a
                href={member.mail}
                aria-label={`${member.name}'s mail`}
                className="team-icon"
              >
                <svg width="20" height="20">
                  <use href="/icons.svg#mail" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

{
  /* <a
                  aria-label="Viktoriia's Github profile"
                  className="icon-team"
                  href="https://github.com/ViktoriiaKN"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#github" />
                  </svg>
                </a> */
}

{
  /* <a
                  aria-label="Viktoriia's Linkedin profile"
                  className="icon-team"
                  href="https://www.linkedin.com/in/viktoriia-nykyforova-a8a7b6193/"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#linkedin" />
                  </svg>
                </a> */
}

{
  /* <a
                  aria-label="Viktoriia's mail"
                  className="icon-team"
                  href="mailto:viktoriia-nykyforova@seznam.cz"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#mail" />
                  </svg>
                </a> */
}

{
  /* <a
                  aria-label="Olena's Github profile"
                  className="icon-team"
                  href="https://github.com/olena-ho"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#github" />
                  </svg>
                </a> */
}

{
  /* <a
                  aria-label="Olena's Linkedin profile"
                  className="icon-team"
                  href="https://www.linkedin.com/in/olena-horovenko-1857a1a6/"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#linkedin" />
                  </svg>
                </a> */
}

{
  /* <a
                  aria-label="Olena's mail"
                  className="icon-team"
                  href="mailto:olena.horovenko@gmail.com"
                >
                  <svg className="team-icon-li" width="20" height="20">
                    <use href="./images/icons.svg#mail" />
                  </svg>
                </a> */
}
