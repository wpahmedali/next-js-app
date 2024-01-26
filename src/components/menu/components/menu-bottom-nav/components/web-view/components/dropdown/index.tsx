import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import DropdownItem from './DropdownItem';
import Loading from 'components/loading';
import Error from 'components/error';
import { IDropdown } from '../../../../interfaces/dropdown.interface';

const Dropdown = ({ data, title }: IDropdown): JSX.Element => {
  let toggleState = {
    status: 'inactive',
  };

  const [isPopoverOpen, setIsPopoverOpen] = useState(toggleState.status);

  const handleIsPopOver = () => {
    if (isPopoverOpen === 'inactive') {
      setIsPopoverOpen('active');
    } else {
      setIsPopoverOpen('inactive');
    }
  };

  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsPopoverOpen('active')}
      onMouseLeave={() => setIsPopoverOpen('inactive')}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Popover.Button
          onClick={handleIsPopOver}
          id="dropdownHoverButton"
          data-dropdown-trigger="hover"
          className="flex items-center gap-x-1 text-xs font-bold focus:outline-none leading-6 text-gray-900 focus:bg-black focus:text-white hover:bg-black p-2 hover:text-primary 3xl:px-7 2xl:px-7 lg:px-7 sm:w-full xs:w-full xxs:w-full sm:px-2 xs:px-2 xxs:px-2 sm:justify-between xs:justify-between xxs:justify-between"
        >
          {title}
          <ChevronDownIcon
            className="h-5 w-5 flex-none focus:text-primary hover:bg-black hover:text-primary"
            aria-hidden="true"
          />
        </Popover.Button>
      </motion.div>

      <Transition
        as={Fragment}
        show={isPopoverOpen === 'active' ? true : false}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute 3xl:-left-8 2xl:-left-8 lg:-left-8 md:-left-8 top-full z-40 mt-0 w-screen max-w-sm overflow-hidden 2xl:rounded-3xl lg:rounded-3xl md:rounded-3xl bg-zinc-800 shadow-lg ring-1 ring-gray-900/5 sm:left-3 sm:rounded-none xs:rounded-none xxs:rounded-none">
          <div className="p-2">
            {data.isLoading && <Loading />}
            {data.isError && !data.isLoading && <Error />}
            {data.isSuccess &&
              data.data.map((item) => (
                <DropdownItem
                  item={item}
                  key={item.name}
                  handleIsPopOver={handleIsPopOver}
                />
              ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Dropdown;
