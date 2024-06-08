import React, { useState } from 'react';
import CustomerWriteReview from './components/write-review';
import WriteReviewButton from './components/WriteReviewButton';
import PhotoGallery from './components/photo-gallery';
import ReviewListing from './components/review-listing';
import { useRouter } from 'next/router';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import { useCustomerReview } from 'react-query/hooks/api/customer-review';
import { useRouterParams } from 'src/hooks/router-params';
import { useModelState, useSetContext } from 'src/providers/ModelContext';

const CustomerReview = () => {
  const [lightBox, setLightBox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { query } = useRouter();
  const setContext = useSetContext();
  const { value: modelState } = useModelState();
  const params = useRouterParams(query);

  params.page = 1;
  const { data } = useCustomerReview(
    params.countryId,
    params.page,
    params.perPage
  );

  const slides = data?.data.reviewList.map((item) => ({
    title: item.title,
    description: item.reviews,
    src: item.originalCustomerImage,
  }));

  return (
    <div className="w-full">
      <CustomerWriteReview open={modelState} setOpen={setContext} />
      <h1 className="bg-primaryDark text-white w-full text-center p-2 font-bold text-3xl flex-none sm:mt-2 xs:mt-2 xxs:mt-2">
        Customer Reviews
      </h1>
      {params.countryId !== 0 && <WriteReviewButton setOpen={setContext} />}
      <h2 className="mt-5 text-center w-full text-2xl bg-black text-white p-2">
        - User Photo Gallery -{' '}
      </h2>
      <div className="w-full rounded-xl shadow-lg bg-white p-3">
        <Lightbox
          open={lightBox}
          close={() => {
            setLightboxIndex(null);
            setLightBox(false);
          }}
          index={lightboxIndex}
          on={{
            view: ({ index: currentIndex }) => setLightboxIndex(currentIndex),
          }}
          slides={slides}
          plugins={[Zoom, Captions]}
        />
        <PhotoGallery />
        <ReviewListing
          setLightBox={setLightBox}
          setLightboxIndex={setLightboxIndex}
        />
      </div>
    </div>
  );
};

export default CustomerReview;
