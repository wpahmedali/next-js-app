import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const Specifications = ({ data }: { data: IVehicleDetail }): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex bg-primary text-black justify-start items-center p-2 text-sm">
          <div className="font-bold uppercase text-lg">Car Specifications</div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-1 text-xs">
          <div className="font-bold bg-gray-100 p-2">Chassis #</div>
          <div className="bg-gray-100 p-2">{data.chassisNo}</div>
          <div className="font-bold bg-gray-100 p-2">Engine Code</div>
          <div className="bg-gray-100 p-2">{data.engineCode}</div>
          <div className="font-bold bg-gray-100 p-2">Color</div>
          <div className="bg-gray-100 p-2">{data.colorName}</div>
          <div className="font-bold bg-gray-100 p-2">Steering</div>
          <div className="bg-gray-100 p-2">{data.steeringName}</div>
          <div className="font-bold bg-gray-100 p-2">Mileage</div>
          <div className="bg-gray-100 p-2">{data.mileage} KM</div>
          <div className="font-bold bg-gray-100 p-2">Model</div>
          <div className="bg-gray-100 p-2">{data.modelName}</div>
          <div className="font-bold bg-gray-100 p-2">Interior Color</div>
          <div className="bg-gray-100 p-2">{data.interiorColor}</div>
          <div className="font-bold bg-gray-100 p-2">Engine Capacity</div>
          <div className="bg-gray-100 p-2">{data.engineSize} CC</div>
          <div className="font-bold bg-gray-100 p-2">Fuel Type</div>
          <div className="bg-gray-100 p-2">{data.fuelName}</div>
          <div className="font-bold bg-gray-100 p-2">Drive Type</div>
          <div className="bg-gray-100 p-2">{data.driveName}</div>
          <div className="font-bold bg-gray-100 p-2">Seats</div>
          <div className="bg-gray-100 p-2">{data.seats}</div>
          <div className="font-bold bg-gray-100 p-2">Transmission</div>
          <div className="bg-gray-100 p-2">{data.transmissionName}</div>
          <div className="font-bold bg-gray-100 p-2">Doors</div>
          <div className="bg-gray-100 p-2">{data.doors}</div>
          <div className="font-bold bg-gray-100 p-2">Reg Year/month</div>
          <div className="bg-gray-100 p-2">
            {data.registrationYear}/{data.registrationMonth}
          </div>
          <div className="font-bold bg-gray-100 p-2">Grade/Class</div>
          <div className="bg-gray-100 p-2">First</div>
          <div className="font-bold bg-gray-100 p-2">Port</div>
          <div className="bg-gray-100 p-2">Karachi</div>
          <div className="font-bold bg-gray-100 p-2">Sale Location</div>
          <div className="bg-gray-100 p-2">Jan Commercial Park</div>
        </div>

        <div className="flex bg-primary text-black justify-start items-center p-2 text-sm">
          <div className="font-bold uppercase text-lg">Standard features</div>
        </div>
        <div className="bg-gray-100 text-xs font-bold text-black p-2 grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
          {data.standardFeatures.map((features, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-slate-200 border-solid border border-gray-400 border-l-4 p-2"
            >
              {features.accessoriesName}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Specifications;
