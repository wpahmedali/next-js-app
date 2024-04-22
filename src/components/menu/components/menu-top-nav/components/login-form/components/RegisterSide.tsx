import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';

const RegisterSide = () => {
  const setContext = useSetContext();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform border">
      <div className="p-1 bg-[#e8e8e8]"></div>
      <div className="p-4 md:p-5">
        <button
          onClick={() => {
            setContext('SET_VALUE', 'signUp');
          }}
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Register With Us
          </h3>
        </button>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome to Jan Japan – your gateway to an expansive world of quality
          used Japanese vehicles! Join our global community of satisfied
          customers by registering with us today.
        </p>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <button
            onClick={() => {
              setContext('SET_VALUE', 'signUp');
            }}
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSide;
