/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/blog-post.tsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const {
    data: {
      postsRemark: { edges },
    },
  } = result;

  const defaultPostTitle =
    edges.length > 0 ? edges[edges.length - 1].node.frontmatter.path : '';

  createPage({
    path: 'blog',
    component: postTemplate,
    context: {
      title: defaultPostTitle,
    },
  });
  edges.forEach(({ node }) => {
    createPage({
      path: `blog${node.frontmatter.path}`,
      component: postTemplate,
      context: {
        title: node.frontmatter.path,
      },
    });
  });
};
