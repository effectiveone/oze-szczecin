const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'content/blog' });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields { slug }
          frontmatter { title }
        }
      }
    }
  `);

  if (result.errors) return;

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: { slug: node.fields.slug },
    });
  });
};
