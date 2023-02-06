import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // what mount() does: it takes in an element which will become the parent of mounting component...
    //eg. if el is <root>, mount(el) - will make MarketingApp a child of root.
    mount(ref.current);
  });

  return <div ref={ref} />;
};
