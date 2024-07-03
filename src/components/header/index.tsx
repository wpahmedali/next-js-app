import React from 'react';
import Logo from 'components/logo/Logo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderTopNav from './components/header-top-nav';
import HeaderBottomNav from './components/header-bottom-nav';

const Header = () => {
  return (
    <header className="w-full items-center justify-between">
      <ToastContainer />
      <div className="lg:px-3 md:px-16 sm:px-0 xs:px-0 xxs:px-0 bg-black">
        <Logo />
        <HeaderTopNav />
      </div>
      <HeaderBottomNav />
    </header>
  );
};
export default Header;
