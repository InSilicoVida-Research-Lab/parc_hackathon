export default function Hackathon() {
  const themes = [
    {
      id: 1,
      title: "LLM-Assisted FAIR PBPK Model Building",
      mentors: "Johannes Delp (BfR / University of Konstanz)",
      desc: "Developing and evaluating generative AI/LLM workflows to extract pharmacokinetic parameters, curate datasets, and assist in FAIR PBPK model code generation."
    },
    {
      id: 2,
      title: "Agentic Systems for Weight of Evidence (WoE)",
      mentors: "Mirjam Luijten (RIVM), Vikas Kumar (IISPV & BfR)",
      desc: "Constructing multi-agent LLM systems to synthesize heterogeneous toxicological evidence lines and support automated weight-of-evidence evaluations."
    },
    {
      id: 3,
      title: "Adverse Outcome Pathway (AOP) Ontology Integration",
      mentors: "Panče Panov (Jožef Stefan Institute)",
      desc: "Harmonizing mechanistic toxicology data with formal semantic ontologies to improve interoperability across AOP-Wiki and computational modelling tools."
    },
    {
      id: 4,
      title: "AI-Driven QSAR-to-PBPK Pipeline Integration",
      mentors: "Spyros Karakitsios (AUTH)",
      desc: "Connecting machine learning-based QSAR predictions directly into physiologically based kinetic models for high-throughput internal exposure screening."
    }
  ];

  return (
    <div>
      <div className="card card-hero">
        <h1 style={{ marginTop: 0 }}>Hackathon Themes & Registration</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Hands-on collaborative track running in parallel from 07 to 10 September 2026 in Tarragona, Spain.
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Hackathon Overview & Format</h2>
          <span className="badge badge-blue">4-Day Parallel Track</span>
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
          <h2>Hackathon Challenge Themes</h2>
          <span className="badge badge-gray">4 Dedicated Tracks</span>
        </div>
        <p style={{ marginBottom: '1.25rem' }}>
          Participants can form interdisciplinary teams or register individually for one of the following challenge themes:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {themes.map((theme) => (
            <div 
              key={theme.id} 
              style={{ 
                padding: '1.25rem', 
                backgroundColor: '#ffffff', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.5rem 0' }}>
                {theme.title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                {theme.desc}
              </p>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>
                <strong>Lead Mentors:</strong> {theme.mentors}
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
