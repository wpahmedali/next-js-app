import React from 'react';
import UserFeedback from 'components/testimonial/UserFeedback';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';
import { useCustomerReview } from 'react-query/hooks/api/customer-review';
import Loading from 'components/loading';
import Error from 'components/error';
import { ROUTES } from 'src/common/routes';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';

const TestiMonial = () => {
  const { query } = useRouter();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(query);
  const { country } = query;

  params.page = 1;
  const { data, isLoading, isSuccess, isError } = useCustomerReview(
    params.countryId,
    params.page,
    params.customerReviewPerPage
  );

  const url = country
    ? `/customer_review/testimonial/${country}/1`
    : `/customer_review/testimonial${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }/1`;

  return (
    <div className="bg-primary py-12 mt-5">
      <div className="flex items-center justify-between sm:px-2 gap-2 lg:flex-row md:flex-row sm:flex-col">
        <div className="w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {isLoading && <Loading />}
            {(!data || isError) && !isLoading && <Error />}
            {isSuccess &&
              data?.data?.reviewList.map((item) => (
                <SwiperSlide key={item.id}>
                  <UserFeedback data={item} url={url} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestiMonial;
