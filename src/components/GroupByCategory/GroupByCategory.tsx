/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Category from '../Category';

interface Props {
  categories: CategoryGroup[];
  categoryOfSelectedTitle: string;
}

const GroupByCategory = ({ categories, categoryOfSelectedTitle }: Props) => {
  return (
    <div
      css={css`
        padding: 20px 0px;
      `}
    >
      {categories.map((categoryGroup, index) => (
        <Category
          key={index.toString()}
          {...categoryGroup}
          categoryOfSelectedTitle={categoryOfSelectedTitle}
        />
      ))}
    </div>
  );
};

export default GroupByCategory;
