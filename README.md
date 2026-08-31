# PARC Modellers Meeting 2 + Hackathon (2026) Website

Official event website for the **2nd PARC Modellers Meeting and Hackathon**: *Advancing Computational Approaches for Next-Generation Chemical Risk Assessment*.

---

## 📌 Event Details

- **Dates:** 07–08 September 2026 *(WP7 Annual meeting follows Sep 9–10)*
- **Hackathon:** 07–10 September 2026 (4-Day parallel sessions)
- **Venue:** Tarragona, Spain *(In-person with hybrid options)*
- **Coordinators:** 
  - Vikas Kumar (*IISPV and BfR*)
  - Philip Marx-Stoelting (*BfR*)
  - Giles Rivière (*ANSES*)
  - Denis Sarigiannis (*AUTH*)

---

## 🚀 Getting Started (Local Development)

The website is built as a lightweight single-page application using **React** and **Vite**.

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (installed automatically with Node.js)

### Steps to Run

1. Open your terminal and navigate to the project directory:
   ```bash
   cd parc_hackathon
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`.

---

## 🌐 Deployment to GitHub Pages

The repository includes a ready-to-use GitHub Actions workflow located at `.github/workflows/deploy.yml` that builds and deploys the website automatically upon pushing to the `main` branch.

### Deployment Instructions:

1. Create a new repository under your organization at **[InSilicoVida-Research-Lab](https://github.com/orgs/InSilicoVida-Research-Lab/repositories)** (e.g., named `parc-hackathon-2026`).
2. Open your terminal, initialize git inside the project directory, and push:
   ```bash
   cd parc_hackathon_react
   git init
   git add .
   git commit -m "Initial commit of PARC Hackathon website"
   git branch -M main
   git remote add origin https://github.com/InSilicoVida-Research-Lab/<REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The site will automatically build and publish to `https://insilicovida-research-lab.github.io/<REPO-NAME>/`.

---

## 📂 Project Structure

```
parc_hackathon_react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets and logos
├── src/
│   ├── pages/
│   │   ├── Home.jsx            # Event overview, themes, coordinators, abstract
│   │   ├── Agenda.jsx          # 3-day schedule & parallel hackathon sessions
│   │   └── Hackathon.jsx       # Hackathon challenges, mentors & form links
│   ├── App.jsx                 # Header with logos, navigation & main layout
│   ├── index.css               # Clean styling with PARC & IRBCatSud branding
│   └── main.jsx                # React root entry point
├── index.html                  # HTML entry point
├── package.json
└── vite.config.js              # Vite configuration (with relative base path)
```

---

## 🤝 Participating Organizations & Funding

- **PARC** — Partnership for the Assessment of Risks from Chemicals ([eu-parc.eu](https://www.eu-parc.eu/))
- **IRBCatSud / IISPV** — Institut d'Investigació Sanitària Pere Virgili ([irbcatsud.cat](https://www.irbcatsud.cat/))
- **Co-funded by the European Union**
