import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { globalCss } from '@/stitches.config';

import './node-api';

import { Main, Sub } from './pages';

globalCss({
  '@import': [
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css',
  ],
  ':root': {
    fontSize: '6px',
    '--toastify-font-family': 'Pretendard',
  },
  body: {
    fontSize: '3rem',
    fontFamily: 'Pretendard',
    margin: '0px',
    overflow: 'hidden',
  },
  button: {
    fontFamily: 'Pretendard',
  },
  '*': {
    wordBreak: 'keep-all',
    userSelect: 'none',
  },
})();

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/sub' element={<Sub />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*');
