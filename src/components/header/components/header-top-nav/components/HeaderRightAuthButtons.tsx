import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { logout } from 'react-query/api/auth/logout';
import { LogoutIcon } from 'icons/react-icons/Logout';
import { deleteCookie, getCookie } from 'cookies-next';
import { ChangePasswordIcon } from 'icons/react-icons/ChangePassword';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';
import { useSetContext } from 'src/providers/ModelContext';

const HeaderRightAuthButtons = () => {
  const [isClient, setIsClient] = useState(false);
  const currentUserCookie = getCookie('currentUser');
  const user: IAuthResponse = currentUserCookie
    ? JSON.parse(currentUserCookie)
    : null;
  const setContext = useSetContext();

  const handleClick = async () => {
    await logout();
    deleteCookie('currentUser');
    deleteCookie('verification');
    window.location.href = '/login';
  };

  const handleChangePassword = async () => {
    setContext('ChangePassword');
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center lg:mt-0 md:mt-0 sm:mt-0 sm:self-end xs:self-end xxs:self-end">
      <div className="flex 3xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-row xxs:flex-row items-center 3xl:gap-2 2xl:gap-2 lg:gap-2 md:gap-2 sm:gap-1 xs:gap-1 xxs:gap-1 sm:mr-4 xs:mr-4 xxs:mr-4 sm:mt-0 xs:mt-0 xxs:mt-0">
        <div className="text-primary text-xs font-medium bold 3xl:block 2xl:block lg:block md:block sm:block xs:hidden xxs:hidden">
          Welcome:{' '}
          <span className="text-white">
            {isClient && user?.user?.first_name + ' ' + user?.user?.last_name}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-1 rounded-sm hover:bg-primary hover:text-black shadow-md"
          onClick={handleChangePassword}
        >
          <div className="flex text-center justify-center font-medium bold text-xs">
            <ChangePasswordIcon />
            Change Password
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-1 rounded-sm hover:bg-primary hover:text-black shadow-md"
          onClick={handleClick}
        >
          <div className="flex text-center justify-center font-medium bold text-xs">
            <LogoutIcon />
            Logout
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default HeaderRightAuthButtons;
