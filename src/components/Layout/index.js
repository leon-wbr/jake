import React, { Fragment } from 'react';

import Background from './Background';
import Sidebar from './Sidebar';

import './Layout.scss';

const Layout = ({ children, contentClassName }) => (
  <Fragment>
    <Background />
    <div className="Layout">
      <Sidebar />
      <main className={`Layout__Content ${contentClassName || ''}`}>
        {children}
      </main>
    </div>
  </Fragment>
);

export default Layout;
