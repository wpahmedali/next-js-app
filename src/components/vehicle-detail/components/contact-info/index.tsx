import { MailSpsIcon, MapSpsIcon, WhatsappSpsIcon } from 'icons';
import React from 'react';
import { IVehicleDetailContactInfo } from 'src/interfaces/vehicle-detail-contact-info.interface';

const ContactInfo = ({
  contactInfo,
}: {
  contactInfo: IVehicleDetailContactInfo[];
}): JSX.Element => {
  return (
    <>
      <div className="flex bg-primary text-black justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full">
        contact information
      </div>
      <div className="bg-gray-100 text-xs text-black p-7">
        {contactInfo.map((data, index) => (
          <div
            key={index}
            className="justify-between grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 gap-2"
          >
            <div className="text-lg">
              <p className="text-3xl font-bold">
                {data.quickContactCompanyName}
              </p>
              <p className="font-bold my-2">Address:</p>
              <p>{data.address}</p>
              <div className="flex">
                <span className="flex items-center">
                  <WhatsappSpsIcon />
                </span>
                <span className="ml-2 flex items-center">{data.phone}</span>
              </div>
              <div className="flex">
                <span className="flex items-center">
                  <MailSpsIcon />
                </span>
                <span className="ml-2 flex items-center">{data.email}</span>
              </div>
            </div>
            <div className="justify-self-end content-center self-center 2xl:justify-self-end sm:justify-self-center xs:justify-self-center xxs:justify-self-center pr-7">
              {/* <MapSpsIcon /> */}
              <div
                dangerouslySetInnerHTML={{ __html: data.googleMapCode }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactInfo;
