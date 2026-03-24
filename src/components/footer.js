import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--slate-dark)', color: 'var(--slate-light)', padding: '2.5rem 0 1.5rem', marginTop: '4rem', borderTop: '1px solid #334155' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#94a3b8', fontSize: '1rem', marginBottom: '0.75rem' }}>OZE_SZCZECIN.md</p>
          <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>Baza wiedzy o energii odnawialnej w Szczecinie i Zachodniopomorskiem.</p>
        </div>
        <div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: '#475569', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>NAWIGACJA</p>
          <Link to="/" style={{ display: 'block', color: '#64748b', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>→ index</Link>
          <Link to="/blog" style={{ display: 'block', color: '#64748b', fontSize: '0.88rem', textDecoration: 'none' }}>→ artykuły</Link>
        </div>
        <div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: '#475569', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>ZEWNĘTRZNE</p>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app ↗</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: '#334155' }}>© {year} OZE Szczecin</p>
      </div>
    </footer>
  );
};

export default Footer;
