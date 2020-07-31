interface BlogData {
  allMarkdownRemark: {
    group: Array<{
      category: string;
      totalCount: number;
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            date: string;
            path: string;
            tags: string[];
            title: string;
          };
        };
      }>;
    }>;
  };
}

interface IndexData {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        id: string;
        frontmatter: {
          date: string;
          path: string;
          tags: string[];
          title: string;
        };
      };
    }>;
  };
}

interface PostTitle {
  date: string;
  id: string;
  path: string;
  title: string;
  tags: string[];
}

type Category = { value: string | null; totalCount: number };
type CategoryGroup = { category: string | null; postTitles: PostTitle[] };
