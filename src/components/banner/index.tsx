import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useBanner } from 'react-query/hooks/api/banner';
import Loading from 'components/loading';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { useRouterParams } from 'src/hooks/router-params';

const Banner = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const { data, isLoading, isError, isSuccess } = useBanner(params.countryId);

  return (
    <div className="main-banner">
      <Swiper
        spaceBetween={30}
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
        className="mySwiper -z-0"
      >
        {isLoading && <Loading />}
        {(!data || isError) && !isLoading && <Error />}
        {isSuccess &&
          data?.data?.map((item) => (
            <SwiperSlide key={item.bannerId}>
              <Image
                alt={item.bannerName}
                src={item.imageUrl}
                className="relative w-full"
                priority={true}
                width={1000}
                height={300}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
