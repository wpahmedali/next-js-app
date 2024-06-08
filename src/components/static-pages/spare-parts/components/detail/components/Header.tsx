import Image from 'next/image';
import React, { Fragment } from 'react';

const SparePartHeader = () => {
  return (
    <Fragment>
      <section
        id="intro"
        className="flex items-center justify-center text-center"
        data-scroll-section
      >
        <div className="w-full px-5 mx-auto">
          <h1
            className="text-4xl sm:text-2xl font-bold"
            data-scroll
            data-scroll-repeat
            data-scroll-call="toggleBackToTop"
          >
            Spare Part Categories
          </h1>
          <p className="text-2xl mt-2">Scroll down 👇</p>
        </div>
      </section>
      <section className="py-4" data-scroll-section>
        <div className="w-full px-5 mx-auto">
          <nav>
            <ul className="grid md:grid-flow-col gap-4 lg:gap-4 justify-center text-center">
              <li>
                <a
                  className="flex text-xl font-medium px-4 py-2 border-4 border-double border-black hover:bg-yellow-400 hover:border-black focus:border-yellow-400 rounded-md transition"
                  href="#engines-section"
                  data-scroll-to
                >
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="https://janjapan.com/resources/images/spare_parts/engine.png"
                    className="w-8 pr-1"
                  />{' '}
                  Engines
                </a>
              </li>
              <li>
                <a
                  className="flex text-xl font-medium px-4 py-2 border-4 border-double border-black hover:bg-yellow-400 hover:border-black focus:border-yellow-400 rounded-md transition"
                  href="#bumpers"
                  data-scroll-to
                >
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="https://janjapan.com/resources/images/spare_parts/bumper.png"
                    className="w-8 pr-1"
                  />{' '}
                  Bumpers
                </a>
              </li>
              <li>
                <a
                  className="flex text-xl font-medium px-4 py-2 border-4 border-double border-black hover:bg-yellow-400 hover:border-black focus:border-yellow-400 rounded-md transition"
                  href="#lights"
                  data-scroll-to
                >
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="https://janjapan.com/resources/images/spare_parts/light.png"
                    className="w-8 pr-1"
                  />{' '}
                  Lights
                </a>
              </li>
              <li>
                <a
                  className="flex text-xl font-medium px-4 py-2 border-4 border-double border-black hover:bg-yellow-400 hover:border-black focus:border-yellow-400 rounded-md transition"
                  href="#doors"
                  data-scroll-to
                >
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="https://janjapan.com/resources/images/spare_parts/car-door.png"
                    className="w-8 pr-1"
                  />{' '}
                  Doors
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default SparePartHeader;
