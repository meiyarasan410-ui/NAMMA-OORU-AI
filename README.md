# 🏛️ Namma Ooru AI (நம்ம ஊரு AI)
### *"Your Voice. Your Town. Your Future."*
**Smart Community Governance Platform for Tamil Nadu | Cybernaut Hackathon 2026**

[![React](https://img.shields.io/badge/Frontend-React%2019-blue.svg)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg)](https://fastapi.tiangolo.com)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%20%7C%20SQLite-336791.svg)](https://www.postgresql.org)
[![OpenStreetMap](https://img.shields.io/badge/Maps-OpenStreetMap%20%2B%20Leaflet-7cb342.svg)](https://www.openstreetmap.org)
[![Chart.js](https://img.shields.io/badge/Analytics-Chart.js-ff6384.svg)](https://www.chartjs.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

---

## 🌟 1. Project Overview

**Namma Ooru AI** is a multilingual, citizen-first civic tech governance platform built for urban local bodies across Tamil Nadu (Greater Chennai Corporation, Coimbatore, Madurai, Tiruchirappalli, Salem, and municipalities).

It streamlines communication between citizens and municipal authorities to report, triage, track, and resolve community problems:
- 🗑️ **Garbage accumulation & overflowing bins**
- 🚧 **Road potholes, craters, and damaged pavements**
- 💧 **Drinking water leaks & supply scarcity (CMWSSB)**
- 💡 **Broken & non-functioning streetlights (dark spots)**
- 🌊 **Stormwater drainage blockages, sewage overflow & flooding**

---

## 🏗️ 2. Architecture & Technology Stack

```
                     ┌──────────────────────────────────────────┐
                     │          React 19 Frontend               │
                     │  (Vite + Leaflet OSM + Chart.js + Speech) │
                     └────────────────────┬─────────────────────┘
                                          │ REST API (JSON)
                                          ▼
                     ┌──────────────────────────────────────────┐
                     │          FastAPI Backend (Python)        │
                     │  (Async Routers, CORS, Pydantic, Auth)   │
                     └─────────┬──────────────────────┬─────────┘
                               │                      │
                               ▼                      ▼
┌────────────────────────────────────────┐  ┌──────────────────────────────────┐
│   Multilingual AI Smart Triage Engine  │  │   PostgreSQL / SQLite Database   │
│   - Tamil (தமிழ்) & English Semantics   │  │   - Complaints & Status History  │
│   - Urgency & Sentiment Scoring        │  │   - Departments & Municipal Wards│
│   - Automated Department Routing       │  │   - Users & Officer Credentials  │
│   - Proximity Duplicate Detection      │  └──────────────────────────────────┘
└────────────────────────────────────────┘
```

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 19, Vite, Lucide Icons | Responsive modern civic-tech UI (Green & Blue accents) |
| **Styling** | Custom Modular CSS Design System | High-contrast, Senior-Citizen Large Text mode |
| **Maps** | OpenStreetMap + Leaflet | Geotagging, city presets, problem zone cluster map |
| **Voice / Speech** | Web Speech API (ta-IN & en-IN) | Voice-first reporting & Text-to-Speech status readout |
| **Charts** | Chart.js | Category doughnut, status pipeline, resolution trend |
| **Backend** | Python FastAPI, Uvicorn | High-throughput asynchronous REST API |
| **ORM / DB** | SQLAlchemy, PostgreSQL / SQLite | Robust relational schema, zero-setup default |
| **AI / NLP** | Hybrid Semantic NLP + Gemini LLM | Multilingual classification, explainable triage |

---

## 🚀 3. Quick Start (Run Locally)

### Option A: One-Click Windows Launch
Double-click `run.bat` or run:
```powershell
.\start.ps1
```
This automatically boots both the FastAPI backend (`http://localhost:8000`) and the React frontend (`http://localhost:5173`).

---

### Option B: Step-by-Step Manual Launch

#### 1. Backend Setup (FastAPI)
```bash
cd backend

# 1. Activate the included virtual environment
# On Windows:
.venv\Scripts\activate

# 2. Start the FastAPI server
python main.py
```
> The backend will start on **`http://localhost:8000`**  
> Interactive Swagger API Documentation: **`http://localhost:8000/docs`**

#### 2. Frontend Setup (React)
In a separate terminal window:
```bash
cd frontend

# Start the Vite development server
npm run dev
```
> The web application will open on **`http://localhost:5173`**

---

## 🔑 4. Demo Login Credentials

The platform includes seeded accounts for hackathon demonstration:

| Role | Email | Password | Access Area |
|---|---|---|---|
| **Ward Municipal Officer** | `officer@chennaicorp.tn.gov.in` | `officer123` | Officer Dashboard (Triage & Updates) |
| **Municipal Commissioner** | `admin@chennaicorp.tn.gov.in` | `admin123` | Administration & Department Reassignment |
| **Citizen** | *(No login required)* | — | Open reporting, tracking & personal dashboard |

---

## 🎯 5. Main Pages & Capabilities

### A. Home Page
- Welcoming landing experience with Tamil Nadu civic identity
- Real-time civic counters: Total complaints, Resolved cases, Pending cases, Avg resolution time (28 hours)
- 4-step "How It Works" transparent workflow
- Civic categories showcase and community impact overview
- 24/7 Citizen Emergency Helpline banner (`Dial 1913`)

### B. Citizen Complaint Submission (`/report`)
- Multilingual voice input with waveform visualization (Tamil `ta-IN` and English `en-IN`)
- Real-time AI triage preview displaying predicted category, recommended department, urgency, and explainability reasoning
- Photo / evidence upload preview
- Interactive OpenStreetMap pin selector with Tamil Nadu city quick-jump pills (Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli)
- Automated duplicate complaint detection based on category and geospatial proximity
- Success confirmation modal with generated tracking ID (e.g., `NOAI-2026-1001`)

### C. Complaint Tracking (`/track`)
- Lookup by complaint ID with sample demo complaint quick-select chips
- 5-stage visual progress timeline:
  `Submitted` ➔ `Under Review` ➔ `Assigned` ➔ `In Progress` ➔ `Resolved`
- **Text-to-Speech (TTS) Voice Readout** for elderly and visually impaired citizens
- Audit history timeline with timestamps, officer names, and action remarks
- Incident location map snippet and direct department contact information

### D. Citizen Dashboard (`/citizenDashboard`)
- Comprehensive overview of all complaints submitted by the citizen
- Filter by status (`Pending`, `In Progress`, `Resolved`)
- Search by ID, keyword, or locality
- Direct link to track each complaint's lifecycle

### E. Municipal Officer Control Center (`/officerDashboard`)
- Administrative KPIs (Received, In Progress, Resolved, Resolution Rate)
- Three operational views:
  1. **Complaint Management Table:** Filter by status, category, ward, or keyword. Action button opens modal to transition status and append remarks.
  2. **OpenStreetMap Problem Zones:** Geospatial map visualizing all complaint locations color-coded by urgency.
  3. **Chart.js Civic Analytics:** Category doughnut chart, status pipeline bar chart, and 5-month intake vs. resolution line trend.

### F. Accessibility & Inclusion (A11y)
- **Tamil (தமிழ்) & English (English)** instant language switcher
- **A+ Large Text Mode** with enhanced contrast and enlarged touch targets for senior citizens
- Full keyboard navigation and semantic HTML form markup

---

## 🗄️ 6. Database Schema & Configuration

### Schema DDL (`database/schema.sql`)
The PostgreSQL schema provides normalized tables:
- `departments`: Municipal departments (Sanitation, Roads, Water, Electrical, Drainage)
- `users`: Officers and administrators with role-based access
- `complaints`: Geotagged civic grievances with AI prediction attributes
- `complaint_status_history`: Audit log tracking status transitions, timestamps, and officer comments

### Environment Variables (`.env.example`)
```env
ENVIRONMENT=development
PORT=8000
FRONTEND_URL=http://localhost:5173

# Database (SQLite default for zero-setup demo; switchable to PostgreSQL)
DATABASE_URL=sqlite:///./namma_ooru.db
# DATABASE_URL=postgresql://postgres:postgres@localhost:5432/namma_ooru_db

# Optional: Google Gemini API Key for enhanced LLM inference
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash

MUNICIPALITY_NAME=Greater Chennai Corporation & Tamil Nadu Urban Local Bodies
SUPPORT_HELPLINE=1913
```

---

## 📡 7. Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Platform health & hackathon metadata |
| `POST` | `/api/complaints/` | Submit & AI-classify new complaint |
| `GET` | `/api/complaints/` | List complaints with category & status filters |
| `GET` | `/api/complaints/{id}` | Retrieve complaint details & audit history |
| `PATCH` | `/api/complaints/{id}/status` | Update status (`Under Review`, `Assigned`, etc.) |
| `PATCH` | `/api/complaints/{id}/reassign` | Reassign complaint to another department |
| `POST` | `/api/ai/classify` | On-the-fly AI triage in Tamil or English |
| `GET` | `/api/dashboard/stats` | Aggregated metrics for Chart.js dashboards |
| `GET` | `/api/dashboard/map-points` | Geospatial points for OpenStreetMap rendering |
| `POST` | `/api/auth/login` | Officer authentication |

---

## 🏆 8. Cybernaut Hackathon 2026 Deliverables Checklist

- [x] **Complete React.js Frontend** with modular components
- [x] **Integrated Authentication Portal (`AuthPage.jsx`)** with dual Citizen & Officer login, password strength meter, social auth, and 1-click demo logins
- [x] **Python FastAPI Backend** with async routers & CORS
- [x] **PostgreSQL Database Schema** (`database/schema.sql`)
- [x] **AI Multilingual Classification Module** (`backend/ai_classifier.py`)
- [x] **OpenStreetMap & Leaflet Integration** (picker & problem zones)
- [x] **Chart.js Analytics Dashboards** (Doughnut, Bar, Line)
- [x] **Realistic Tamil Nadu Sample Complaints & Demo Accounts**
- [x] **Tamil (தமிழ்) & English Support + Voice Input & Large Text Mode**
- [x] **`.env.example` & Launch Scripts (`run.bat`, `start.ps1`)**

---

*Built with ❤️ for the Cybernaut Hackathon 2026. Dedicated to empowering the citizens and municipalities of Tamil Nadu.*
