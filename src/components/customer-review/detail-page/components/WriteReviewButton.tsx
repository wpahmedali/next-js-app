import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

const WriteReviewButton = ({ setOpen }) => {
  return (
    <div className="flex justify-end mt-4">
      <button onClick={() => setOpen(true)}>
        <div className="p-6 w-96 bg-white rounded-xl justify-center cursor-pointer shadow-lg flex items-center space-x-4">
          <div className="shrink-0 bg-black p-2 rounded-lg">
            <PencilSquareIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">Write a Review</div>
            <p className="text-slate-500">Customer Reviews message!</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WriteReviewButton;
