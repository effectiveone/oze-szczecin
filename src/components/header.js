import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--slate-dark)', borderBottom: '1px solid #334155' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.5rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: '#94a3b8', background: '#1e293b', border: '1px solid #334155', padding: '0.2rem 0.5rem', borderRadius: 3 }}>v1.0</span>
        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: '#f1f5f9' }}>OZE Szczecin</span>
        <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: "'IBM Plex Mono', monospace" }}>/ docs</span>
      </Link>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', fontFamily: "'IBM Plex Sans', sans-serif" }}>Główna</Link>
        <Link to="/blog" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', fontFamily: "'IBM Plex Sans', sans-serif" }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--blue-accent)', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 4, fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'IBM Plex Sans', sans-serif" }}>
          ecoaudyt.app ↗
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
