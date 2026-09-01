export default function Agenda() {
  const day1 = [
    { 
      time: "08:00 – 09:00", 
      activity: "Hackathon Introductory Session", 
      details: "Mentors: Vikas Kumar (IISPV), Spyros Karakitsios (AUTH)" 
    },
    { 
      time: "08:30 – 09:00", 
      activity: "Registration", 
      details: "" 
    },
    { 
      time: "08:45 – 09:00", 
      activity: "Opening Session", 
      details: "Welcome by Dr. Vendrell (Director, IRBCatSud)" 
    },
    { 
      time: "09:00 – 09:45", 
      activity: "Keynote Address: Next Generation Systems Toxicology", 
      details: "Constraining AI with HI — Prof. Hans V. Westerhoff (Universities of Amsterdam and Manchester)" 
    },
    { 
      time: "09:45 – 11:15", 
      activity: "Session 1: Next-Gen Methodologies and Generative Frontier", 
      details: "Pushing the Boundaries of Predictive Modeling Harnessing LLMs for Automated Chemical Risk Assessment",
      chairs: "Vikas Kumar (IISPV), Knut Erik Tollefsen (NIVA)",
      presentations: [
        { speaker: "Vikas Kumar (IISPV)", title: "AI Toolkit: Exploring Agentic AI, Natural Language Processing, and Mathematical Modeling" },
        { speaker: "Knut Erik Tollefsen (NIVA)", title: "Data and data extraction" },
        { speaker: "Kirsten Veltman (LACDR)", title: "WP5 grOMICs project and the development of a NLP-based mechanistic annotation" }
      ],
      discussion: "20 min Q&A and guided discussion"
    },
    { 
      time: "11:15 – 11:30", 
      activity: "Coffee Break", 
      details: "" 
    },
    { 
      time: "11:30 – 11:45", 
      activity: "Poster Session", 
      details: "" 
    },
    { 
      time: "11:45 – 13:15", 
      activity: "Session 2: Intelligence in Design", 
      details: "Emerging Methodology and Approaches for SSbD (Safe and Sustainable by Design) and Early Warning Systems",
      chairs: "Denis Sarigiannis (AUTH), Spyros Karakitsios (AUTH)",
      presentations: [
        { speaker: "Achilleas Karakoltzidis (AUTH)", title: "Internal-dose-driven SSbD: from chemical structure to biologically effective dose" },
        { speaker: "Spyros Karakitsios (AUTH)", title: "Inverse design for SSbD: designing chemicals and formulations against safety, sustainability and functionality constraints" },
        { speaker: "Fotini Nikiforou (AUTH)", title: "Predicting regrettable substitution: a computational 'regret test' for alternatives" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "13:15 – 14:15", 
      activity: "Lunch Break", 
      details: "" 
    },
    { 
      time: "14:15 – 15:45", 
      activity: "Session 3: Evolving Methodology in Omics Data Science", 
      details: "Read-across, Cell painting, integrated omics pipeline and other evolving methods",
      chairs: "Monica Bullo (IISPV/URV), Philip Marx-Stoelting (BfR)",
      presentations: [
        { speaker: "Mick Schaick (LACDR)", title: "AOP mapping to co-expression gene sets" },
        { speaker: "Philip Marx-Stoelting (BfR)", title: "Toxicogenomics" },
        { speaker: "Shubh Sharma (IISPV)", title: "OMICS harmonization" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "15:45 – 16:15", 
      activity: "Coffee Break", 
      details: "" 
    },
    { 
      time: "16:15 – 17:45", 
      activity: "Session 4: PARC Case Studies", 
      details: "Applied predictive modelling and risk assessment workflows",
      chairs: "Johannes Kruisselbrink (WUR), Deepika Deepika (IISPV/BfR)",
      presentations: [
        { speaker: "Jiri (RECETOX)", title: "PBK modeling of PFAS with a probabilistic approach: Addressing uncertainty in risk estimation" },
        { speaker: "Carolina / Aude (INERIS / SLU)", title: "Exposure PBPK" },
        { speaker: "Alexander Walsh (ANSES)", title: "LLM and systematic Review" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "17:45 – 18:00", 
      activity: "Closing Remarks & Evening Agenda", 
      details: "" 
    },
    { 
      time: "18:30 – 20:30", 
      activity: "Guided Cultural Tour of Tarragona", 
      details: "Meeting point: Portal del Roser, Via de l'Imperi Romà, 43002 Tarragona" 
    },
    { 
      time: "20:30 – 22:00", 
      activity: "Official Social Dinner (Day 1)", 
      details: "Location: El Galliner de l'Anticuari, Carrer de Santa Anna, 3, 43003 Tarragona" 
    }
  ];

  const day2 = [
    { 
      time: "08:30 – 08:45", 
      activity: "Registration", 
      details: "" 
    },
    { 
      time: "08:45 – 09:15", 
      activity: "Keynote Address (Day 2)", 
      details: "Metadata and vocabulary for regulatory computational models — Pascal Sanders (ANSES)" 
    },
    { 
      time: "09:15 – 10:45", 
      activity: "Session 5: Evolution of PBPK as NAM", 
      details: "High-throughput PBPK modeling, ML/AI in PBPK, tools for decision making",
      chairs: "Jean-Lou Dorne (EFSA), Spyros Karakitsios (AUTH)",
      presentations: [
        { speaker: "Jean-Lou Dorne (EFSA)", title: "NAM activities @ EFSA and regulatory applications" },
        { speaker: "Deepika Deepika (IISPV/BfR)", title: "Future of PBPK Harmonization" },
        { speaker: "Alicia Paini (EFSA)", title: "OECD PBK initiative and PARC interaction" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "10:45 – 11:15", 
      activity: "Coffee Break & Poster Viewing", 
      details: "" 
    },
    { 
      time: "11:15 – 12:45", 
      activity: "Session 6: Next-Generation Risk Assessment Framework", 
      details: "Building data integration and reasoning pipeline (in-silico models with in-vitro and exposure data for Cumulative Risk Assessment)",
      chairs: "Emma Consiglio (RIVM), Vikas Kumar (IISPV & BfR)",
      presentations: [
        { speaker: "Spyros Karakitsios (AUTH)", title: "From HBM data to internal dosimetry with ToxCast21 for risk assessment (in-silico)" },
        { speaker: "Philip Marx-Stoelting (BfR)", title: "In-vitro perspectives and risk assessment integration" }
      ],
      discussion: "Panel discussion with guided questions"
    },
    { 
      time: "12:45 – 14:00", 
      activity: "Lunch Break & Poster Session", 
      details: "" 
    },
    { 
      time: "14:00 – 15:30", 
      activity: "Session 7: Evolving QSAR for Modern Regulatory Science", 
      details: "Quantitative Structure-Activity Relationships in regulatory workflows",
      chairs: "Uko Maran (UT), Giuseppa Raitano (Mario Negri Institute, IT)",
      presentations: [
        { speaker: "Uko Maran (University of Tartu)", title: "QSAR Developments & Regulatory Applications" },
        { speaker: "Giuseppa Raitano (Mario Negri Institute, IT)", title: "Applications and Perspectives within VEGAHUB" },
        { speaker: "Johannes Kruisselbrink (WUR)", title: "From FAIR PBK to QSAR — How do we get there?" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "15:30 – 16:00", 
      activity: "Coffee Break", 
      details: "" 
    },
    { 
      time: "16:00 – 17:30", 
      activity: "Session 8: Bridging the Silos: FAIR Data, Harmonization & Standardization", 
      details: "Semantic Ontologies and Data Harmonization in Chemical Modeling",
      chairs: "Iseult Lynch (University of Birmingham), Panče Panov (Jožef Stefan Institute)",
      presentations: [
        { speaker: "Panče Panov (JSI)", title: "Why semantics matter (Case study)" },
        { speaker: "Saurav Kumar (IISPV)", title: "PARC model and data harmonisation and standardisation" },
        { speaker: "Iseult Lynch (Univ. of Birmingham)", title: "Engagement with CDIF4EOSC / Cross-domain implementation framework" }
      ],
      discussion: "30 min Q&A and guided discussion"
    },
    { 
      time: "17:30 – 17:45", 
      activity: "Closing Remarks of Modellers Meeting", 
      details: "" 
    },
    { 
      time: "19:30 – 23:00", 
      activity: "Social Dinner (Day 2)", 
      details: "Location: Nautic Restaurant, Edifici Nautic, Moll de Llevant, S/N, 43004 Tarragona" 
    }
  ];

  const day3 = [
    { 
      time: "09:00 – 10:30", 
      activity: "Session 9: Semantic Ontologies in PARC and Beyond", 
      details: "Joint Session with Work Package 7 (WP7)",
      chairs: "Iseult Lynch (Univ. of Birmingham), Vikas Kumar (IISPV & BfR)",
      presentations: [
        { speaker: "Vikas Kumar (IISPV)", title: "PBPK Ontology" },
        { speaker: "Iseult Lynch (Univ. of Birmingham)", title: "Ontology frameworks and interoperability" },
        { speaker: "Marvin Martens (Maastricht University)", title: "AOP Ontology" }
      ],
      discussion: "30 min Q&A and guided discussion"
    }
  ];

  const renderSchedule = (items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {items.map((item, idx) => (
        <div 
          key={idx}
          style={{ 
            padding: '1.15rem 1.25rem', 
            backgroundColor: '#ffffff', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: '700', color: 'var(--accent-blue)', fontSize: '0.95rem' }}>
              {item.time}
            </span>
            {item.chairs && (
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: '#f8fafc', padding: '0.25rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                <strong>Chairs:</strong> {item.chairs}
              </span>
            )}
          </div>

          <h3 style={{ margin: '0.2rem 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.08rem' }}>
            {item.activity}
          </h3>

          {item.details && (
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {item.details}
            </p>
          )}

          {item.presentations && item.presentations.length > 0 && (
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Presentations:
              </strong>
              <ul style={{ paddingLeft: '1.2rem', margin: '0.35rem 0 0 0', fontSize: '0.92rem' }}>
                {item.presentations.map((p, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: '0.35rem' }}>
                    <strong>{p.speaker}</strong>
                    {p.title && <span> — <em>{p.title}</em></span>}
                  </li>
                ))}
              </ul>
              {item.discussion && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  💬 {item.discussion}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="card card-hero">
        <h1 style={{ marginTop: 0 }}>Programme Agenda</h1>
        <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Detailed schedule for the 2nd PARC Modellers Meeting and parallel Hackathon sessions in Tarragona, Spain.
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 1 — Monday, 7 September 2026</h2>
        </div>
        {renderSchedule(day1)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 2 — Tuesday, 8 September 2026</h2>
        </div>
        {renderSchedule(day2)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 3 — Wednesday, 9 September 2026 (Joint Session with WP7)</h2>
        </div>
        {renderSchedule(day3)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Hackathon Parallel Sessions (7–10 September 2026)</h2>
        </div>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          The hackathon track runs in parallel across all 4 days. Final presentations and award announcements take place on 10 September:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <strong>10 September · 13:30 – 16:00:</strong> Hackathon Discussion & Team Presentations
          </div>
          <div style={{ padding: '0.85rem 1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
            <strong>10 September · 16:50 – 17:00:</strong> Hackathon Awards & Winner Announcement
          </div>
        </div>
      </div>
    </div>
  );
}
