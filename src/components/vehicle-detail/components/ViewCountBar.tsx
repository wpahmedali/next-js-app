import { WhatsappDetailIcon } from 'icons';
import React from 'react';
import { redirectToWhatsApp } from 'utils/redirect-to-whatsapp';

const ViewCountBar = ({ data }) => {
  return (
    <div className="flex bg-black text-white justify-between items-center p-2 mt-2 px-2 text-sm">
      <button className="rounded-r-lg rounded-l-lg bg-primary text-black py-2 px-4 font-bold">
        <div className="">Total Views: {data?.totalViews}</div>
      </button>
      {data?.contactInformation?.[0]?.phone && (
        <button
          onClick={() => redirectToWhatsApp(data)}
          className="rounded-r-lg rounded-l-lg bg-primary text-black py-2 px-4 font-bold"
        >
          <div className="flex gap-3 items-center">
            <span>Contact Us</span>
            <WhatsappDetailIcon />
          </div>
        </button>
      )}
    </div>
  );
};

export default ViewCountBar;
