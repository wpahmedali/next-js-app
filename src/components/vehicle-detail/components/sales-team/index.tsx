import React from 'react';
import UserCard from './components/UserCard';
import { IVehicleDetailStaffMember } from 'src/interfaces/vehicle-detail-staff-members.interface';

const SalesTeam = ({
  staffMembers,
}: {
  staffMembers: IVehicleDetailStaffMember[];
}): JSX.Element => {
  return (
    <>
      <div className="flex bg-primary text-black justify-start items-center p-3 mt-2 px-7 font-bold uppercase text-lg w-full">
        Sales Team
      </div>
      <div className="bg-gray-100 text-xs font-bold text-black p-7">
        <div className="w-full justify-center grid grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2">
          {staffMembers.map((item, index) => (
            <UserCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SalesTeam;
