import React from 'react';

import Layout from 'components/Layout';
import Project from 'components/Project';

const testProjects = [
  'Nivea_Mousse.jpg',
  'Innovation_Vouchers.jpg',
  'JaxJones.jpg',
  'Drone_FUI.jpg',
  'Ardoq.jpg',
  'BCFC.jpg',
  'Bulkpowders.jpg',
  'Kasp_Races.jpg',
  'Panache.jpg',
];

const IndexPage = () => (
  <Layout contentClassName="Projects">
    {testProjects.map(img => <Project thumbnail={require(`assets/images/thumbnails_examples/${img}`)} />)}
  </Layout>
);

export default IndexPage;
