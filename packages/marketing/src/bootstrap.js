import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//renders <App> in el
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//dev mode
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//prod mode
export { mount };
