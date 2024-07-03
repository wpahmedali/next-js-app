import React from 'react';
import EmptyLayout from 'components/dashboard/EmptyLayout';
import Login from 'components/login';

const login = () => {
  return <Login />;
};
export default login;

login.getLayout = function getLayout(page) {
  return <EmptyLayout>{page} </EmptyLayout>;
};
