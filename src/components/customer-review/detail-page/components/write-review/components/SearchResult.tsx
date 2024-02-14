import { IWriteCustomerReview } from 'components/customer-review/detail-page/interfaces/write-customer-review.interface';
import React from 'react';
import { ISearchByChassissNumberData } from 'src/interfaces/philippine-country-list.interface copy';

const SearchResult = ({
  item,
  setSelectedData,
  setFormData,
  countryId,
}: {
  item: ISearchByChassissNumberData;
  setSelectedData: React.Dispatch<
    React.SetStateAction<ISearchByChassissNumberData>
  >;
  setFormData: React.Dispatch<React.SetStateAction<IWriteCustomerReview>>;
  countryId: number;
}): JSX.Element => {
  const handleSelectedItem = () => {
    setFormData((values) => ({
      ...values,
      title: `${item.makerName} ${item.modelName}`,
      system_car_img: item.imageUrl,
      car_id: item.carId,
      country_id: countryId,
      maker_name: item.makerName,
      model_name: item.modelName,
    }));
    setSelectedData(item);
  };

  return (
    <li key={item.carId} onClick={handleSelectedItem}>
      <div className="flex items-center pl-2 rounded hover:bg-gray-100">
        <label className="ml-2 text-thin text-gray-500 cursor-pointer">
          {item.chassisNo}
        </label>
      </div>
    </li>
  );
};

export default SearchResult;
