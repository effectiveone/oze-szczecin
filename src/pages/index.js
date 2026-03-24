import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Szczecin — Baza wiedzy" description="Wiedza o OZE w Szczecinie i Zachodniopomorskiem" siteName="OZE Szczecin" />
      <div style={{ background: 'var(--slate-pale)', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: 'var(--blue-accent)', background: 'var(--blue-pale)', padding: '0.2rem 0.6rem', borderRadius: 3, display: 'inline-block', marginBottom: '0.75rem' }}>oze.szczecin.docs</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--slate-dark)', marginBottom: '1rem', lineHeight: 1.2 }}>
              OZE w Szczecinie<br/>i na Pomorzu Zachodnim
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Rzetelna wiedza o odnawialnych źródłach energii — dane, analizy, poradniki dla mieszkańców i firm.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/blog" style={{ background: 'var(--slate-dark)', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: 4, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Przeglądaj artykuły</Link>
              <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--border)', color: 'var(--slate)', padding: '0.6rem 1.4rem', borderRadius: 4, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app ↗</a>
            </div>
          </div>
          <div style={{ background: 'var(--slate-dark)', borderRadius: 8, padding: '1.5rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem' }}>
            <p style={{ color: '#64748b', marginBottom: '0.5rem' }}># OZE Szczecin — portal lokalny</p>
            <p style={{ color: '#94a3b8' }}>region: <span style={{ color: '#3b82f6' }}>Zachodniopomorskie</span></p>
            <p style={{ color: '#94a3b8' }}>tematyka: <span style={{ color: '#22d3ee' }}>odnawialne źródła energii</span></p>
            <p style={{ color: '#94a3b8' }}>artykuły: <span style={{ color: '#a3e635' }}>{posts.length}</span></p>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>status: <span style={{ color: '#22c55e' }}>● online</span></p>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              Najnowsze artykuły
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(post => (
                <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
              ))}
            </div>
            {posts.length > 6 && <div style={{ textAlign: 'center' }}><Link to="/blog" style={{ color: 'var(--blue-accent)', fontWeight: 600 }}>Wszystkie artykuły ({posts.length}) →</Link></div>}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", color: 'var(--blue-accent)', fontSize: '1rem' }}>// artykuły wkrótce...</p>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Pierwsze materiały o OZE w Szczecinie pojawią się niedługo.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields { slug }
        excerpt(pruneLength: 160)
        frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags }
      }
    }
  }
`;

export default IndexPage;
