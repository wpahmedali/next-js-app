import React from 'react';

const ClearButton = ({ name, updateFilters, setClearToggle }) => {
  const resetButtonClick = () => {
    updateFilters([], name === 'Max Year' ? 'maxYear' : name);
    setClearToggle(true);
  };

  return (
    <div className="px-3">
      <div className="relative">
        <button
          onClick={resetButtonClick}
          className="box p-1 focus:outline-none text-xs focus:shadow-outline flex w-full justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ClearButton;
