import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import Logo from 'components/logo/Logo';

const inter = Inter<any>({
  subsets: ['latin'],
  variable: '..font-inter',
});

const SalesTeamLayout = ({ children }) => {
  return (
    <main className={inter.className}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          <main className="bg-light w-full min-h-screen">
            <header className="w-full items-center justify-between">
              <div className="lg:px-3 md:px-16 sm:px-0 xs:px-0 xxs:px-0 bg-black">
                <Logo />
                <div className="bg-black flex-col lg:flex-row md:flex-row sm:flex-col sm:p-0 xs:flex-col xxs:flex-col sm:h-16 xs:h-16 xxs:h-16 xs:pt-4 xxs:pt-4 xs:pb-4 xxs:pb-4 lg:h-10 lg:justify-between md:justify-between flex items-center justify-between w-full lg:py-2 md:py-2 relative sm:flex-auto sm:items-center sm:justify-center md:h-10"></div>
              </div>
              <div className="bg-primary">
                <header className="bg-primary flex">
                  <div className="w-[15%] 2xl:block xl:block lg:block md:block sm:hidden xs:hidden xxs:hidden"></div>
                </header>
              </div>
            </header>
            {children}
          </main>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default SalesTeamLayout;
