import React, { Fragment } from 'react';
import { CaretLeftIcon, CaretRightIcon } from 'icons';

const Buttons = ({ images, activeImage, setActiveImage }) => {
  const handleImageCarousel = (operator: string) => {
    const itemIndex = images.findIndex(
      (x) => x.imagePath.replace('/s_thumb', '/thumb') === activeImage
    );

    let result;
    switch (operator) {
      case '+':
        result = itemIndex + 1;
        if (result >= images.length) {
          result = 0;
        }
        break;
      case '-':
        result = itemIndex - 1;
        if (result < 0) {
          result = images.length - 1;
        }
        break;
      default:
        result = itemIndex;
    }

    setActiveImage(images[result].imagePath.replace('/s_thumb', '/thumb'));
  };

  return (
    <Fragment>
      <button
        onClick={() => handleImageCarousel('-')}
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <CaretLeftIcon />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={() => handleImageCarousel('+')}
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <CaretRightIcon />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </Fragment>
  );
};

export default Buttons;
