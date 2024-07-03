import React from 'react';
import EmptyLayout from 'components/dashboard/EmptyLayout';
import PosterPrint from 'components/poster';

const Poster = () => {
  return <PosterPrint />;
};
export default Poster;

Poster.getLayout = function getLayout(page) {
  return <EmptyLayout>{page} </EmptyLayout>;
};
