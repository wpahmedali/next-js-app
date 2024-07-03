import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
  useEffect,
} from 'react';

type AuthenticationContextType = {
  authentication: boolean;
  addAccessToken: (access_token: string) => void;
  removeAccessToken: () => void;
};

const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = 'access_token';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const AuthenticationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authentication, setAuthentication] = useState<boolean>(() => {
    return isLocalStorageAvailable()
      ? !!window.localStorage.getItem('access_token')
      : false;
  });

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      const token = window.localStorage.getItem('access_token');
      setAuthentication(!!token);
    } else {
      setAuthentication(false);
    }
  }, []);

  const addAccessToken = (access_token: string): void => {
    window.localStorage.setItem('access_token', JSON.stringify(access_token));
    setAuthentication(true);
  };

  const removeAccessToken = (): void => {
    window.localStorage.removeItem('access_token');
    setAuthentication(false);
  };

  const contextValue: AuthenticationContextType = {
    authentication,
    addAccessToken,
    removeAccessToken,
  };

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = (): AuthenticationContextType => {
  return useContext(AuthenticationContext);
};
