/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import { useCallback, useState, useEffect, Fragment } from 'react';

import Arrow from '../../../contents/assets/arrow_right.svg';

const open = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(90deg)
  }
`;

const close = keyframes`
  from {
    transform: rotate(90deg)
  }
  to% {
    transform: rotate(0deg)
  }
`;

const categoryFont = css`
  color: #6d6d6d;
  flex: 1;
  font-size: 24px;
  font-weight: 700;
  margin: 0px;
`;

const titleFont = css`
  color: #1a1a1a;
  background-color: transparent;
  font-size: 16px;
`;

interface Props extends CategoryGroup {
  categoryOfSelectedTitle: string;
}

const Category = ({ category, categoryOfSelectedTitle, postTitles }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(category === categoryOfSelectedTitle);
  }, [category, categoryOfSelectedTitle]);

  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <Fragment>
      <div
        css={css`
          cursor: pointer;
          display: flex;
          flex-direction: row;
          margin-bottom: 8px;
        `}
        onClick={handleClick}
      >
        <h3 css={categoryFont}>{category}</h3>
        <div
          css={css`
            animation: ${isOpen ? open : close} 0.5s forwards;
          `}
        >
          <Arrow />
        </div>
      </div>
      {isOpen && (
        <ul css={{ margin: 0, padding: 0 }}>
          {postTitles.map(postTitle => {
            const { path, title } = postTitle;
            return (
              <li
                key={postTitle.id}
                css={css`
                  cursor: pointer;
                  list-style-type: 'none';
                  padding: 4px 0px;
                `}
              >
                <a href={`/blog${path}`} style={{ textDecoration: 'none' }}>
                  <span css={titleFont}>{title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Category;
