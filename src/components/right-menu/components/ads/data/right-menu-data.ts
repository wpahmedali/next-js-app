export const getRightMenuData = () => {
  const zambiaBanners = [
    {
      height: 101,
      alt: 'sdf',
      src: '/asset/images/ads/special-offer.gif',
      url: '/',
    },
    {
      height: 101,
      alt: 'tyre-ads',
      src: '/asset/images/ads/tyre-ads.jpg',
      url: '/tyres/1',
    },
    {
      height: 101,
      alt: 'spare-parts-ad',
      src: '/asset/images/ads/spareId.jpg',
      url: '/spare-parts',
    },
  ];

  return {
    zambiaBanners: zambiaBanners,
    isLoading: false,
    isError: false,
    isSuccess: true,
  };
};
