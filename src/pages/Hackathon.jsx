export default function Hackathon() {
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
      <div className="card card-hero">
        <h1 style={{ marginTop: 0 }}>Hackathon Themes & Teams</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Hands-on collaborative track running in parallel from 7th to 10th September 2026 in Tarragona, Spain.
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Hackathon Overview & Format</h2>
        </div>
        <p>
          The hackathon brings together modellers, data scientists, and toxicologists from across the PARC consortium to solve hands-on computational challenges. Teams will work collaboratively throughout the week with dedicated mentor guidance.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Format</span>
            <p style={{ margin: 0, fontWeight: '600' }}>In-Person & Hybrid Teams</p>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Final Showcase</span>
            <p style={{ margin: 0, fontWeight: '600' }}>10 September (13:30 – 16:00)</p>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Awards</span>
            <p style={{ margin: 0, fontWeight: '600' }}>Winner Announcement (16:50)</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Challenge Themes, Mentors & Teams</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {themes.map((theme) => (
            <div
              key={theme.id}
              style={{
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.75rem 0', fontSize: '1.2rem' }}>
                {theme.title}
              </h3>

              <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <strong>Mentors:</strong> {theme.mentors}
              </div>

              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Team Members:</strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
                  {theme.teams.map((team, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.85rem 1rem',
                        background: '#ffffff',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px'
                      }}
                    >
                      <div style={{ fontWeight: '700', color: 'var(--accent-blue)', fontSize: '0.92rem', marginBottom: '0.4rem' }}>
                        {team.teamName}
                      </div>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {team.members.map((member, mIdx) => (
                          <li key={mIdx} style={{ marginBottom: '0.3rem' }}>
                            <strong>{member.name}</strong>
                            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
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

      <div className="card">
        <div className="section-header">
          <h2>Registration</h2>
        </div>
        <p style={{ marginBottom: '1.5rem' }}>
          Please complete the official registration form below to register your participation in the meeting and hackathon tracks:
        </p>

        <div>
          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=aykR84I-TkyCqajkA6QrEQ6MmegPrIxBkOD8naVZMtxUM0U2NUU1WVpOODdVRk1CMVhIOE5XRUFBRy4u&origin=lprLink&route=shorturl"
            target="_blank"
            rel="noreferrer"
            className="btn-action"
          >
            Complete Registration Form
          </a>
        </div>
      </div>
    </div>
  );
}
