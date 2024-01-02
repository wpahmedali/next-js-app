import SparePartsBanner from './components/Banner';
import SparePartsDetail from './components/detail';

const SpareParts = () => {
  return (
    <div className="mx-auto grid max-w-full grid-cols-12 gap-2">
      <div className="header col-span-12 rounded-lg border border-gray-30">
        <SparePartsBanner />
      </div>
      <div className="col-span-12 rounded-lg p-2 sm:col-span-12">
        <SparePartsDetail />
      </div>
    </div>
  );
};
export default SpareParts;
