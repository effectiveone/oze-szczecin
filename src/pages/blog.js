import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Baza artykułów o OZE w Szczecinie" siteName="OZE Szczecin" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: 'var(--blue-accent)' }}>// archive</span>
          <h1 style={{ fontSize: '2rem', color: 'var(--slate-dark)', marginTop: '0.25rem' }}>Artykuły ({posts.length})</h1>
        </div>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {posts.map(post => (
              <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
            ))}
          </div>
        ) : <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0', fontFamily: "'IBM Plex Mono', monospace" }}>// brak artykułów</p>}
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

export default BlogPage;
