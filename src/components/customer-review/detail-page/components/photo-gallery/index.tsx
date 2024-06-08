import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import { NextRouter, useRouter } from 'next/router';
import { useCustomerReview } from 'react-query/hooks/api/customer-review';
import Loading from 'components/loading';
import Error from 'components/error';
import PhotoGalleryItem from './components/PhotoGalleryItem';
import LoadMore from './components/LoadMore';
import { useRouterParams } from 'src/hooks/router-params';

const PhotoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(4);
  const [open, setOpen] = useState(false);

  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isLoading, isSuccess, isError } = useCustomerReview(
    params.countryId,
    params.page,
    params.perPage
  );

  useEffect(() => {
    setDisplayCount(4);
  }, [router]);

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };

  const displayedData = data?.data.reviewList.slice(0, displayCount);

  const slides = data?.data.reviewList?.map((item) => ({
    title: item.title,
    description: item.reviews,
    src: item.originalCustomerImage,
  }));

  return (
    <Fragment>
      <Lightbox
        open={open}
        close={() => {
          setLightboxIndex(null);
          setOpen(false);
        }}
        index={lightboxIndex}
        on={{
          view: ({ index: currentIndex }) => setLightboxIndex(currentIndex),
        }}
        slides={slides}
        plugins={[Zoom, Captions]}
      />
      {isLoading && <Loading />}
      {(!data || isError) && !isLoading && <Error />}
      {isSuccess &&
        displayedData.map(
          (item, i) =>
            i % 4 === 0 && (
              <div
                key={i}
                data-te-lightbox-init
                className="flex p-2 2xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col gap-1"
              >
                {displayedData.slice(i, i + 4).map((item, j) => (
                  <PhotoGalleryItem
                    key={j}
                    item={item}
                    i={i}
                    j={j}
                    setOpen={setOpen}
                    setLightboxIndex={setLightboxIndex}
                  />
                ))}
              </div>
            )
        )}

      {data?.data.reviewList.length > displayCount && (
        <LoadMore loadMore={loadMore} />
      )}
    </Fragment>
  );
};

export default PhotoGallery;
