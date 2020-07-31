/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0px;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
    </>
  );
};

export default Layout;
