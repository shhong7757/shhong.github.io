/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx, css } from '@emotion/core';
import { useMemo, useState, useEffect, useCallback } from 'react';

import useWindowWidth from '../hooks/useWindow';

import GroupByCategory from '../components/GroupByCategory';
import Layout from '../components/Layout';
import Utterances from '../components/Utterances';

import Menu from '../../contents/assets/menu.svg';

import 'prismjs/themes/prism-okaidia.css';

const articleWrapper = css`
  margin-left: 48px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const mainWrapper = css`
  display: grid;
  grid-template-columns: 280px 1fr;
  margin: 0px auto;
  max-width: 1200px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const mainContainer = css`
  padding: 0px 20px;
`;

const navContainer = css`
  @media (min-width: 1024px) {
    height: calc(100vh - 61px);
    overflow-y: scroll;
    padding-right: 20px;
    position: sticky;
    top: 61px;
  }
  @media (max-width: 1023px) {
    background-color: #f7f7f7;
    padding: 0px 20px;
    z-index: 100;
  }
`;

const navWrapper = css`
  height: 100%;
  overflow: auto;
`;

const subNavWrapper = css`
  align-items: ceter;
  background-color: white;
  border-bottom-color: #cecece;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  line-height: 24px;
  padding: 8px 20px;
  position: sticky;
  top: 61px;
`;

const titleFont = css`
  font-weight: 700;
  font-size: 60px;
  line-height: 65px;
  margin: 20px 0px 4px 0px;
`;

const PostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reactive, setReactive] = useState(false);

  const {
    allMarkdownRemark: { group },
    markdownRemark: {
      frontmatter: { title, category: categoryOfSelectedTitle, date },
      html,
    },
  } = data; // data.markdownRemark holds our post data

  const windowWidth = useWindowWidth();

  const categoryGroups: CategoryGroup[] = useMemo(() => {
    return group.map(g => {
      const { category, edges } = g;
      const postTitles = edges.map(edge => {
        const {
          node: {
            id,
            frontmatter: { title, path },
          },
        } = edge;
        return { id, title, path };
      });
      return {
        category,
        postTitles,
      };
    });
  }, [group]);

  const showCategoriews = useMemo(() => !(!isOpen && reactive), [
    isOpen,
    reactive,
  ]);

  useEffect(() => {
    if (windowWidth && windowWidth < 1024) setReactive(true);
    else setReactive(false);
  }, [windowWidth]);

  useEffect(() => setIsOpen(false), [reactive]);

  const handleMenuClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const navContainerCombine = useMemo(
    () =>
      isOpen
        ? css`
            ${navContainer}
            box-sizing: border-box;
            height: 100%;
            left: 0px;
            overflow-y: auto;
            overscroll-behavior: contain;
            position: fixed;
            width: 100%;
          `
        : navContainer,
    [isOpen, reactive]
  );

  return (
    <Layout>
      {reactive && (
        <div css={subNavWrapper}>
          <span
            css={css`
              height: 24px;
              width: 24px;
            `}
            onClick={handleMenuClick}
          >
            <Menu />
          </span>
          <span
            css={css`
              margin-left: 10px;
            `}
          >
            {categoryOfSelectedTitle}
          </span>
        </div>
      )}
      <main css={mainContainer}>
        <div css={mainWrapper}>
          <div css={navContainerCombine}>
            <nav css={navWrapper}>
              {showCategoriews && (
                <GroupByCategory
                  categories={categoryGroups}
                  categoryOfSelectedTitle={categoryOfSelectedTitle}
                />
              )}
            </nav>
          </div>
          <article css={articleWrapper}>
            <div className="blog-post-container">
              <div className="blog-post">
                <div
                  css={css`
                    padding-bottom: 10px;
                  `}
                >
                  <h1 css={titleFont}>{title}</h1>
                  <span>🗓{date}</span>
                </div>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
              <Utterances />
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($title: String!) {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        category: fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $title } }) {
      html
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
