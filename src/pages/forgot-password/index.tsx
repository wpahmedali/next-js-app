import React from 'react';
import EmptyLayout from 'components/dashboard/EmptyLayout';
import PageHeader from 'components/forgot-password/components/PageHeader';
import UserNameForm from 'components/forgot-password/components/UserNameForm';
import PageFooter from 'components/forgot-password/components/PageFooter';

const forgotPassword = () => {
  return (
    <div className="rounded-md mb-0 bg-gray-50 2xl:h-auto sm:h-screen md:h-auto bg-fixed bg-cover overflow-y-scroll h-screen w-full bg-[url('/assets/login-bg.jpg')]">
      <div className="flex flex-col items-center justify-center sm:p-0 3xl:mx-auto 2xl:mx-auto lg:mx-auto md:mx-auto md:h-screen lg:py-0 2xl:m-0 sm:m-4 xs:m-4 xxs:m-2 additional-margin">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md 2xl:py-8 sm:p-8 xs:p-8 xxs:p-8 additional-padding">
          <PageHeader />
          <div className="mt-10 sm:mx-auto">
            <UserNameForm />
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default forgotPassword;

forgotPassword.getLayout = function getLayout(page) {
  return <EmptyLayout>{page} </EmptyLayout>;
};
