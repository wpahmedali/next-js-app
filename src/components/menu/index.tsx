import { Fragment } from 'react';
import MenuTopBar from 'components/menu/components/menu-top-nav';
import Logo from 'components/logo/Logo';
import { ToastContainer } from 'react-toastify';
import MenuBottomNav from './components/menu-bottom-nav';

const Menu = () => {
  return (
    <Fragment>
      <ToastContainer />
      <header className="w-full items-center justify-between">
        <div className="lg:px-3 md:px-16 sm:px-0 xs:px-0 xxs:px-0 bg-black">
          <Logo />
          <MenuTopBar />
        </div>
        <div className="bg-primary">
          <MenuBottomNav />
        </div>
      </header>
    </Fragment>
  );
};
export default Menu;
