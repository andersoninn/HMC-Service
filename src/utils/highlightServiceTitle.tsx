import React from 'react';

export const highlightServiceTitle = (title: string, highlights: string[]): React.ReactNode[] => {
  const words = title.split(' ');

  return words.map((word, idx) => {
    const cleanWord = word.replace(/[.,]/g, '');
    const shouldHighlight = highlights.includes(cleanWord);

    return (
      <span
        key={idx}
        className={shouldHighlight ? 'highlight-underline relative z-10' : 'relative z-0'}
      >
        {word + ' '}
      </span>
    );
  });
};
