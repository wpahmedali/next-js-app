import { motion } from 'framer-motion';
import Link from 'next/link';
import { IDropdownItem } from '../../../../interfaces/dropdown-item.interface';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';

const DropdownItem = ({ item }: { item: IDropdownItem }): JSX.Element => {
  const setLoadingState = useDispatchLoadingState();

  return (
    <motion.div
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
      key={item.name}
      className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
    >
      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-primary hover:bg-zinc-800">
        {item.icon}
      </div>
      <div className="flex-auto hover:text-primaryDark">
        <Link
          href={item.href}
          onClick={() => setLoadingState({ type: 'countryLoading' })}
          className="block font-semibold text-white hover:text-primaryDark"
        >
          {item.name}
          <span className="absolute inset-0" />
          <p className="mt-1  hover:text-primaryDark font-normal">
            {item.description}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default DropdownItem;
