import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

const WriteReviewButton = ({ setOpen }) => {
  return (
    <div className="flex justify-center mt-4">
      <button onClick={() => setOpen('SET_VALUE', 'customerReview')}>
        <div className="p-3 bg-gradient-to-r from-primary to-amber-200 rounded-xl justify-center cursor-pointer shadow-lg flex items-center space-x-4">
          <div className="shrink-0 bg-black p-2 rounded-lg">
            <PencilSquareIcon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <div className="text-xl font-medium text-black">Write a Review</div>
            <p className="text-black text-sm">
              Your opinion matters! Share your Jan Japan experience with a quick
              review.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WriteReviewButton;
