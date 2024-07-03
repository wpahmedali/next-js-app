import React from 'react';
import Image from 'next/image';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import Link from 'next/link';
import { ROUTES } from 'src/common/routes';
import { useRouterParams } from 'src/hooks/router-params';
import { vehiclePerPageList } from 'src/common/constants';
import { NextRouter, useRouter } from 'next/router';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useCurrentCountry } from 'src/hooks/current-country';
import { CrossIcon } from 'icons/react-icons/Cross';

const PrintViewTableRecord = ({
  index,
  data,
  checked,
  handleSelectItem,
  handleDeleteItem,
}: {
  index: number;
  data: IVehicleDetail;
  checked: number[];
  handleSelectItem: (check: boolean, id: number) => void;
  handleDeleteItem: (id: number) => void;
}) => {
  const selectedCountry = useCurrentCountryName();
  const router: NextRouter = useRouter();
  const currentCountry = useCurrentCountry(data.countryId);

  const {
    query: { country, auction, maker, model, bodyType },
  } = router;

  const params = useRouterParams(router.query);
  params.perPage = params.page * vehiclePerPageList;
  params.page = 1;

  const baseUrl = country
    ? auction
      ? `${ROUTES.AUCTIONS}/${auction}/${country}`
      : `${ROUTES.USED_CAR}/${country}`
    : `${ROUTES.USED_CAR}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const url = `${baseUrl}/${maker ? maker : data.makerName.toLowerCase()}/${
    model ? model : data.modelName.toLowerCase()
  }${auction ? `/car-detail` : ''}/${data.carId}${
    bodyType ? `?bodyType=${bodyType}` : ''
  }`;

  return (
    data && (
      <tr
        className={`${
          index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'
        }   border-b hover:bg-gray-50 text-center`}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
        >
          {data?.carId}
        </th>
        <td className="px-1 py-2 border">
          <Link href={url}>
            <Image src={data?.imageUrl} width={140} height={90} alt="" />
          </Link>
        </td>
        <td className="px-2 py-1 border font-bold text-blue-800">
          {data?.fobPrice !== '0' &&
          data?.currencySymbol &&
          currentCountry?.isPriceDisplay === 1 ? (
            <span className="text-xs text-black leading-4 ml-2">
              {data.currencySymbol} {data.fobPrice}
            </span>
          ) : (
            <Link href={url}> ASK</Link>
          )}
        </td>
        <td className="px-2 py-1 border text-left">
          <p className="font-bold text-blue-600 text-lg">{data.makerName}</p>
          <p className="font-normal text-green-500 text-xs">CONVERTIBLE</p>
          <p className="">
            <Image src="/assets/desel.png" width={60} height={12} alt="" />
          </p>
          <p className="font-normal text-black text-xs">
            {data?.fuelName ? data.fuelName + ', ' : ''}
            {data?.driveName ? data.driveName + ', ' : ''}
            {data?.doors ? data.doors + ' doors, ' : ''}
            {data?.seats ? data.seats + ' seats, ' : ''}
            {data?.carAccessories ? data.carAccessories + ', ' : ''}
          </p>
          <p className="font-bold text-blue-900">{data.chassisNo}</p>
          <p className="font-bold text-red-500 text-xs">{data.company}</p>
          <p className="font-bold text-blue-800 text-xs">{data.purchaseDate}</p>
        </td>
        <td className="px-2 py-1 border text-black">
          {data.registrationYear}/{data.engineCode}/
        </td>
        <td className="px-2 py-1 border text-black">
          {data.steeringName}/{data.transmissionName}
        </td>
        <td className="px-2 py-1 border text-black">{data.mileage} KM</td>
        <td className="px-2 py-1 border text-black">{data.cityName}</td>
        <td className="w-4 p-4">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleDeleteItem(data?.carId)}
              className="p-2 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              <CrossIcon />
            </button>
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              checked={checked?.includes(data?.carId)}
              onChange={() => {
                handleSelectItem(
                  checked?.includes(data?.carId) ? true : false,
                  data?.carId
                );
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="sr-only">checkbox</label>
          </div>
        </td>
      </tr>
    )
  );
};

export default PrintViewTableRecord;
