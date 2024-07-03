import LeftMenu from 'components/left-menu';
import RightMenu from 'components/right-menu';
import MobileBottomNav from 'components/mobile-bottom-nav';
import useMobileView from 'src/hooks/mobile-view';
import { useSetContext } from 'src/providers/ModelContext';

const WrapperLayout = ({ children }) => {
  const setContext = useSetContext();
  const mobileView = useMobileView();

  return (
    <div className="flex relative items-start justify-center lg:flex-row md:flex-row px-16 xl:px-3 lg:px-3 sm:px-2 xs:px-2 xxs:px-2 sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse mt-2">
       <button
            onClick={() => setContext('smartMenu')}
            className="grid-btn bg-primary p-2 gap-1 cursor-pointer hover:bg-slate-900 hover:fill-white rounded-l-lg active:bg-black-600 focus:outline-2 focus:ring focus:ring-gray-600 ring-primary ring-offset-2 ring-1 fixed -right-0 min-h-32 z-50 top-52"
          >
            <div className='relative'>
            <span className='rounded-l-full absolute -top-4 -z-10 -left-7 flex bg-primary p-1 h-7 w-8 active:bg-black-600 focus:ring ring-primary ring-offset-1 cursor-pointer hover:bg-slate-900'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='hover:text-white'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

              
            </span>
            </div>
          </button>
      <LeftMenu />
      <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 px-2 md:w-11/12 sm:w-full xs:w-full xxs:w-full xl:mt-0 lg:mt-0 md:mt-2 sm:mt-0 2xl:px-2 lg:px-2 md:px-2 sm:px-1 xs:px-1 xxs:px-1 xs:mt-2 xxs:mt-2 xxs:order-first sm:order-first xs:order-first lg:order-none md:order-none">
        {children}
        {mobileView && <MobileBottomNav />}
      </div>
      <RightMenu />
    </div>
  );
};
export default WrapperLayout;
