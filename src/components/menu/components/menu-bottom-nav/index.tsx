import { useState } from 'react';
import MobileView from './components/mobile-view';
import WebView from './components/web-view';

const MenuBottomNav = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-primary">
      <WebView/>
      <MobileView
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default MenuBottomNav;
