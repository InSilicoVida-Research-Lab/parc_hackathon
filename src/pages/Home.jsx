export default function Home() {
  return (
    <div>
      <div className="card">
        <h1 style={{ marginTop: 0 }}>
          PARC Modellers Meeting 2 + Hackathon
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Advancing Computational Approaches for Next-Generation Chemical Risk Assessment
        </p>
      </div>

      <div className="card">
        <h2>Details</h2>
        <ul>
          <li><strong>Date:</strong> 07-08 Sept 2026 (Monday, Tuesday)</li>
          <li><strong>Hackathon:</strong> Sept 7-10 (3-4 days). Note: WP7 Annual meeting will follow Wednesday-Thursday.</li>
          <li><strong>Venue:</strong> Tarragona, Spain</li>
          <li><strong>Format:</strong> In person (with option for Hybrid)</li>
          <li><strong>Coordinators:</strong> Vikas Kumar (IISPV and BfR), Philip Marx-Stoelting (BfR), Giles Rivière (ANSES), Denis Sarigiannis (AUTH)</li>
        </ul>
      </div>

      <div className="card">
        <h2>Meeting Themes</h2>
        <ol>
          <li><strong>Next-Gen Methodologies and Generative Frontier:</strong> Pushing the Boundaries of Predictive Modeling Harnessing LLMs for Automated Chemical Risk Assessment</li>
          <li><strong>Intelligence in Design:</strong> Emerging Methodology and approaches for SSbD (Safe and Sustainable by Design) and Early Warning Systems</li>
          <li><strong>Evolution of PBPK as NAM:</strong> High-throughput PBPK modeling, ML/AI in PBPK, tools for decision making</li>
          <li><strong>Evolving methodology in Omics data science:</strong> Read-across, Cell painting, integrated omics pipeline and other evolving methods</li>
          <li><strong>QSAR 2.0:</strong> Evolving Quantitative Structure-Activity Relationships for Modern Regulatory Science</li>
          <li><strong>Bridging the Silos:</strong> FAIR Data, Harmonization, and Standardization, including Semantic Ontologies etc. in Chemical Modeling</li>
          <li><strong>Next-Generation Risk Assessment Framework:</strong> Building data integration and reasoning pipeline (in-silico Models followed by in-vitro data and exposure data for Cumulative Risk Assessment)</li>
        </ol>
      </div>
      
      <div className="card">
        <h2>Abstract</h2>
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
        <p>
          Together, these conversations reflect a shared ambition: to integrate diverse data streams and computational tools into coherent, robust, and regulation-ready workflows for the chemicals.
        </p>
      </div>

      <div className="card">
        <h2>Contact</h2>
        <p>
          Participants are invited to submit abstracts for oral presentations and poster sessions across all themes, fostering broad community engagement and cross-disciplinary exchange.
        </p>
        <p>
          Email: <a href="mailto:vikas.kumar@urv.cat">vikas.kumar@urv.cat</a>, <a href="mailto:deepika@irbcatsud.cat">deepika@irbcatsud.cat</a>
        </p>
      </div>
    </div>
  );
}
