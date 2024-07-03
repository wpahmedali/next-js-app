import React from 'react';
import EmptyLayout from 'components/dashboard/EmptyLayout';
import PrintViewDocument from 'components/print-view-document';

const Print = () => {
  return <PrintViewDocument />;
};
export default Print;

Print.getLayout = function getLayout(page) {
  return <EmptyLayout>{page} </EmptyLayout>;
};
