import Image from 'next/image';
import React from 'react';

const Bumper = ({ setisOpenModal, setImageName }) => {
  return (
    <section
      id="bumpers"
      className="py-5 bg-w sm:py-2 lg:py-5"
      data-scroll-section
    >
      <div className="w-full mx-auto">
        <div className="flex items-center bg-gray-100">
          <div className="w-full px-10 mx-auto bg-[#ebebeb] shadow-xl">
            <div className="max-w-md space-y-6">
              <h2 className="flex flex-row flex-nowrap items-center my-4">
                <span
                  className="flex-grow block border-t border-black"
                  aria-hidden="true"
                  role="presentation"
                ></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-xl leading-none font-medium uppercase bg-primary text-black">
                  Bumpers
                </span>
                <span
                  className="flex-grow block border-t border-black"
                  aria-hidden="true"
                  role="presentation"
                ></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-2">
          <button
            onClick={() => {
              setisOpenModal(true);
              setImageName('bumper-1');
            }}
          >
            <div className="h-full shadow-2xl shadow-black-900 overflow-hidden group">
              <Image
                alt=""
                width={500}
                height={500}
                src="https://janjapan.com/resources/images/spare_parts/bumper-1.jpg"
                className="w-full z-0  h-full object-fill example "
              />
            </div>
          </button>
          <button
            onClick={() => {
              setisOpenModal(true);
              setImageName('bumper-2');
            }}
          >
            <div className="h-full shadow-2xl shadow-black-900 overflow-hidden group">
              <Image
                alt=""
                width={500}
                height={500}
                src="https://janjapan.com/resources/images/spare_parts/bumper-2.jpg"
                className="w-full z-0  h-full object-fill example "
              />
            </div>
          </button>
          <button
            onClick={() => {
              setisOpenModal(true);
              setImageName('bumper-3');
            }}
          >
            <div className="h-full shadow-2xl shadow-black-900 overflow-hidden group">
              <Image
                alt=""
                width={500}
                height={500}
                src="https://janjapan.com/resources/images/spare_parts/bumper-3.jpg"
                className="w-full z-0  h-full object-fill example "
              />
            </div>
          </button>
          <button
            onClick={() => {
              setisOpenModal(true);
              setImageName('bumper-4');
            }}
          >
            <div className="h-full shadow-2xl shadow-black-900 overflow-hidden group">
              <Image
                alt=""
                width={500}
                height={500}
                src="https://janjapan.com/resources/images/spare_parts/bumper-4.jpg"
                className="w-full z-0  h-full object-fill example "
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bumper;
