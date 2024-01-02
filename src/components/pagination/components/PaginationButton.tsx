import { IPaginationButton } from 'components/tabular-view-listings/interfaces/pagination-button.interface';

const PaginationButton = ({
  handleButtonClick,
  page,
  isActive,
}: IPaginationButton) => {
  const baseClass =
    'relative inline-flex items-center p-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-black focus:z-20 focus:outline-offset-0';
  const dynamicClass = isActive ? `${baseClass} bg-primary` : baseClass;

  return (
    <button onClick={handleButtonClick} className={dynamicClass}>
      {page}
    </button>
  );
};

export default PaginationButton;
