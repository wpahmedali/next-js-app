import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FavouriteIcon, LoginIcon, SignupIcon } from 'icons';
import { useFavoriteCars } from 'src/providers/FavouriteVehicleList';
import SignupForm from './sign-up-form';
import LoginForm from './login-form';
import { notify } from 'utils/toast';
import { useAuthenticationContext } from 'src/providers/Authentication';
import { useModelState, useSetContext } from 'src/providers/ModelContext';

const MenuAuthButtons = () => {
  const [data, setData] = useState<number>();
  const setContext = useSetContext();
  const modelState = useModelState();

  const { authentication, removeAccessToken } = useAuthenticationContext();
  const { favoriteCars } = useFavoriteCars();

  useEffect(() => {
    setData(favoriteCars.length);
  }, [favoriteCars]);

  const logOut = () => {
    removeAccessToken();
    notify('User Logout Successfully!');
  };

  return (
    <div className="flex items-center justify-between 2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-48 xs:ml-48 xxs:ml-40 2xl:pl-60 lg:pl-60 md:pl-44 text-white">
      <nav className="flex font-normal text-xs gap-4">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          {!authentication ? (
            <button
              onClick={() => setContext('login')}
              className="flex items-center relative hover:text-primary "
            >
              <div className="2xl:bg-transparent lg:bg-transparent md:bg-transparent 2xl:p-0 lg:p-0 md:p-0 sm:bg-primary sm:p-2 sm:rounded-full xs:bg-primary xs:p-2 xs:rounded-full xxs:bg-primary xxs:p-2 xxs:rounded-full sm:text-black">
                <LoginIcon />
              </div>
              <span className="items-start justify-start pb-0 2xl:pr-5 lg:pr-5 md:pr-5 sm:pr-5 xs:pr-5 xxs:pr-1 ms-1 -ml-1">
                Login
              </span>
              <span className="h-1 inline-block border-white items-center justify-center absolute top-0 right-0 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
                |
              </span>
            </button>
          ) : (
            <button
              onClick={logOut}
              className="flex items-center relative hover:text-primary "
            >
              <div className="2xl:bg-transparent lg:bg-transparent md:bg-transparent 2xl:p-0 lg:p-0 md:p-0 sm:bg-primary sm:p-2 sm:rounded-full xs:bg-primary xs:p-2 xs:rounded-full xxs:bg-primary xxs:p-2 xxs:rounded-full sm:text-black">
                <LoginIcon />
              </div>
              <span className="items-start justify-start pb-0 2xl:pr-5 lg:pr-5 md:pr-5 sm:pr-5 xs:pr-5 xxs:pr-1 ms-1 -ml-1">
                Logout
              </span>
              <span className="h-1 inline-block border-white items-center justify-center absolute top-0 right-0 2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden">
                |
              </span>
            </button>
          )}
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          {!authentication && (
            <div className="flex items-center relative hover:text-primary">
              <button
                onClick={() => setContext('signUp')}
                className="flex items-center relative hover:text-primary "
              >
                <div className="2xl:bg-transparent lg:bg-transparent md:bg-transparent 2xl:p-0 lg:p-0 md:p-0 sm:bg-primary sm:p-2 sm:rounded-full xs:bg-primary xs:p-2 xs:rounded-full xxs:bg-primary xxs:p-2 xxs:rounded-full sm:text-black">
                  <SignupIcon />
                </div>
                <span className="items-start justify-start pb-0 pr-5 ms-1 -ml-3">
                  Signup
                </span>
              </button>
              <span className="h-1 inline-block border-white items-center justify-center absolute top-0 right-0 sm:hidden xs:hidden xxs:hidden 2xl:block lg:block md:block">
                |
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="2xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden"
        >
          <Link
            href="/home/compare_cars/1"
            className="flex items-center hover:text-primary"
          >
            <FavouriteIcon />
            <span className="items-start justify-start ms-1 pb-0 -ml-4">
              Favourites ({data})
            </span>
          </Link>
        </motion.div>
      </nav>
      {modelState === 'signUp' ? <SignupForm /> : null}
      {modelState === 'login' ? <LoginForm /> : null}
    </div>
  );
};
export default MenuAuthButtons;
