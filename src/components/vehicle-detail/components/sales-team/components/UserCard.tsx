import { UserCardIcon } from 'icons';
import React from 'react';
import { IVehicleDetailStaffMember } from 'src/interfaces/vehicle-detail-staff-members.interface';

const UserCard = ({
  data,
}: {
  data: IVehicleDetailStaffMember;
}): JSX.Element => {
  return (
    <div className="bg-white text-black p-5 px-7 flex justify-between">
      <UserCardIcon />
      <div className="text-right">
        <p className="text-xl">{data.memberName}</p>
        <p className="text-sm">{data.memberPhone}</p>
      </div>
    </div>
  );
};

export default UserCard;
