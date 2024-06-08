import React from 'react';
import Image from 'next/image';
import { ISearchByChassissNumberData } from 'src/interfaces/philippine-country-list.interface copy';

const SelectedItem = ({
  selectedData,
}: {
  selectedData: ISearchByChassissNumberData;
}): JSX.Element => {
  return (
    <div className="relative w-full h-48">
      <Image
        width={340}
        height={340}
        src={selectedData.imageUrl}
        alt="Image"
        className="w-60 h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-50 ml-80 justify-center text-white">
        <div className="text-center flex">
          <p className="text-lg font-semibold">Maker:</p>
          <p className="text-lg ml-4">{selectedData.makerName}</p>
        </div>
        <div className="text-center flex">
          <p className="text-lg font-semibold">Model:</p>
          <p className="text-lg ml-4">{selectedData.modelName}</p>
        </div>
        <div className="text-center flex">
          <p className="text-lg font-semibold">Year:</p>
          <p className="text-lg ml-4">{selectedData.registrationYear}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
