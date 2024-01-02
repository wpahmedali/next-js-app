import { callsToActionData } from 'components/menu/components/menu-bottom-nav/data/call-to-action-data';
import { motion } from 'framer-motion';

const CallToAction = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-primaryDark">
      {callsToActionData.map((item) => (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.1 }}
          key={item.name}
          href={item.href}
          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-zinc-800 hover:text-white"
        >
          {item.icon}
          {item.name}
        </motion.a>
      ))}
    </div>
  );
};

export default CallToAction;
