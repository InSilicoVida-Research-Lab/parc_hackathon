export const AGENDA_DAYS = [
  {
    id: 'day-1',
    label: 'Day 1',
    weekday: 'Monday',
    date: '7 September 2026',
    subtitle: '',
    isoDate: '2026-09-07',
    items: [
      {
        id: 'd1-hack-intro',
        kind: 'logistics',
        start: '08:00',
        end: '09:00',
        title: 'Hackathon Introductory Session',
        details: 'Mentors: Vikas Kumar (IISPV), Spyros Karakitsios (AUTH)',
      },
      {
        id: 'd1-registration',
        kind: 'logistics',
        start: '08:30',
        end: '09:00',
        title: 'Registration',
        details: '',
      },
      {
        id: 'd1-opening',
        kind: 'logistics',
        start: '08:45',
        end: '09:00',
        title: 'Opening Session',
        details: 'Welcome by Dr. Vendrell (Director, IRBCatSud)',
      },
      {
        id: 'd1-keynote',
        kind: 'keynote',
        start: '09:00',
        end: '09:45',
        title: 'Keynote Address: Next Generation Systems Toxicology',
        details: 'Constraining AI with HI — Prof. Hans V. Westerhoff (Universities of Amsterdam and Manchester)',
      },
      {
        id: 'd1-s1',
        kind: 'session',
        number: '01',
        start: '09:45',
        end: '11:15',
        title: 'Next-Gen Methodologies and Generative Frontier',
        details: 'Pushing the Boundaries of Predictive Modeling Harnessing LLMs for Automated Chemical Risk Assessment',
        chairs: 'Vikas Kumar (IISPV), Knut Erik Tollefsen (NIVA)',
        presentations: [
          { speaker: 'Vikas Kumar (IISPV)', title: 'AI Toolkit: Exploring Agentic AI, Natural Language Processing, and Mathematical Modeling' },
          { speaker: 'Knut Erik Tollefsen (NIVA)', title: 'Data and data extraction' },
          { speaker: 'Kirsten Veltman (LACDR)', title: 'WP5 grOMICs project and the development of a NLP-based mechanistic annotation' },
        ],
        discussion: '20 min Q&A and guided discussion',
      },
      {
        id: 'd1-coffee-1',
        kind: 'break',
        start: '11:15',
        end: '11:30',
        title: 'Coffee Break',
        details: '',
      },
      {
        id: 'd1-poster',
        kind: 'break',
        start: '11:30',
        end: '11:45',
        title: 'Poster Session',
        details: '',
      },
      {
        id: 'd1-s2',
        kind: 'session',
        number: '02',
        start: '11:45',
        end: '13:15',
        title: 'Intelligence in Design',
        details: 'Emerging Methodology and Approaches for SSbD (Safe and Sustainable by Design) and Early Warning Systems',
        chairs: 'Denis Sarigiannis (AUTH), Spyros Karakitsios (AUTH)',
        presentations: [
          { speaker: 'Achilleas Karakoltzidis (AUTH)', title: 'Internal-dose-driven SSbD: from chemical structure to biologically effective dose' },
          { speaker: 'Spyros Karakitsios (AUTH)', title: 'Inverse design for SSbD: designing chemicals and formulations against safety, sustainability and functionality constraints' },
          { speaker: 'Fotini Nikiforou (AUTH)', title: "Predicting regrettable substitution: a computational 'regret test' for alternatives" },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd1-lunch',
        kind: 'break',
        start: '13:15',
        end: '14:15',
        title: 'Lunch Break',
        details: '',
      },
      {
        id: 'd1-s3',
        kind: 'session',
        number: '03',
        start: '14:15',
        end: '15:45',
        title: 'Evolving Methodology in Omics Data Science',
        details: 'Read-across, Cell painting, integrated omics pipeline and other evolving methods',
        chairs: 'Monica Bullo (IISPV/URV), Philip Marx-Stoelting (BfR)',
        presentations: [
          { speaker: 'Mick Schaick (LACDR)', title: 'AOP mapping to co-expression gene sets' },
          { speaker: 'Philip Marx-Stoelting (BfR)', title: 'Toxicogenomics' },
          { speaker: 'Shubh Sharma (IISPV)', title: 'OMICS harmonization' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd1-coffee-2',
        kind: 'break',
        start: '15:45',
        end: '16:15',
        title: 'Coffee Break',
        details: '',
      },
      {
        id: 'd1-s4',
        kind: 'session',
        number: '04',
        start: '16:15',
        end: '17:45',
        title: 'PARC Case Studies',
        details: 'Applied predictive modelling and risk assessment workflows',
        chairs: 'Johannes Kruisselbrink (WUR), Deepika Deepika (IISPV/BfR)',
        presentations: [
          { speaker: 'Jiri (RECETOX)', title: 'PBK modeling of PFAS with a probabilistic approach: Addressing uncertainty in risk estimation' },
          { speaker: 'Carolina / Aude (INERIS / SLU)', title: 'Exposure PBPK' },
          { speaker: 'Alexander Walsh (ANSES)', title: 'LLM and systematic Review' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd1-closing',
        kind: 'logistics',
        start: '17:45',
        end: '18:00',
        title: 'Closing Remarks & Evening Agenda',
        details: '',
      },
      {
        id: 'd1-tour',
        kind: 'social',
        start: '18:30',
        end: '20:30',
        title: 'Guided Cultural Tour of Tarragona',
        details: "Meeting point: Portal del Roser, Via de l'Imperi Romà, 43002 Tarragona",
      },
      {
        id: 'd1-dinner',
        kind: 'social',
        start: '20:30',
        end: '22:00',
        title: 'Official Social Dinner (Day 1)',
        details: "Location: El Galliner de l'Anticuari, Carrer de Santa Anna, 3, 43003 Tarragona",
      },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    weekday: 'Tuesday',
    date: '8 September 2026',
    subtitle: '',
    isoDate: '2026-09-08',
    items: [
      {
        id: 'd2-registration',
        kind: 'logistics',
        start: '08:30',
        end: '08:45',
        title: 'Registration',
        details: '',
      },
      {
        id: 'd2-keynote',
        kind: 'keynote',
        start: '08:45',
        end: '09:15',
        title: 'Keynote Address (Day 2)',
        details: 'Metadata and vocabulary for regulatory computational models — Pascal Sanders (ANSES)',
      },
      {
        id: 'd2-s5',
        kind: 'session',
        number: '05',
        start: '09:15',
        end: '10:45',
        title: 'Evolution of PBPK as NAM',
        details: 'High-throughput PBPK modeling, ML/AI in PBPK, tools for decision making',
        chairs: 'Jean-Lou Dorne (EFSA), Spyros Karakitsios (AUTH)',
        presentations: [
          { speaker: 'Jean-Lou Dorne (EFSA)', title: 'NAM activities @ EFSA and regulatory applications' },
          { speaker: 'Deepika Deepika (IISPV/BfR)', title: 'Future of PBPK Harmonization' },
          { speaker: 'Alicia Paini (EFSA)', title: 'OECD PBK initiative and PARC interaction' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd2-coffee-poster',
        kind: 'break',
        start: '10:45',
        end: '11:15',
        title: 'Coffee Break & Poster Viewing',
        details: '',
      },
      {
        id: 'd2-s6',
        kind: 'session',
        number: '06',
        start: '11:15',
        end: '12:45',
        title: 'Next-Generation Risk Assessment Framework',
        details: 'Building data integration and reasoning pipeline (in-silico models with in-vitro and exposure data for Cumulative Risk Assessment)',
        chairs: 'Emma Consiglio (RIVM), Vikas Kumar (IISPV & BfR)',
        presentations: [
          { speaker: 'Spyros Karakitsios (AUTH)', title: 'From HBM data to internal dosimetry with ToxCast21 for risk assessment (in-silico)' },
          { speaker: 'Philip Marx-Stoelting (BfR)', title: 'In-vitro perspectives and risk assessment integration' },
        ],
        discussion: 'Panel discussion with guided questions',
      },
      {
        id: 'd2-lunch-poster',
        kind: 'break',
        start: '12:45',
        end: '14:00',
        title: 'Lunch Break & Poster Session',
        details: '',
      },
      {
        id: 'd2-s7',
        kind: 'session',
        number: '07',
        start: '14:00',
        end: '15:30',
        title: 'Evolving QSAR for Modern Regulatory Science',
        details: 'Quantitative Structure-Activity Relationships in regulatory workflows',
        chairs: 'Uko Maran (UT), Giuseppa Raitano (Mario Negri Institute, IT)',
        presentations: [
          { speaker: 'Uko Maran (University of Tartu)', title: 'QSAR Developments & Regulatory Applications' },
          { speaker: 'Giuseppa Raitano (Mario Negri Institute, IT)', title: 'Applications and Perspectives within VEGAHUB' },
          { speaker: 'Johannes Kruisselbrink (WUR)', title: 'From FAIR PBK to QSAR — How do we get there?' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd2-coffee',
        kind: 'break',
        start: '15:30',
        end: '16:00',
        title: 'Coffee Break',
        details: '',
      },
      {
        id: 'd2-s8',
        kind: 'session',
        number: '08',
        start: '16:00',
        end: '17:30',
        title: 'Bridging the Silos: FAIR Data, Harmonization & Standardization',
        details: 'Semantic Ontologies and Data Harmonization in Chemical Modeling',
        chairs: 'Iseult Lynch (University of Birmingham), Panče Panov (Jožef Stefan Institute)',
        presentations: [
          { speaker: 'Panče Panov (JSI)', title: 'Why semantics matter (Case study)' },
          { speaker: 'Saurav Kumar (IISPV)', title: 'PARC model and data harmonisation and standardisation' },
          { speaker: 'Iseult Lynch (Univ. of Birmingham)', title: 'Engagement with CDIF4EOSC / Cross-domain implementation framework' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
      {
        id: 'd2-closing',
        kind: 'logistics',
        start: '17:30',
        end: '17:45',
        title: 'Closing Remarks of Modellers Meeting',
        details: '',
      },
      {
        id: 'd2-dinner',
        kind: 'social',
        start: '19:30',
        end: '23:00',
        title: 'Social Dinner (Day 2)',
        details: 'Location: Nautic Restaurant, Edifici Nautic, Moll de Llevant, S/N, 43004 Tarragona',
      },
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    weekday: 'Wednesday',
    date: '9 September 2026',
    subtitle: 'Joint Session with WP7',
    isoDate: '2026-09-09',
    items: [
      {
        id: 'd3-s9',
        kind: 'session',
        number: '09',
        start: '09:00',
        end: '10:30',
        title: 'Semantic Ontologies in PARC and Beyond',
        details: 'Joint Session with Work Package 7 (WP7)',
        chairs: 'Iseult Lynch (Univ. of Birmingham), Vikas Kumar (IISPV & BfR)',
        presentations: [
          { speaker: 'Vikas Kumar (IISPV)', title: 'PBPK Ontology' },
          { speaker: 'Iseult Lynch (Univ. of Birmingham)', title: 'Ontology frameworks and interoperability' },
          { speaker: 'Marvin Martens (Maastricht University)', title: 'AOP Ontology' },
        ],
        discussion: '30 min Q&A and guided discussion',
      },
    ],
  },
];

export const HACKATHON_MILESTONES = {
  id: 'hackathon',
  label: 'Hackathon Parallel Sessions',
  dateRange: '7–10 September 2026',
  intro: 'The hackathon track runs in parallel across all 4 days. Final presentations and award announcements take place on 10 September:',
  isoDate: '2026-09-10',
  items: [
    {
      id: 'hack-presentations',
      kind: 'logistics',
      start: '13:30',
      end: '16:00',
      title: 'Hackathon Discussion & Team Presentations',
      details: '',
      dateLabel: '10 September',
    },
    {
      id: 'hack-awards',
      kind: 'logistics',
      start: '16:50',
      end: '17:00',
      title: 'Hackathon Awards & Winner Announcement',
      details: '',
      dateLabel: '10 September',
    },
  ],
};

/** Parse "HH:MM" into minutes since midnight. */
function timeToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/** Compute duration label from start/end "HH:MM" strings. */
export function formatDuration(start, end) {
  const mins = timeToMinutes(end) - timeToMinutes(start);
  if (mins <= 0) return '';
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

/** Build ISO datetime string for <time dateTime>. */
export function toDateTime(isoDate, time) {
  return `${isoDate}T${time}`;
}

/** Items that appear in the programme-at-a-glance index. */
export function getGlanceItems(days) {
  return days.map((day) => ({
    id: day.id,
    label: day.label,
    items: day.items.filter((item) => item.kind === 'session' || item.kind === 'keynote'),
  }));
}

/** All expandable session ids (sessions with presentations). */
export function getExpandableIds(days) {
  const ids = [];
  for (const day of days) {
    for (const item of day.items) {
      if (item.presentations?.length) ids.push(item.id);
    }
  }
  return ids;
}
