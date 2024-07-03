import Loading from 'components/loading';
import React from 'react';
import { useAllAccessories } from 'react-query/hooks/api/accessories';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const Accessories = ({ data: vehicleData }: { data: IVehicleDetail }) => {
  const { data, isLoading } = useAllAccessories();

  const accessories = vehicleData?.carAccessories?.split(',');

  return (
    <table className="w-full my-2">
      <tbody>
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.map((item, index) =>
            index % 2 === 0 ? (
              <tr key={index}>
                <td className="text-xs">
                  <input
                    type="checkbox"
                    defaultChecked={accessories.includes(item.shortName)}
                    value="5"
                  />
                  <span className="ml-2">{item.name}</span>
                </td>
                {index + 1 < data.data.length && (
                  <td className="text-xs">
                    <input
                      type="checkbox"
                      defaultChecked={accessories.includes(
                        data.data[index + 1].shortName
                      )}
                      value="5"
                    />
                    <span className="ml-2">{data.data[index + 1].name}</span>
                  </td>
                )}
              </tr>
            ) : null
          )
        )}
      </tbody>
    </table>
  );
};
export default Accessories;
