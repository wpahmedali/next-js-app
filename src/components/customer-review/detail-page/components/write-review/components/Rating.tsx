import { StarRateIcon } from 'icons';
import React, { Fragment, useState } from 'react';

const Rating = ({ allErrors, setFormData }) => {
  const initialRatings = Array.from({ length: 5 }, (_, index) => ({
    color: 'gray',
    rank: index + 1,
  }));

  const [ratings, setRatings] = useState(initialRatings);

  const onRating = (selectedItem) => {
    setRatings((prevRatings) =>
      prevRatings.map((item) => ({
        color: item.rank <= selectedItem.rank ? 'gold' : 'gray',
        rank: item.rank,
      }))
    );
    setFormData((values) => ({ ...values, review_rating: selectedItem.rank }));
  };

  return (
    <Fragment>
      <div className="w-full flex">
        <span className="text-red-500">*</span>Rating:
        <div className="flex items-center space-x-1">
          {ratings.map((item, i) => (
            <div key={i} onClick={() => onRating(item)}>
              <StarRateIcon color={item.color} />
            </div>
          ))}
        </div>
      </div>
      {allErrors?.review_rating && (
        <p className="text-red-500 block">{allErrors.review_rating}</p>
      )}
    </Fragment>
  );
};
export default Rating;
