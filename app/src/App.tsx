import { useState } from 'react'
import { Rocket, Shield, BookOpen, Users } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-section">
          <div className="logo-icon">MV</div>
          <h1>OS Portal</h1>
        </div>
        <nav className="app-nav">
          <a href="../index.html">Wiki Home</a>
          <a href="../skills-wiki.html">Skills Registry</a>
          <a href="../org-chart.html">Org Chart</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <span className="eyebrow"><Rocket size={14} /> System Online</span>
          <h2>A Bespoke Agentic Operating System</h2>
          <p>
            Welcome to the custom MV-OS portal. This application is designed to orchestrate
            high-precision agency workflows across The Consultant, Machine Vision, and The Auditor.
          </p>
          
          <div className="cta-group">
            <button className="btn-primary" onClick={() => setCount((count) => count + 1)}>
              Initialize Protocol {count > 0 && `(${count})`}
            </button>
            <button className="btn-secondary">Explore Documentation</button>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <Shield className="feature-icon" color="#1D9E75" />
            <h3>Agency Core</h3>
            <p>Direct integration with official agency doctrine and operating rules.</p>
          </div>
          <div className="feature-card">
            <BookOpen className="feature-icon" color="#534AB7" />
            <h3>Skill Registry</h3>
            <p>Searchable database of 25+ specialized agent skills and prompt specs.</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" color="#BA7517" />
            <h3>Team Roster</h3>
            <p>Hierarchical organization chart for all sub-agents and lead roles.</p>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-status">
          <div className="status-dot"></div>
          <span>MV-OS v0.1.0-alpha · Ready for development</span>
        </div>
      </footer
