import HeaderLeftAuthButtons from './components/HeaderLeftAuthButtons';
import HeaderRightAuthButtons from './components/HeaderRightAuthButtons';

const HeaderTopNav = () => {
  return (
    <div className="bg-black flex-col lg:flex-row md:flex-row sm:flex-col sm:p-0 xs:flex-col xxs:flex-col sm:h-16 xs:h-16 xxs:h-16 xs:pt-4 xxs:pt-4 xs:pb-4 xxs:pb-4 lg:h-10 lg:justify-between md:justify-between flex items-center justify-between w-full lg:py-2 md:py-2 relative sm:flex-auto sm:items-center sm:justify-center md:h-10">
      <HeaderLeftAuthButtons />
      <HeaderRightAuthButtons />
    </div>
  );
};
export default HeaderTopNav;
