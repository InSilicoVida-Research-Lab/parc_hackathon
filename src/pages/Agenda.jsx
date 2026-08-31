export default function Agenda() {
  const day1 = [
    { time: "08:00 – 09:00", activity: "Hackathon Introductory Session", speaker: "Mentors" },
    { time: "08:30 – 09:00", activity: "Registration & Welcome", speaker: "-" },
    { time: "09:00 – 09:10", activity: "Opening Session & Welcome Remarks", speaker: "Coordinators" },
    { time: "09:10 – 09:30", activity: "Keynote Address: Predictive Modelling in Chemical Risk Assessment", speaker: "ASPIS Consortium" },
    { time: "09:30 – 11:00", activity: "Session 1: Next-Gen Methodologies and Generative Frontier", speaker: "Vikas Kumar" },
    { time: "11:00 – 11:30", activity: "Coffee Break & Poster Viewing", speaker: "-" },
    { time: "11:30 – 13:00", activity: "Session 2: Intelligence in Design for SSbD and Early Warning Systems", speaker: "Denis Sarigiannis, Spyros Karakitsios" },
    { time: "13:00 – 14:00", activity: "Lunch Break", speaker: "-" },
    { time: "14:00 – 15:30", activity: "Session 3: Evolving Methodology in Omics Data Science", speaker: "Bob van de Water, Philip Marx-Stoelting" },
    { time: "15:30 – 16:00", activity: "Coffee Break", speaker: "-" },
    { time: "16:00 – 17:30", activity: "Session 4: PARC Showcase & Applied Modelling", speaker: "Johannes Delp" },
    { time: "17:30 – 17:45", activity: "Closing Remarks & Evening Overview", speaker: "Coordinators" },
    { time: "19:00 – 22:00", activity: "Official Social Dinner", speaker: "-" },
  ];

  const day2 = [
    { time: "08:30 – 09:00", activity: "Registration & Morning Coffee", speaker: "-" },
    { time: "09:00 – 10:30", activity: "Session 5: Evolution of PBPK as New Approach Methodology (NAM)", speaker: "Jean-Lou Dorne, Deepika Deepika" },
    { time: "10:30 – 11:00", activity: "Coffee Break & Poster Viewing", speaker: "-" },
    { time: "11:00 – 12:30", activity: "Session 6: QSAR 2.0: Evolving QSAR for Modern Regulatory Science", speaker: "Uko Maran" },
    { time: "12:30 – 14:00", activity: "Lunch Break & Poster Session", speaker: "-" },
    { time: "14:00 – 15:30", activity: "Session 7: Bridging the Silos: FAIR Data, Harmonization, and Standardization", speaker: "Iseult Lynch, Panče Panov" },
    { time: "15:30 – 17:00", activity: "Session 8: Next-Generation Risk Assessment Framework", speaker: "Spyros Karakitsios (WP6 / WP8)" },
    { time: "17:00 – 17:30", activity: "Closing Remarks of Main Meeting", speaker: "Coordinators" },
  ];

  const day3 = [
    { time: "09:00 – 10:30", activity: "Joint Session: Semantic Ontologies in PARC and Beyond", speaker: "Iseult Lynch, Vikas Kumar" },
  ];

  const renderTable = (data) => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Time</th>
            <th style={{ width: '50%' }}>Session / Activity</th>
            <th style={{ width: '28%' }}>Chairs / Speakers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td className="time-col">{row.time}</td>
              <td style={{ color: 'var(--text-primary)', fontWeight: row.speaker !== '-' ? '500' : '400' }}>
                {row.activity}
              </td>
              <td>
                {row.speaker !== '-' ? (
                  <span className="speaker-pill">{row.speaker}</span>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="card card-hero">
        <h1 style={{ marginTop: 0 }}>Programme Agenda</h1>
        <p style={{ margin: 0, fontSize: '1.05rem' }}>
          Schedule for the 2nd PARC Modellers Meeting and parallel Hackathon sessions in Tarragona, Spain.
        </p>
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 1: Monday, 7 September 2026</h2>
          <span className="badge badge-blue">Full Day Sessions</span>
        </div>
        {renderTable(day1)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 2: Tuesday, 8 September 2026</h2>
          <span className="badge badge-blue">Full Day Sessions</span>
        </div>
        {renderTable(day2)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Day 3: Wednesday, 9 September 2026</h2>
          <span className="badge badge-teal">Joint Session with Work Package 7 (WP7)</span>
        </div>
        {renderTable(day3)}
      </div>

      <div className="card">
        <div className="section-header">
          <h2>Hackathon Parallel Sessions (7–10 September 2026)</h2>
          <span className="badge badge-gray">4-Day Parallel Track</span>
        </div>
        <p style={{ marginBottom: '1.25rem' }}>
          Hackathon participants will collaborate in parallel throughout the meeting days. Final discussions and presentations will take place on the closing day:
        </p>

        <div className="schedule-item">
          <div className="schedule-time">10 September · 13:30 – 16:00</div>
          <div className="schedule-title">Hackathon Team Presentations & Interactive Discussion</div>
        </div>

        <div className="schedule-item">
          <div className="schedule-time">10 September · 16:50 – 17:00</div>
          <div className="schedule-title">Hackathon Awards & Winner Announcement</div>
        </div>
      </div>
    </div>
  );
}
