import { WhatsappDetailIcon } from 'icons';
import Link from 'next/link';
import React from 'react';
import { useWhatsappRedirect } from 'src/hooks/whatsapp-redirect';

const ViewCountBar = ({ data }) => {
  const whatsappRedirectLink = useWhatsappRedirect('', data);

  return (
    <div className="flex bg-black text-white justify-between items-center p-2 mt-2 px-2 text-sm">
      <button className="rounded-r-lg rounded-l-lg bg-primary text-black py-2 px-4 font-bold">
        <div className="">Total Views: {data?.totalViews}</div>
      </button>

      {whatsappRedirectLink && (
        <Link
          href={whatsappRedirectLink}
          target="_blank"
          className="rounded-r-lg rounded-l-lg bg-primary text-black py-2 px-4 font-bold"
        >
          <div className="flex gap-3 items-center">
            <span>Contact Us</span>
            <WhatsappDetailIcon />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ViewCountBar;
