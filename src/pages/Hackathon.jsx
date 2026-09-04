import React, { useState } from "react";
import { hackathonThemes } from "../data/hackathonThemes";

export default function Hackathon({ heroRef }) {
  // Track open state for each theme's detailed specification
  const [openSpecs, setOpenSpecs] = useState({
    3: true,
    4: true
  });

  // Track active tab for each theme
  const [activeTabs, setActiveTabs] = useState({
    3: "overview",
    4: "overview"
  });

  const toggleSpec = (themeId) => {
    setOpenSpecs((prev) => ({
      ...prev,
      [themeId]: !prev[themeId]
    }));
  };

  const setTab = (themeId, tabName) => {
    setActiveTabs((prev) => ({
      ...prev,
      [themeId]: tabName
    }));
  };

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

      {/* Overview & Format */}
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

      {/* Themes, Mentors & Teams */}
      <section className="section section--raised">
        <div className="section__inner">
          <div className="section-header">
            <h2>Challenge Themes, Mentors &amp; Teams</h2>
          </div>

          <div className="stack-lg">
            {hackathonThemes.map((theme) => {
              const isOpen = openSpecs[theme.id];
              const activeTab = activeTabs[theme.id] || "overview";
              const hasRichContent = !!(theme.problemStatement || theme.phases || theme.learningOutcomes);

              return (
                <div key={theme.id} className="hackathon-theme">
                  <div className="hackathon-theme__header">
                    <div className="hackathon-theme__title-group">
                      <h3>Theme {theme.id}: {theme.title}</h3>
                      {theme.subtitle && (
                        <p className="hackathon-theme__subtitle">{theme.subtitle}</p>
                      )}
                    </div>
                    {theme.docPath && (
                      <a
                        href={theme.docPath}
                        download={theme.docName || true}
                        className="btn-doc-download"
                        title="Download official brief (.docx)"
                      >
                        <i className="bi bi-download" aria-hidden="true" />
                        Download Brief (.docx)
                      </a>
                    )}
                  </div>

                  <div className="mentor-block">
                    <strong>Mentors:</strong> {theme.mentors}
                  </div>

                  {theme.overview && (
                    <p className="text-sm text-muted mb-4">{theme.overview}</p>
                  )}

                  <div>
                    <strong>Assigned Team &amp; Members:</strong>
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

                  {/* Rich Challenge Specifications (Tabs / Accordion) */}
                  {hasRichContent && (
                    <div className="challenge-details">
                      <button
                        type="button"
                        onClick={() => toggleSpec(theme.id)}
                        className={`challenge-toggle-btn ${isOpen ? "is-open" : ""}`}
                        aria-expanded={isOpen}
                      >
                        <span>{isOpen ? "Hide Challenge Specifications" : "View Full Challenge Specifications & Roadmap"}</span>
                        <i className="bi bi-chevron-down" aria-hidden="true" />
                      </button>

                      {isOpen && (
                        <div className="challenge-content">
                          {/* Navigation Tabs */}
                          <div className="challenge-tabs" role="tablist">
                            <button
                              type="button"
                              className={`challenge-tab ${activeTab === "overview" ? "is-active" : ""}`}
                              onClick={() => setTab(theme.id, "overview")}
                            >
                              Overview &amp; Problem
                            </button>
                            <button
                              type="button"
                              className={`challenge-tab ${activeTab === "goals" ? "is-active" : ""}`}
                              onClick={() => setTab(theme.id, "goals")}
                            >
                              Learning Goals
                            </button>
                            <button
                              type="button"
                              className={`challenge-tab ${activeTab === "resources" ? "is-active" : ""}`}
                              onClick={() => setTab(theme.id, "resources")}
                            >
                              Data &amp; Resources
                            </button>
                            {theme.phases && (
                              <button
                                type="button"
                                className={`challenge-tab ${activeTab === "phases" ? "is-active" : ""}`}
                                onClick={() => setTab(theme.id, "phases")}
                              >
                                Roadmap &amp; Phases
                              </button>
                            )}
                            <button
                              type="button"
                              className={`challenge-tab ${activeTab === "evaluation" ? "is-active" : ""}`}
                              onClick={() => setTab(theme.id, "evaluation")}
                            >
                              Rubric &amp; Outcomes
                            </button>
                            {theme.references && (
                              <button
                                type="button"
                                className={`challenge-tab ${activeTab === "references" ? "is-active" : ""}`}
                                onClick={() => setTab(theme.id, "references")}
                              >
                                References
                              </button>
                            )}
                          </div>

                          {/* Tab Content Panes */}
                          {activeTab === "overview" && (
                            <div className="challenge-tab-pane">
                              {theme.themeSummary && (
                                <div className="mb-4">
                                  <h4>Project Summary</h4>
                                  <p className="text-sm">{theme.themeSummary}</p>
                                </div>
                              )}
                              <h4>Core Problem Statement</h4>
                              <p className="problem-statement-text">{theme.problemStatement}</p>
                            </div>
                          )}

                          {activeTab === "goals" && (
                            <div className="challenge-tab-pane">
                              <h4>Goals &amp; Learning Outcomes</h4>
                              <div className="outcomes-grid">
                                {theme.learningOutcomes?.map((item, oIdx) => (
                                  <div key={oIdx} className="outcome-card">
                                    <div className="outcome-card__title">{item.title}</div>
                                    <p className="outcome-card__desc">{item.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {activeTab === "resources" && (
                            <div className="challenge-tab-pane">
                              <h4>Data &amp; Starter Resources Provided</h4>
                              <div className="resources-grid">
                                {theme.resourcesProvided?.map((res, rIdx) => (
                                  <div key={rIdx} className="resource-card">
                                    <span className="resource-card__label">{res.label}</span>
                                    <p className="resource-card__desc">{res.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {activeTab === "phases" && theme.phases && (
                            <div className="challenge-tab-pane">
                              <h4>Phased Implementation Roadmap</h4>
                              <div className="phases-timeline">
                                {theme.phases.map((ph, pIdx) => (
                                  <div key={pIdx} className="phase-card">
                                    <div className="phase-badge">{ph.phase}</div>
                                    <div className="phase-content">
                                      <h5>{ph.title}</h5>
                                      <p>{ph.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {activeTab === "evaluation" && (
                            <div className="challenge-tab-pane">
                              <h4>Evaluation Rubric &amp; Criteria</h4>
                              <div className="table-responsive">
                                <table className="rubric-table">
                                  <thead>
                                    <tr>
                                      <th>Criterion</th>
                                      {theme.evaluationCriteria?.[0]?.weight && <th>Weight</th>}
                                      <th>What Judges Look For</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {theme.evaluationCriteria?.map((crit, cIdx) => (
                                      <tr key={cIdx}>
                                        <td><strong>{crit.criterion}</strong></td>
                                        {crit.weight && <td className="weight-cell">{crit.weight}</td>}
                                        <td>{crit.details}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>

                              {theme.outcomes && (
                                <div className="mt-4">
                                  <h4>Expected Deliverables &amp; Outcomes</h4>
                                  <ul className="spec-list">
                                    {theme.outcomes.map((out, outIdx) => (
                                      <li key={outIdx}>{out}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          {activeTab === "references" && theme.references && (
                            <div className="challenge-tab-pane">
                              <h4>Scientific References &amp; Readings</h4>
                              <ul className="reference-list">
                                {theme.references.map((ref, refIdx) => (
                                  <li key={refIdx} className="reference-item">
                                    <div>{ref.citation}</div>
                                    {ref.url && (
                                      <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" /> {ref.url}
                                      </a>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration */}
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
