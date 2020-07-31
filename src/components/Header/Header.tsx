/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';

import { wrapper } from '../../css';

interface Props {
  siteTitle: string;
}

const alignCenter = css`
  justify-self: center;
  align-self: center;
`;

const font = css`
  ${alignCenter}
  margin-top: 14px;
  margin-bottom: 14px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
`;

const headerContainer = css`
  background-color: white;
  border-bottom-color: #cecece;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding: 0px 20px;
  position: sticky;
  top: 0;
`;

const headerWrapper = css`
  ${wrapper}
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-gap: 16px;
`;

const headerLogoWrapper = css`
  justify-self: start;
  align-self: center;
`;

const navWrapper = css`
  display: grid;
  grid-template-columns: repeat(2, auto) 1fr;
  grid-gap: 16px;
`;

const Header = ({ siteTitle }: Props) => (
  <header css={headerContainer}>
    <div css={headerWrapper}>
      <div css={headerLogoWrapper}>
        <Link css={font} to="/">
          {siteTitle}
        </Link>
      </div>
      <nav css={navWrapper}>
        <Link
          css={font}
          to="/blog"
          activeStyle={{ color: 'hotpink' }}
          partiallyActive={true}
        >
          Blog
        </Link>
        <div />
      </nav>
    </div>
  </header>
);

export default Header;
