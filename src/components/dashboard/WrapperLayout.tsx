import LeftMenu from 'components/left-menu';
import Banner from 'components/banner';
import RightMenu from 'components/right-menu';
import GlobalFilters from 'components/global-filters';

const WrapperLayout = ({ children }) => {
  return (
    <div className="flex items-start justify-center lg:flex-row md:flex-row px-16 xl:px-3 lg:px-3 sm:px-2 xs:px-2 xxs:px-2 sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse mt-2">
      <LeftMenu />
      <div className="2xl:w-4/6 xl:w-4/6 lg:w-4/6 px-2 md:w-8/12 sm:w-full xs:w-full xxs:w-full xl:mt-0 lg:mt-0 md:mt-2 sm:mt-0 2xl:px-2 lg:px-2 md:px-2 sm:px-1 xs:px-1 xxs:px-1 xs:mt-2 xxs:mt-2 xxs:order-first sm:order-first xs:order-first lg:order-none md:order-none">
        <Banner />
        <GlobalFilters />
        {children}
      </div>
      <RightMenu />
    </div>
  );
};
export default WrapperLayout;
