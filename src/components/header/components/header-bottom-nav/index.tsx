import React from 'react';
import { InventoryIcon } from 'icons/react-icons/Inventory';
import { SaleIcon } from 'icons/react-icons/Sale';
import 'react-toastify/dist/ReactToastify.css';
import {
  useDispatchInterfaceMode,
  useInterfaceMode,
} from 'src/providers/InterfaceMode';
import { interfaceMode } from 'src/common/constants';
import HeaderButton from './component/HeaderButton';
import { useSetContext } from 'src/providers/ModelContext';

const HeaderBottomNav = () => {
  const setContext = useSetContext();
  const mode = useInterfaceMode();
  const dispatch = useDispatchInterfaceMode();

  const setInventoryMode = () => {
    dispatch({ type: 'INVENTORY' });
    setContext('');
  };

  const setSaleMode = () => {
    dispatch({ type: 'SALE' });
    setContext('saleMode');
  };

  return (
    <div className="bg-primary py-1 lg:px-3 md:px-16 sm:px-0 xs:px-0 xxs:px-0">
      <div className="flex content-center items-center justify-center text-white gap-2 font-bold">
        <HeaderButton
          isActive={mode === interfaceMode.inventory}
          onClick={setInventoryMode}
          icon={<InventoryIcon />}
        >
          Inventory
        </HeaderButton>
        <HeaderButton
          isActive={mode === interfaceMode.sale}
          onClick={setSaleMode}
          icon={<SaleIcon />}
        >
          Sale
        </HeaderButton>
      </div>
    </div>
  );
};

export default HeaderBottomNav;
