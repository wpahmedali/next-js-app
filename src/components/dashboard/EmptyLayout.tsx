import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter<any>({
  subsets: ['latin'],
  variable: '..font-inter',
});

const EmptyLayout = ({ children }) => {
  return (
    <main className={inter.className}>
      <ToastContainer />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          <main className="bg-light w-full min-h-screen">{children}</main>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default EmptyLayout;
