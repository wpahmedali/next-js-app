import React from 'react';

const PrintViewTableHeader = () => {
  return (
    <thead className="text-xs text-black uppercase bg-primary rounded-t-lg">
      <tr>
        <td
          className="bg-gray-900 text-center p-2 text-white font-bold shadow-md rounded-t-lg"
          colSpan={9}
        >
          List Car(s)
        </td>
      </tr>
      <tr>
        <th scope="col" className="px-2 py-2 text-center">
          Stock#
        </th>
        <th scope="col" className="px-2 py-2 w-36 text-center">
          Photo
        </th>
        <th scope="col" className="px-2 py-2">
          Price
        </th>
        <th scope="col" className="px-2 py-2 text-center">
          Make/Model
        </th>
        <th scope="col" className="px-2 py-2 w-28">
          Year/Engine
        </th>
        <th scope="col" className="px-2 py-2 w-32">
          Steering/Trans
        </th>
        <th scope="col" className="px-2 py-2">
          Mileage
        </th>
        <th scope="col" className="px-2 py-2">
          Location
        </th>
        <th scope="col" className="px-2 py-2">
          Remove
        </th>
      </tr>
    </thead>
  );
};

export default PrintViewTableHeader;
