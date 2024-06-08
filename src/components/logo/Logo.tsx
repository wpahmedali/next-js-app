import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';

const Logo = () => {
  const router: NextRouter = useRouter();

  const handleOnClick = () => {
    if (router.asPath.length > 1) {
      router.push('/');
    }
  };
  return (
    <button onClick={handleOnClick} className=' absolute z-10 top-0 left-0'>
      <Image
        alt="logo"
        className="pl-4 items-center justify-between sm:translate-x-[-4px] sm:left-[-4px] xs:translate-x-[-4px] xs:left-[-4px] xxs:left-[-4px] xxs:translate-x-[-4px] lg:left-0 lg:translate-x-0 md:translate-x-0 md:left-0 2xl:w-auto lg:w-auto md:w-auto 2xl:mt-0 lg:mt-0 md:mt-0 sm:w-36 sm:mt-2 xs:w-36 xs:mt-2 xxs:w-36 xxs:mt-2"
        src="/asset/images/logo/jans-logo.png"
        width={227}
        height={68}
      />
    </button>
  );
};

export default Logo;
