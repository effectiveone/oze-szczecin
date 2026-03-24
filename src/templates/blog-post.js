import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Szczecin" />
      <div className="container" style={{ padding: '2rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr 260px', gap: '3rem', maxWidth: '1100px' }}>
        <article>
          <nav style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: "'IBM Plex Mono', monospace" }}>
            <Link to="/">index</Link> / <Link to="/blog">artykuły</Link> / <span>{title}</span>
          </nav>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {tags && tags.map(t => <span key={t} style={{ background: 'var(--blue-pale)', color: 'var(--blue-accent)', fontSize: '0.68rem', fontWeight: 600, padding: '0.15rem 0.45rem', borderRadius: 3, fontFamily: "'IBM Plex Mono', monospace", textTransform: 'uppercase' }}>{t}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--slate-dark)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{title}</h1>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{date} · {author}</p>
          {description && <p style={{ background: 'var(--slate-pale)', borderLeft: '3px solid var(--blue-accent)', padding: '0.75rem 1rem', color: 'var(--slate)', marginBottom: '2rem', fontSize: '0.95rem' }}>{description}</p>}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <aside style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem', paddingTop: '4rem' }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Polecamy</p>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
            style={{ display: 'block', background: 'var(--blue-pale)', border: '1px solid var(--border)', padding: '1rem', borderRadius: 4, textDecoration: 'none' }}>
            <strong style={{ display: 'block', color: 'var(--blue-accent)', marginBottom: '0.3rem', fontSize: '0.9rem' }}>ecoaudyt.app</strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Darmowy audyt energetyczny online</span>
          </a>
        </aside>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
