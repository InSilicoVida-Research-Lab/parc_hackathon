export const hackathonThemes = [
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
    ],
    overview: "Developing autonomous and semi-autonomous multi-agent workflows to synthesize toxicological evidence, evaluate study quality, and aggregate multi-stream data for quantitative weight-of-evidence (WoE) determinations."
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
    ],
    overview: "Formalizing Adverse Outcome Pathway (AOP) knowledge graphs into interoperable ontological representations, enhancing machine readability, cross-domain SPARQL queries, and FAIR toxicological modeling."
  },
  {
    id: 3,
    title: "AI-driven QSAR-to-PBPK Pipeline",
    subtitle: "Automated Parameterization for Data-Poor Chemicals",
    mentors: "Spyros Karakitsios (AUTH), Uko Maran (UT), and Rajesh",
    docPath: "./documents/Hackathon_draft_QSAR_to_PBPK_Final.docx",
    docName: "Hackathon draft_QSAR to PBPK_Final.docx",
    teams: [
      {
        teamName: "Team C",
        members: [
          { name: "Daniele Sebastiani", affiliation: "Universitat Rovira i Virgili" },
          { name: "Achilleas", affiliation: "Aristotle University of Thessaloniki (AUTH)" },
          { name: "Isaac Mensah", affiliation: "German Federal Institute for Risk Assessment (BfR)" }
        ]
      }
    ],
    themeSummary: "Teams build an automated, AI-driven pipeline combining QSAR modeling, public database queries, and LLM-assisted web/literature extraction to automatically populate required ADME input parameters for PBPK models (e.g., R httk). The pipeline calculates missing values, assigns data-provenance labels (Experimental vs. QSAR vs. LLM-derived), tracks source links, and provides an expert-in-the-loop review interface before executing pharmacokinetic simulations.",
    learningOutcomes: [
      {
        title: "Map PBPK Schemas",
        desc: "Map standard PBPK input parameters (e.g., MW, LogP, pKa, fup, CLint, tissue partition coefficients Kp) to automated API pipelines and QSAR predictors."
      },
      {
        title: "Web Scraping & API Harvesting",
        desc: "Implement scraping tools and API clients (e.g., PubChem, EPA CompTox) to retrieve available experimental properties from structured and semi-structured online sources."
      },
      {
        title: "Auto-Population & Provenance Labeling",
        desc: "Automatically populate a target PBPK model with retrieved or calculated values, tagging every parameter with a provenance label (Experimental/Measured, QSAR-Predicted, LLM-Extracted) and the exact citation/source URL."
      },
      {
        title: "PBPK Execution & Review",
        desc: "Deliver an interactive UI or structured spreadsheet that displays parameter lineage, allows modeler verification, and executes real-time PBPK simulations."
      }
    ],
    problemStatement: `Physiologically Based Pharmacokinetic (PBPK) models are mechanistic tools that simulate absorption, distribution, metabolism, and excretion (ADME) to predict internal tissue and plasma concentrations from external exposure. They are increasingly used by regulators as a New Approach Methodology (NAM) for both pharmaceutical and environmental chemical risk assessment (Deepika and Kumar, 2023).

A persistent bottleneck is that building a PBPK model is difficult when adequate drug- or chemical-specific parameters are unavailable, since measured values for most parameters do not exist for newly developed or data-poor compounds. In current practice, filling these gaps relies on manual literature mining, expert judgment, and read-across, which is slow, inconsistent across modelers, and difficult to scale to thousands of chemicals requiring prioritization.

QSAR models can predict many of these missing parameters directly from chemical structure, extending PBPK modeling to data-poor chemicals (Chen and Lin, 2026). This project builds a pipeline that uses AI (QSAR prediction plus LLM-assisted literature/data lookup) to auto-populate PBPK input parameters for a given chemical, supported by an expert-in-the-loop review interface.`,
    resourcesProvided: [
      {
        label: "Target PBPK Framework",
        desc: "R httk (High-Throughput Toxicokinetics) library documentation, default parameter structures, and sample execution scripts."
      },
      {
        label: "Candidate Test Set",
        desc: "Curated list of compounds ranging from well-characterized reference drugs (for validation) to data-poor environmental chemicals (e.g., specific PFAS or emerging metabolites)."
      },
      {
        label: "API Access & Scraping Targets",
        desc: "EPA CompTox Chemicals Dashboard API & PubChem PUG-REST API endpoints; Literature/Search APIs (PubMed API, OpenAlex, or web-scraping wrappers)."
      },
      {
        label: "QSAR Engines & Tools",
        desc: "RDKit descriptor calculator, OPERA QSAR models, or pre-trained QSAR models for fraction unbound (fup) and intrinsic clearance (CLint)."
      }
    ],
    phases: [
      {
        phase: "Phase 1",
        title: "Setup & Scoping",
        desc: "Clone the starter repo; review R httk documentation to identify required input parameters (MW, LogP, pKa, fup, CLint, tissue Kp values). Pick at least one well-characterized reference compound and one data-poor chemical. Build a parameter checklist mapping inputs to candidate sources."
      },
      {
        phase: "Phase 2",
        title: "Data Harvesting",
        desc: "Implement API clients for PubChem PUG-REST and EPA CompTox Chemicals Dashboard to auto-retrieve experimental parameter values. For unindexed parameters, implement LLM-assisted literature/web extraction (e.g., PubMed/OpenAlex query + LLM parsing) with source URLs attached."
      },
      {
        phase: "Phase 3",
        title: "QSAR Prediction Layer",
        desc: "For parameters missing after Phase 2, compute RDKit descriptors and run pre-trained QSAR models (OPERA, fup/CLint). Flag whether query compounds fall inside or outside the model's Applicability Domain (AD)."
      },
      {
        phase: "Phase 4",
        title: "Provenance Tagging & Review Interface",
        desc: "Merge harvested and predicted outputs into a single parameter table tagged by source (Experimental, QSAR-Predicted, LLM-Extracted) with source URLs and AD status. Build a lightweight review UI (spreadsheet, Shiny, Streamlit, or web table) allowing expert review and manual override."
      },
      {
        phase: "Phase 5",
        title: "PBPK Execution & Validation",
        desc: "Auto-populate reviewed parameter sets into httk and execute PBPK simulations. For the reference compound, compare simulated outputs (Cmax, AUC, concentration-time profiles) against published literature data to sanity-check pipeline accuracy."
      },
      {
        phase: "Phase 6",
        title: "Demo Prep",
        desc: "Prepare a concise walkthrough: pipeline architecture, one end-to-end worked example (compound identifier → populated httk file → simulation output), and key insights from the data-poor chemical case."
      }
    ],
    evaluationCriteria: [
      { criterion: "Pipeline completeness & functionality", weight: "25%", details: "End-to-end run from chemical identifier to populated PBPK input and executed simulation, without manual patching." },
      { criterion: "Scientific soundness", weight: "25%", details: "Correct parameter mapping to httk inputs; sensible QSAR model choice; correct interpretation/labeling of QSAR predictions (incl. AD awareness)." },
      { criterion: "Data provenance & transparency", weight: "20%", details: "Every parameter traceable to a clear source (Experimental / QSAR / LLM-Extracted) with citation/URL; review interface makes lineage legible." },
      { criterion: "Usability of the review interface", weight: "10%", details: "A modeler unfamiliar with the code can inspect, understand, and override parameter values." },
      { criterion: "Worked example & validation", weight: "10%", details: "Quality of the comparison between pipeline output and reference data for the validation compound." },
      { criterion: "Innovation / stretch goals", weight: "10%", details: "Low-confidence/OOD flagging implemented; pipeline generalizes to a second chemical; creative use of LLM-assisted extraction." },
      { criterion: "Presentation & communication", weight: "Bonus", details: "Clarity of the final walkthrough and ability to explain design trade-offs." }
    ],
    outcomes: [
      "A parameter checklist/schema for a standard PBPK model (e.g., httk), mapping required inputs to suitable QSAR models or data sources.",
      "A working script/tool that takes a chemical identifier, retrieves parameter values via QSAR and public databases (CompTox, PubChem), and outputs a populated PBPK input file.",
      "A review interface (spreadsheet or UI) displaying predicted vs. experimental parameters with source links and provenance.",
      "One end-to-end worked example running simulations on a data-poor chemical compared with reference validation data.",
      "Stretch goals: Automated low-confidence/OOD flagging and generalization to a second chemical class."
    ],
    references: [
      {
        citation: "Chen, X., Lin, Z., 2026. Integration of Machine Learning With PBPK and QSAR Modeling Approaches to Facilitate Drug Discovery and Development. CPT Pharmacomet. Syst. Pharmacol. 15, e70228.",
        url: "https://doi.org/10.1002/psp4.70228"
      },
      {
        citation: "Deepika, D., Kumar, V., 2023. The Role of “Physiologically Based Pharmacokinetic Model (PBPK)” New Approach Methodology (NAM) in Pharmaceuticals and Environmental Chemical Risk Assessment. Int. J. Environ. Res. Public Health 20, 3473.",
        url: "https://doi.org/10.3390/ijerph20043473"
      },
      {
        citation: "Pearce, R.G., Setzer, R.W., Strope, C.L., Sipes, N.S., Wambaugh, J.F., 2017. httk: R Package for High-Throughput Toxicokinetics. J. Stat. Softw. 79.",
        url: "https://doi.org/10.18637/jss.v079.i04"
      }
    ]
  },
  {
    id: 4,
    title: "LLM-Assisted FAIR PBPK Model Building",
    mentors: "Deepika Deepika (BfR/IRBCATSUD) and Johannes Kruisselbrink (WUR)",
    docPath: "./documents/LLM-Assisted_FAIR_PBPK_Model_Building_Final.docx",
    docName: "LLM-Assisted FAIR PBPK Model Building_Final.docx",
    teams: [
      {
        teamName: "Team D",
        members: [
          { name: "Yash Yogesh Gondegaonkar", affiliation: "Institut de Recerca Biomèdica Catalunya Sud (IRBCatSud)" },
          { name: "Martina Iulini", affiliation: "Università degli Studi di Milano (UMIL)" },
          { name: "Gautam", affiliation: "Universitat Rovira i Virgili (URV)" }
        ]
      }
    ],
    themeSummary: "Hands-on implementation combining Large Language Models (LLMs) with FAIR (Findable, Accessible, Interoperable, Reusable) data principles and minimum-information standards (MIRIAM, MIASE) to automatically translate unannotated PBPK code and mathematical equations into standardized, verifiable computational models with check-and-repair safeguards.",
    learningOutcomes: [
      {
        title: "Reproducibility in Systems Biology & PBPK",
        desc: "Understand why reproducibility is a persistent bottleneck for PBPK models and how minimum-information standards (MIRIAM for model annotation/provenance, MIASE for simulation conditions) address this."
      },
      {
        title: "FAIR Principles for Computational Models",
        desc: "Learn how the FAIR principles apply specifically to executable mathematical models and parameter provenance, not just raw static datasets."
      },
      {
        title: "LLM-Assisted Model Standardization",
        desc: "Use LLMs to translate legacy, under-annotated model descriptions into standardized, machine-readable formats (e.g., annotated SBML or modular Python/R scripts) coupled with a human-in-the-loop check-and-repair step."
      }
    ],
    problemStatement: `Reproducibility remains a major challenge for Physiologically Based Pharmacokinetic (PBPK) models: many published models do not share their source code or full equation sets. Minimum-information guidelines developed for systems biology models more broadly—such as MIRIAM (model annotation and provenance) and MIASE (simulation conditions needed to reproduce results)—are not systematically applied to PBPK.

FAIR principles (Findable, Accessible, Interoperable, Reusable) provide a crucial framework for in silico toxicology models, but in current practice most PBPK models are shared as one-off, under-annotated scripts or supplementary text rather than standardized, machine-readable formats.

LLMs are a natural fit for closing this gap: they can parse unstructured model descriptions (from literature, legacy scripts, or natural language specifications) and generate annotated, standardized model files. As demonstrated by recent proofs of concept (e.g., KinModGPT), pairing LLM extraction with an automated check-and-repair validation loop ensures semantic and syntactic correctness. This project applies these principles to PBPK models specifically to draft FAIR-compliant model files with parameter provenance, unit definitions, and simulation conditions.`,
    resourcesProvided: [
      {
        label: "Worked Example Model Input",
        desc: "At least one published or in-house PBPK model description (equations, parameters, and code where available) to serve as the reference benchmark."
      },
      {
        label: "Minimum-Information Checklists",
        desc: "Reference templates for MIRIAM (model annotation/provenance) and MIASE (simulation experiment conditions) to guide FAIR checklist construction."
      },
      {
        label: "FAIR Modeling Background",
        desc: "Literature and guidelines on FAIR principles applied to biomodels and in silico toxicology models (Wilkinson et al., 2016; Kruisselbrink et al., 2026)."
      },
      {
        label: "Reference Architecture (KinModGPT)",
        desc: "The KinModGPT proof-of-concept architecture for LLM-to-SBML conversion with automated validation and check-and-repair loops."
      }
    ],
    evaluationCriteria: [
      { criterion: "Checklist quality and grounding", details: "Meaningfully covers required metadata (authors, version, license), parameter provenance, units, and simulation conditions traceable to MIRIAM/MIASE guidance." },
      { criterion: "Tool functionality", details: "Reliably takes an existing PBPK model (equations or unannotated code) and produces standardized, annotated output (e.g., annotated SBML or documented Python/R) meeting the checklist." },
      { criterion: "Correctness safeguards", details: "Includes a credible check-and-repair or validation step, reflecting safeguards against LLM syntactic/semantic hallucinations." },
      { criterion: "Reproducibility of the worked example", details: "Demonstrates with a real PBPK model that the FAIR-ified version accurately reproduces original simulation outputs." },
      { criterion: "FAIR alignment", details: "The resulting model file is genuinely Findable, Accessible, Interoperable, and Reusable in line with FAIR principles." },
      { criterion: "Clarity of documentation and presentation", details: "Clear presentation, architectural flowcharts, and well-structured documentation." }
    ],
    outcomes: [
      "A short FAIR/MIRIAM-inspired checklist for PBPK models specifying required metadata, parameter provenance, standardized units, and simulation conditions.",
      "A tool/script where an LLM takes an existing PBPK model (paper equations or unannotated code) and outputs a standardized, annotated version meeting the checklist.",
      "One worked example demonstrating that the FAIR-ified PBPK model reproduces the original published simulation output.",
      "Stretch goals: A simple automated checker scoring model files against the checklist, and testing the tool on a structurally different PBPK model."
    ],
    references: [
      {
        citation: "Le Novère, N. et al., 2005. Minimum information requested in the annotation of biochemical models (MIRIAM). Nature Biotechnology 23, 1509–1515.",
        url: "https://doi.org/10.1038/nbt1156"
      },
      {
        citation: "Waltemath, D. et al., 2011. Minimum Information About a Simulation Experiment (MIASE). PLOS Computational Biology 7, e1001088.",
        url: "https://doi.org/10.1371/journal.pcbi.1001088"
      },
      {
        citation: "Wilkinson, M.D. et al., 2016. The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data 3, 160018.",
        url: "https://doi.org/10.1038/sdata.2016.18"
      },
      {
        citation: "Kruisselbrink, J.W. et al., 2026. FAIR data and modeling in computational toxicology. Computational Toxicology.",
        url: "https://doi.org/10.1016/j.comtox.2026.100426"
      },
      {
        citation: "Emmerich et al., 2023. KinModGPT: Natural Language to Kinetic Models via GPT. International Journal of Molecular Sciences 24, 7296.",
        url: "https://doi.org/10.3390/ijms24087296"
      }
    ]
  }
];
