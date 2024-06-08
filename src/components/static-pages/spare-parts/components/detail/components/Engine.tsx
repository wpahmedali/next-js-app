import Image from 'next/image';
import React from 'react';

const Engine = ({ setisOpenModal, setImageName, shareWhatsapp }) => {
  const EngineImages = [
    'engine-1',
    'engine-2',
    'engine-3',
    'engine-4',
    'engine1',
    'engine2',
    'engine3',
    'engine4',
    'engine5',
    'engine6',
    'engine7',
    'engine8',
    'engine9',
    'engine10',
    'engine11',
    'engine12',
    'engine13',
    'engine14',
    'engine15',
    'engine16',
    'engine17',
    'engine18',
    'engine19',
    'engine20',
    'engine21',
    'engine22',
    'engine23',
    'engine24',
    'engine25',
    'engine26',
    'engine27',
  ];

  return (
    <section
      id="engines-section"
      className="py-5 bg-w sm:py-2 lg:py-5"
      data-scroll-sectio
    >
      <div className="w-full mx-auto">
        <div className="flex flex-nowrap grid-cols-2 gap-2">
          <div className="w-40">
            <div className="">
              <button onClick={shareWhatsapp}>
                <Image
                  alt=""
                  width={500}
                  height={500}
                  src="https://janjapan.com/resources/images/spare_parts/whatsapp.png"
                  className="w-36 z-0  h-full object-fill example pb-2"
                />
              </button>{' '}
            </div>
          </div>
          <div className="w-5/6">
            <h2 className="text-3xl font-light text-black sm:text-3xl lg:text-3xl">
              ZAMBIA
            </h2>
            <p className="mb-8 text-lg text-gray-900">
              JAN JAPAN ZAMBIA LIMITED OFF PANGANANI ROAD OPPOSITE DARBARS MALL
              1ST SHOP PLOT 1666.
            </p>
          </div>
        </div>
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
                  Engines
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
          {EngineImages.map((item) => (
            <button
              key={item}
              onClick={() => {
                setisOpenModal(true);
                setImageName(item);
              }}
            >
              <div className="h-full shadow-2xl shadow-black-900 overflow-hidden group">
                <Image
                  alt=""
                  width={500}
                  height={500}
                  src={`/assets/spare-parts-images/${item}.jpg`}
                  className="w-full z-0  h-full object-fill example "
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engine;
