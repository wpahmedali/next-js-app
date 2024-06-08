import GetGlobalStockData from '../../../data/global-stock-data';
import Dropdown from './dropdown';

const GlobalStock = (): JSX.Element => {
  const globalStockData = GetGlobalStockData();

  return (
    <Dropdown
      data={globalStockData}
      title="Global Stock"
      tabName="global-stock"
    />
  );
};

export default GlobalStock;
