import React from 'react';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const Features = ({ data }: { data: IVehicleDetail }) => {
  return (
    <table className="table-auto w-full border border-black text-sm">
      <tbody>
        <tr>
          <td className="text-left border border-black p-1">Year/Month</td>
          <td className="text-left border border-black p-1">
            {data.registrationYear} / {data.registrationMonth}
          </td>
        </tr>
        <tr>
          <td className="border border-black p-1">Transmission</td>
          <td className="border border-black p-1">{data.transmissionName}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Doors</td>
          <td className="border border-black p-1">{data.doors}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Seats</td>
          <td className="border border-black p-1">{data.seats}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Drive</td>
          <td className="border border-black p-1">{data.driveName}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Color</td>
          <td className="border border-black p-1">{data.colorName}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Steering</td>
          <td className="border border-black p-1">{data.steeringName}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Engine Capacity</td>
          <td className="border border-black p-1">{data.engineSize} CC</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Mileage</td>
          <td className="border border-black p-1">{data.mileage} km</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Engine Code</td>
          <td className="border border-black p-1">{data.engineCode}</td>
        </tr>
        <tr>
          <td className="border border-black p-1">Fuel</td>
          <td className="border border-black p-1">{data.fuelName}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Features;
