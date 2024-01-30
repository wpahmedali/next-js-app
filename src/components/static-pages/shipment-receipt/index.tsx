import LeftReceipt from './components/LeftReceipt';
import RightReceipt from './components/RightReceipt';

const ShipmentReceipt = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-full sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Receiving Your Cargo
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <LeftReceipt />
          <RightReceipt />
        </div>
      </div>
    </section>
  );
};
export default ShipmentReceipt;
