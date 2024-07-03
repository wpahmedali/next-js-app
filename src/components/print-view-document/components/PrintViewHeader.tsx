import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ITotal } from 'src/interfaces/poster-list.interface';
import Loading from 'components/loading';

const PrintViewHeader = ({ total }: { total: ITotal }) => {
  const [japanDateTime, setJapanDateTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const options: any = {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const japanDateTime = new Date().toLocaleString('en-US', options);
      setJapanDateTime(japanDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="logo">
        <Image
          alt="logo"
          className=""
          src="/asset/images/logo/logo1.png"
          width={170}
          height={68}
        />
      </div>
      <div className="font-bold text-xs text-gray-800">
        Japan Time: {japanDateTime}
        <div className="flex font-bold text-xs text-gray-800 text-right">
          Total Vehicle(s):{' '}
          {total?.totalCar ? (
            total?.totalCar
          ) : (
            <Loading height="h-4" width="w-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintViewHeader;
