import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import Footer from 'components/footer';
import Header from 'components/header';

//just
const inter = Inter<any>({
  subsets: ['latin'],
  variable: '..font-inter',
});

const CustomerReviewPageLayout = ({ children }) => {
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
            <Header />
            {children}
            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default CustomerReviewPageLayout;
