export default function Agenda() {
  const day1 = [
    { time: "8:00 - 9:00", activity: "Hackathon Introductory Session", speaker: "Mentors" },
    { time: "8:30 - 9:00", activity: "Registration", speaker: "-" },
    { time: "9:00 - 9:10", activity: "Opening Session", speaker: "-" },
    { time: "9:10 - 9:30", activity: "Keynote Speaker", speaker: "ASPIS??" },
    { time: "9:30 - 11:00", activity: "Session 1: Next-Gen Methodologies and Generative Frontier", speaker: "Vikas Kumar" },
    { time: "11:00 - 11:30", activity: "Coffee + Poster", speaker: "-" },
    { time: "11:30 - 13:00", activity: "Session 2: Intelligence in Design for SSbD and Early Warning Systems", speaker: "Denis Sarigiannis, Spyros" },
    { time: "13:00 - 14:00", activity: "Lunch", speaker: "-" },
    { time: "14:00 - 15:30", activity: "Session 3: Evolving methodology in Omics data science", speaker: "Bob, Philip Marx-Stoelting" },
    { time: "15:30 - 16:00", activity: "Coffee break", speaker: "-" },
    { time: "16:00 - 17:30", activity: "Session: PARC Showcase", speaker: "Johannes" },
    { time: "17:30 - 17:45", activity: "Closing day remark and agenda of evening", speaker: "-" },
    { time: "19:00 - 22:00", activity: "Social Dinner", speaker: "-" },
  ];

  const day2 = [
    { time: "8:30 - 9:00", activity: "Registration", speaker: "-" },
    { time: "9:00 - 10:30", activity: "Session 5: Evolution of PBPK as NAM", speaker: "Jean-Leu and Deepika" },
    { time: "10:30 - 11:00", activity: "Coffee + Poster", speaker: "-" },
    { time: "11:00 - 12:30", activity: "Session 6: QSAR: Evolving QSAR for Modern Regulatory Science", speaker: "Uko Maran" },
    { time: "12:30 - 14:00", activity: "Lunch + Poster Session", speaker: "-" },
    { time: "14:00 - 15:30", activity: "Session 7: Bridging the Silos: FAIR Data, Harmonization, and Standardization", speaker: "Iseult and Pance" },
    { time: "15:30 - 17:00", activity: "Session 8: Next-Generation Risk Assessment Framework", speaker: "Spyros (WP 8/6)" },
    { time: "17:00 - 17:30", activity: "Closing Remark", speaker: "-" },
  ];

  const day3 = [
    { time: "9:00 - 10:30", activity: "Session 8: Ontologies in PARC and beyond", speaker: "Iseult, Vikas" },
  ];

  const renderTable = (data) => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Time</th>
            <th style={{ width: '50%' }}>Activity</th>
            <th style={{ width: '30%' }}>Speakers / Chair</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.time}</td>
              <td>{row.activity}</td>
              <td>{row.speaker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Agenda</h1>

      <div className="card">
        <h2>Day 1: 7th September 2026</h2>
        {renderTable(day1)}
      </div>

      <div className="card">
        <h2>Day 2: 8th September 2026</h2>
        {renderTable(day2)}
      </div>

      <div className="card">
        <h2>Day 3: 9th September 2026 (Joint Session + WP 7)</h2>
        {renderTable(day3)}
      </div>

      <div className="card">
        <h2>Hackathon Parallel Session (7, 8, 9, 10th Sept)</h2>
        <ul>
          <li>
            <strong>13:30 - 16:00 (10th Sept):</strong> Hackathon Discussion
          </li>
          <li>
            <strong>16:50 - 17:00:</strong> Winner Announcement
          </li>
        </ul>
      </div>
    </div>
  );
}
