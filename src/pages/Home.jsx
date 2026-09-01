export default function Home() {
  const themes = [
    {
      id: 1,
      title: "Next-Gen Methodologies and Generative Frontier",
      desc: "Pushing the boundaries of predictive modeling harnessing LLMs for automated chemical risk assessment."
    },
    {
      id: 2,
      title: "Intelligence in Design",
      desc: "Emerging methodology and approaches for Safe and Sustainable by Design (SSbD) and early warning systems."
    },
    {
      id: 3,
      title: "Evolution of PBPK as NAM",
      desc: "High-throughput PBPK modeling, machine learning and AI integration, and decision-support tools for regulatory applications."
    },
    {
      id: 4,
      title: "Evolving Methodology in Omics Data Science",
      desc: "Read-across, cell painting, integrated multi-omics pipelines, and cutting-edge data science methodologies."
    },
    {
      id: 5,
      title: "QSAR 2.0: Next-Gen Structure-Activity Relationships",
      desc: "Evolving Quantitative Structure-Activity Relationships for modern, transparent regulatory science."
    },
    {
      id: 6,
      title: "Bridging the Silos: FAIR Data & Semantic Ontologies",
      desc: "FAIR data principles, harmonization, standardization, and domain-specific ontologies in chemical modeling."
    },
    {
      id: 7,
      title: "Next-Generation Risk Assessment Framework",
      desc: "Building integrated data and reasoning pipelines (in-silico models with in-vitro and exposure data for Cumulative Risk Assessment)."
    }
  ];

  return (
    <div>
      <div className="card card-hero">
        <h1 style={{ marginTop: 0 }}>
          PARC Modellers Meeting & Hackathon (2026)
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', margin: 0, fontWeight: '500' }}>
          Advancing Computational Approaches for Next-Generation Chemical Risk Assessment
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Meeting Overview & Details</h2>
          <span className="badge badge-teal">Hybrid Event</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          <div>
            <p style={{ marginBottom: '0.35rem' }}><strong>Meeting Dates:</strong></p>
            <p style={{ margin: 0 }}>07–08 September 2026 (Monday–Tuesday)</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              <em>WP7 Annual Meeting will follow on 09–10 September.</em>
            </p>
          </div>
          <div>
            <p style={{ marginBottom: '0.35rem' }}><strong>Hackathon:</strong></p>
            <p style={{ margin: 0 }}>07–10 September 2026 (4-Day Parallel Track)</p>
          </div>
          <div>
            <p style={{ marginBottom: '0.35rem' }}><strong>Location & Venue:</strong></p>
            <p style={{ margin: 0 }}>Tarragona, Spain (In-person with Hybrid participation)</p>
          </div>
          <div>
            <p style={{ marginBottom: '0.35rem' }}><strong>Meeting Coordinators:</strong></p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.92rem' }}>
              <li>Vikas Kumar (IISPV, Spain & BfR, Germany)</li>
              <li>Philip Marx-Stoelting (BfR, Germany)</li>
              <li>Giles Rivière (ANSES, France)</li>
              <li>Denis Sarigiannis (AUTH, Greece)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Meeting Themes</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {themes.map((theme) => (
            <div
              key={theme.id}
              style={{
                padding: '1rem',
                backgroundColor: '#f8fafc',
                border: '1px solid var(--border-color)',
                borderRadius: '8px'
              }}
            >
              <h3 style={{ color: 'var(--accent-blue)', margin: '0 0 0.35rem 0', fontSize: '1rem' }}>
                {theme.title}
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                {theme.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Abstract & Objectives</h2>
        </div>
        <p>
          The second PARC Modeller Meeting brings together the predictive modelling community to explore how computational methods are reshaping chemical risk assessment. As regulatory science confronts growing demands for faster, more reliable, and more transparent evaluation of chemicals, in-silico approaches are evolving rapidly from established quantitative frameworks to emerging generative and AI-driven techniques.
        </p>
        <p>
          This meeting provides a forum for researchers across the PARC consortium and partner regulatory bodies, including EMA, ECHA, and EFSA, to share advances, align on best practices, and chart the direction of next-generation assessment methods.
        </p>
        <p>
          Discussions will explore how large language models and other generative tools can automate and accelerate risk assessment, and how intelligent design approaches are enabling Safe and Sustainable by Design (SSbD) strategies and early warning systems. The programme will examine the maturing role of physiologically based pharmacokinetic (PBPK) modelling as a New Approach Methodology, including high-throughput applications, the integration of machine learning and AI, and tools to support regulatory decision-making, alongside advances in omics data science such as read-across, cell painting, and integrated omics pipelines.
        </p>
        <p>
          Attention will also turn to the continued evolution of quantitative structure-activity relationships for modern regulatory science, and to the persistent challenge of bridging silos through FAIR data principles, harmonisation, standardisation, and semantic ontologies. Looking ahead, the meeting will consider how data integration and reasoning pipelines combining in-silico models, in-vitro data, and exposure information can underpin a next-generation framework for cumulative risk assessment.
        </p>
        <p style={{ margin: 0 }}>
          Together, these conversations reflect a shared ambition: to integrate diverse data streams and computational tools into coherent, robust, and regulation-ready workflows for chemicals.
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Call for Inquiries</h2>
        </div>
        <p>
          Participants are warmly invited to submit abstracts for oral presentations and poster sessions across all scientific themes, fostering broad community engagement and cross-disciplinary exchange.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
          <div style={{ padding: '1.25rem', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 0.35rem 0', color: 'var(--accent-blue)' }}>Dr. Vikas Kumar</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              IISPV & Universitat Rovira i Virgili / BfR
            </p>
            <div>
              <a
                href="mailto:vikas.kumar@urv.cat"
                style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--accent-blue)' }}
              >
                vikas.kumar@urv.cat
              </a>
            </div>
          </div>

          <div style={{ padding: '1.25rem', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 0.35rem 0', color: 'var(--accent-blue)' }}>Dr. Deepika Deepika</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Institut d'Investigació Sanitària Pere Virgili (IISPV)
            </p>
            <div>
              <a
                href="mailto:deepika@irbcatsud.cat"
                style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--accent-blue)' }}
              >
                deepika@irbcatsud.cat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
