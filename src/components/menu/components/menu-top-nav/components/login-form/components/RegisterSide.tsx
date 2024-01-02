import React from 'react';
import { useSetContext } from 'src/providers/ModelContext';

const RegisterSide = () => {
  const setContext = useSetContext();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform border">
      <div className="p-1 bg-[#e8e8e8]"></div>
      <div className="p-4 md:p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Register With Us
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Register with world’s best car selling company. We guarantee customer
          satisfaction. With over 11 branches worldwide we are growing even
          faster to reach each country in short span of time. We offer more than
          10,000 cars to choose from with ease of sitting at your home.
        </p>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <button
            onClick={() => {
              setContext('signUp');
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
