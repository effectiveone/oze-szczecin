import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
    <h1>404 — Strona nie istnieje</h1>
    <p style={{ marginTop: '1rem' }}>
      <Link to="/">← Wróć na stronę główną</Link>
    </p>
  </div>
);

export default NotFound;
