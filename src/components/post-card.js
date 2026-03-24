import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 4, padding: '1.4rem', transition: 'box-shadow 0.2s', borderLeft: '3px solid var(--blue-accent)' }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(59,130,246,0.1)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {tags && tags.map(t => <span key={t} style={{ background: 'var(--blue-pale)', color: 'var(--blue-accent)', fontSize: '0.65rem', fontWeight: 600, padding: '0.1rem 0.4rem', borderRadius: 3, fontFamily: "'IBM Plex Mono', monospace", textTransform: 'uppercase' }}>{t}</span>)}
      </div>
      <time style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{date}</time>
    </div>
    <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.35 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--slate-dark)', textDecoration: 'none' }}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ color: 'var(--blue-accent)', fontSize: '0.82rem', fontWeight: 600 }}>Czytaj artykuł →</Link>
  </article>
);

export default PostCard;
