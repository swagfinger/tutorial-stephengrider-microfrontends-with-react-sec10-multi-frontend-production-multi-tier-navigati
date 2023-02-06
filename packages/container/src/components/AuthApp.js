import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    // what mount() does: it takes in an element which will become the parent of mounting component...
    //eg. if el is <root>, mount(el) - will make MarketingApp a child of root.
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      //rename pathname to nextPathname
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('the container noticed navigation in marketing');
        console.log('nextPathname: ', nextPathname);
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
