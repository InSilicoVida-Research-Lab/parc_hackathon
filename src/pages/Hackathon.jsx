export default function Hackathon() {
  const themes = [
    {
      title: "LLM-Assisted FAIR PBPK Model Building",
      mentors: "Johannes",
      participants: "4 people at least"
    },
    {
      title: "Agentic System for Weight of Evidence",
      mentors: "Eli/Mirjam + Vikas",
      participants: "4 people at least"
    },
    {
      title: "AOP Ontology",
      mentors: "Pance",
      participants: "4 people at least"
    },
    {
      title: "AI-driven QSAR-to-PBPK Pipeline",
      mentors: "Spyros",
      participants: "4 people at least"
    }
  ];

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Hackathon Themes & Forms</h1>

      <div className="card">
        <h2>Hackathon Overview</h2>
        <p>
          The hackathon will run in parallel for 4 days (7th, 8th, 9th, and 10th September 2026). Discussions and winner announcements will take place on the 10th of September.
        </p>
      </div>

      <div className="card">
        <h2>Themes and Mentors</h2>
        <p>Participants can form teams and choose one of the following themes to work on during the hackathon:</p>
        
        <ul>
          {themes.map((theme, i) => (
            <li key={i} style={{ marginBottom: '1rem' }}>
              <strong>{theme.title}</strong>
              <ul style={{ marginTop: '0.25rem', marginBottom: '0', paddingLeft: '1.5rem', listStyleType: 'circle' }}>
                <li><strong>Mentors:</strong> {theme.mentors}</li>
                <li><strong>Participants:</strong> {theme.participants}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Registration and Surveys</h2>
        <p>
          Please use the Microsoft Forms linked below to participate in the upcoming events.
        </p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            <a 
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=aykR84I-TkyCqajkA6QrEQ6MmegPrIxBkOD8naVZMtxUM0U2NUU1WVpOODdVRk1CMVhIOE5XRUFBRy4u&origin=lprLink&route=shorturl" 
              target="_blank" 
              rel="noreferrer"
            >
              Link to Registration Form 1
            </a>
          </p>
          <p>
            <a 
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=aykR84I-TkyCqajkA6QrEeJm91rDVu9IoM1_5WXFpt1UQ0NGQkFTWFo0SkREUFlVOVU5M1dLMTFMSy4u&OR=EXCEL-WEB.BODY.NT&CT=1787648053603" 
              target="_blank"
              rel="noreferrer" 
            >
              Link to Registration Form 2 / Survey
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
