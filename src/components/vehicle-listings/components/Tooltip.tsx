import React from 'react';

const Tooltip = ({ text, children, visible }) => {
  return (
    <div className="relative inline-block">
      {children}
      {visible && (
        <div className="opacity-80 transition-opacity duration-300 pointer-events-auto absolute z-10 bg-gray-700 text-white rounded-md p-2 whitespace-nowrap text-sm">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
