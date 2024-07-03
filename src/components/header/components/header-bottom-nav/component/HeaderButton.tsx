const HeaderButton = ({ isActive, onClick, children, icon }) => {
  return (
    <button
      className={`flex display-ruby bg-white p-1 lg:w-1/3 sm:w-1/2 xs:w-1/2 xxs:w-1/2 sm:mx-2 xs:mx-2 xxs:mx-2 lg:mx-0 rounded-md w-additional  ${
        isActive ? 'active shadow-md' : 'text-black'
      }`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default HeaderButton;
