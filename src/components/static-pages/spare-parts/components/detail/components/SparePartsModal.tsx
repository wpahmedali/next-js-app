import Image from 'next/image';
import React from 'react';

const SparePartModal = ({ setisOpenModal, shareWhatsapp, imgName }) => {
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100"></div>
      <div className="relative p-4 max-w-2xl max-h-full m-auto ">
        <div className="relative bg-white rounded-lg shadow p-4">
          <div className="flex lex items-center justify-between py-0 md:py-0 border-b rounded-t bg-primary dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white pl-2">
              Engines
            </h3>

            <button
              onClick={() => setisOpenModal(false)}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="">
            <p className="py-2">
              Thank you for showing interest in this product. To find out the
              price and know about this part, please contact our sales team.
            </p>

            <button onClick={shareWhatsapp}>
              <Image
                alt=""
                width={500}
                height={500}
                src="https://janjapan.com/resources/images/spare_parts/whatsapp.png"
                className="w-36 z-0  h-full object-fill example pb-2"
              />
            </button>

            <Image
              alt=""
              width={700}
              height={500}
              src={`https://janjapan.com/resources/images/spare_parts/${imgName}.jpg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartModal;
