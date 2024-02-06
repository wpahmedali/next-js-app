import MobileView from './components/mobile-view';
import WebView from './components/web-view';

const MenuBottomNav = (): JSX.Element => {
  return (
    <header className="bg-primary flex">
      <div className="w-[15%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden"></div>
      <WebView />
      <MobileView />
    </header>
  );
};

export default MenuBottomNav;
