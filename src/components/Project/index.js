import React from 'react';

import './Project.scss';

const Project = ({ thumbnail }) => (
  <article className="Project" style={{ width: '25%'}}>
    <img src={thumbnail} />
  </article>
);

export default Project;
