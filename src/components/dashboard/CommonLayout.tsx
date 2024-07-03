import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import Footer from 'components/footer';
import Header from 'components/header';
import SaleModel from 'components/sale-model';
import CountryDialog from 'components/right-menu/components/country-dialog';
import { useModelState, useSetContext } from 'src/providers/ModelContext';
import FilterDialog from 'components/right-menu/components/FilterDialog';
import YardDialog from 'components/right-menu/components/yard-toggle-menu/components/YardDialog';
import ReportDialog from 'components/report-toggle/components/ReportDialog';
import DemandCarModel from 'components/demand-cars/components/DemandCarModel';
import ChangePasswordModel from 'components/change-password-model';
import SmartMenuModel from 'components/smart-menu';
import SpecialMenuItemModel from 'components/special-menu-item-model';

const inter = Inter<any>({
  subsets: ['latin'],
  variable: '..font-inter',
});

const CommonLayout = ({ children }) => {
  const setContext = useSetContext();
  const modelState = useModelState();

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
            <SaleModel isShowDialog={modelState} hideDialog={setContext} />
            <YardDialog isShowDialog={modelState} hideDialog={setContext} />
            <ReportDialog isShowDialog={modelState} hideDialog={setContext} />
            <FilterDialog isShowDialog={modelState} hideDialog={setContext} />
            <CountryDialog isShowDialog={modelState} hideDialog={setContext} />
            <DemandCarModel isShowDialog={modelState} hideDialog={setContext} />
            <SmartMenuModel isShowDialog={modelState} hideDialog={setContext} />
            <ChangePasswordModel
              isShowDialog={modelState}
              hideDialog={setContext}
            />
            <SpecialMenuItemModel
              isShowDialog={modelState}
              hideDialog={setContext}
            />

            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default CommonLayout;
