import React, { createRef, useEffect } from 'react';

const Utterances = () => {
  const ref = createRef<HTMLDivElement>();
  const repo = process.env.GATSBY_COMMENT_REPO;

  useEffect(() => {
    if (ref) {
      const utterances = document.createElement('script');
      const attributes = {
        src: 'https://utteranc.es/client.js',
        repo: 'shhong7757/shhong7757.github.io',
        label: 'comment',
        'issue-term': 'pathname',
        theme: 'github-light',
        crossOrigin: 'anonymous',
        async: 'true',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      ref.current?.appendChild(utterances);
    }
  }, [repo]);

  return <div ref={ref} />;
};

Utterances.displayName = 'Utterances';

export default Utterances;
