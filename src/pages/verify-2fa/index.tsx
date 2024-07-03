import React from 'react';
import Verify2fa from 'components/verify-2fa';
import EmptyLayout from 'components/dashboard/EmptyLayout';

const verify2fa = () => {
  return <Verify2fa />;
};
export default verify2fa;

verify2fa.getLayout = function getLayout(page) {
  return <EmptyLayout>{page} </EmptyLayout>;
};
