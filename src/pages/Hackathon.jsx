export default function Hackathon({ heroRef }) {
  const themes = [
    {
      id: 1,
      title: "Agentic System for Weight of Evidence",
      mentors: "Vikas Kumar (BfR/IRBCATSUD) and Saurav Kumar (IRBCATSUD)",
      teams: [
        {
          teamName: "Team A",
          members: [
            { name: "Sandrine Fraize-Frontier", affiliation: "ANSES" },
            { name: "Edgar López López", affiliation: "Uppsala University" },
            { name: "Vishak Viswalal", affiliation: "Universitat Rovira i Virgili" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "AOP Ontology",
      mentors: "Pance Panov (JSI), Marvin Martens (MU), and Saurav Kumar (IRBCATSUD)",
      teams: [
        {
          teamName: "Team B",
          members: [
            { name: "Shubh Sharma", affiliation: "IISPV" },
            { name: "Teresa D'Amore", affiliation: "Istituto Superiore di Sanità" },
            { name: "Andrej Studen", affiliation: "Jožef Stefan Institute" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "AI-driven QSAR-to-PBPK Pipeline",
      mentors: "Spyros Karakitsios (AUTH) and Uko Maran (UT)",
      teams: [
        {
          teamName: "Team C",
          members: [
            { name: "Daniele Sebastiani", affiliation: "Universitat Rovira i Virgili" },
            { name: "Achilleas", affiliation: "Aristotle University of Thessaloniki (AUTH)" },
            { name: "Isaac Mensah", affiliation: "German Federal Institute for Risk Assessment (BfR)" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "LLM-Assisted FAIR PBPK Model Building",
      mentors: "Deepika Deepika (BfR/IRBCATSUD) and Johannes Kruisselbrink (WUR)",
      teams: [
        {
          teamName: "Team D",
          members: [
            { name: "Yash Yogesh Gondegaonkar", affiliation: "Institut de Recerca Biomèdica Catalunya Sud (IRBCatSud)" },
            { name: "Martina Iulini", affiliation: "Università degli Studi di Milano (UMIL)" },
            { name: "Gautam", affiliation: "Universitat Rovira i Virgili (URV)" }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <section className="hero" ref={heroRef}>
        <div className="hero__inner">
          <h1 className="hero-heading">Hackathon Themes &amp; Teams</h1>
          <p className="editorial-sub hero-sub">
            Hands-on collaborative track running in parallel from 7th to 10th September 2026 in Tarragona, Spain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section-header">
            <h2>Hackathon Overview &amp; Format</h2>
          </div>
          <p>
            The hackathon brings together modellers, data scientists, and toxicologists from across the PARC consortium to solve hands-on computational challenges. Teams will work collaboratively throughout the week with dedicated mentor guidance.
          </p>
          <div className="grid-auto-sm mt-4">
            <div className="info-pill">
              <span className="info-pill__label">
                <span className="label-with-icon">
                  <i className="bi bi-people" aria-hidden="true" />
                  Format
                </span>
              </span>
              <p className="info-pill__value">In-Person &amp; Hybrid Teams</p>
            </div>
            <div className="info-pill">
              <span className="info-pill__label">
                <span className="label-with-icon">
                  <i className="bi bi-calendar-event" aria-hidden="true" />
                  Final Showcase
                </span>
              </span>
              <p className="info-pill__value">10 September (13:30 – 16:00)</p>
            </div>
            <div className="info-pill">
              <span className="info-pill__label">
                <span className="label-with-icon">
                  <i className="bi bi-trophy" aria-hidden="true" />
                  Awards
                </span>
              </span>
              <p className="info-pill__value">Winner Announcement (16:50)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="section__inner">
          <div className="section-header">
            <h2>Challenge Themes, Mentors &amp; Teams</h2>
          </div>

          <div className="stack-lg">
            {themes.map((theme) => (
              <div key={theme.id} className="hackathon-theme">
                <h3>{theme.title}</h3>

                <div className="mentor-block">
                  <strong>Mentors:</strong> {theme.mentors}
                </div>

                <div>
                  <strong>Team Members:</strong>
                  <div className="grid-auto mt-4">
                    {theme.teams.map((team, idx) => (
                      <div key={idx} className="team-card">
                        <div className="team-name">{team.teamName}</div>
                        <ul className="team-members">
                          {team.members.map((member, mIdx) => (
                            <li key={mIdx}>
                              <strong>{member.name}</strong>
                              <div className="member-affiliation">
                                {member.affiliation}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section-header">
            <h2>Registration</h2>
          </div>
          <p className="mb-4">
            Please complete the official registration form below to register your participation in the meeting and hackathon tracks:
          </p>

          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=aykR84I-TkyCqajkA6QrEQ6MmegPrIxBkOD8naVZMtxUM0U2NUU1WVpOODdVRk1CMVhIOE5XRUFBRy4u&origin=lprLink&route=shorturl"
            target="_blank"
            rel="noreferrer"
            className="btn-action"
          >
            Complete Registration Form
          </a>
        </div>
      </section>
    </div>
  );
}
