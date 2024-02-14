import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useCurrentCountry } from 'src/hooks/current-country';
import { getIdFromParam } from 'utils/get-id-from-param';
import { redirectToWhatsApp } from 'utils/redirect-to-whatsapp';

const SalesTeam = () => {
  const {
    query: { country },
  }: NextRouter = useRouter();

  const countryId =
    country && !Array.isArray(country) && country !== 'all_stock'
      ? getIdFromParam(country)
      : null;

  const currentCountry = useCurrentCountry(countryId);

  useEffect(() => {
    const timer = setTimeout(() => {
      redirectToWhatsApp(currentCountry.whatsappNumber);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentCountry.whatsappNumber]);

  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8">
            <div className="flex justify-center">
              <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3 shadow-xl">
                <Image
                  src="/sales-team-pic-w.jpg"
                  alt="Sales Team"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Jan Japan Sales Team
              </h2>
              <div className="text-center">
                <p className="text-base text-gray-600 mb-4">
                  Thank you for contacting Jan Japan Sales team. We are
                  connecting you to a representative in your country. Please
                  wait while we get you in touch with the sales team.
                </p>
                <p className="text-base text-gray-600 mb-4">
                  If the contact is not established in 10 seconds, please click
                  on the link below.
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    currentCountry?.whatsappNumber &&
                      redirectToWhatsApp(currentCountry.whatsappNumber);
                  }}
                  className="py-3 px-6 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeam;
