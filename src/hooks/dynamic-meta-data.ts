import { allModelsStr } from 'src/common/constants';
import { getNameFromParam } from 'utils/get-name-from-param';
import { capitalizeWord } from 'utils/capitalize-word';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useVehicleDetail } from 'react-query/hooks/api/vehicle/vehicle-detail';

export const useDynamicMetaData = (router) => {
  const { country, maker, model, contact, carId } = router.query;

  if (
    carId &&
    maker &&
    !Array.isArray(maker) &&
    model &&
    !Array.isArray(model)
  ) {
    return {
      description: `Buy the best quality ${capitalizeWord(
        getNameFromParam(maker)
      )} ${capitalizeWord(getNameFromParam(model))}${
        country ? ` in ${capitalizeWord(getNameFromParam(country))}` : ''
      } at an affordable price. Stock # ${carId} – Jan's Group, one of the largest importers and exporters of used Japanese cars`,
    };
  }

  if (
    !router.asPath ||
    router.asPath.length <= 1 ||
    (country === 'all_stock' && !contact)
  ) {
    return {
      title: 'Japanese Used Cars – Importers & Exporters | Jan’s Group',
      description:
        'World’s best Japanese used cars importers & exporters offer high quality used vehicles at affordable prices. Jan’s Group – A name of trust & reliability.',
    };
  }

  if (
    maker &&
    !Array.isArray(maker) &&
    model &&
    !Array.isArray(model) &&
    country &&
    !Array.isArray(country)
  ) {
    return {
      title: `Used ${capitalizeWord(getNameFromParam(maker))} ${
        model !== allModelsStr ? capitalizeWord(getNameFromParam(model)) : ''
      } Vehicles ${
        country && country !== 'all_stock'
          ? `in ${capitalizeWord(getNameFromParam(country))}`
          : ''
      } by Jan's Group`,
      description: `Best used ${capitalizeWord(getNameFromParam(maker))} ${
        model !== allModelsStr ? capitalizeWord(getNameFromParam(model)) : ''
      } Vehicles ${
        country && country !== 'all_stock'
          ? `in ${
              country && !Array.isArray(country)
                ? capitalizeWord(getNameFromParam(country))
                : ''
            }`
          : ''
      } brought to you by Jan's Group – One of the largest importers and exporters of used Japanese cars`,
    };
  }

  if (
    country &&
    !Array.isArray(country) &&
    country !== 'all_stock' &&
    contact
  ) {
    return {
      title: `Contact Jan's Group Regional Office in ${capitalizeWord(
        getNameFromParam(country)
      )}`,
      description: `Jan Japan's Office location(s) in ${capitalizeWord(
        getNameFromParam(country)
      )}. Contact us for best in class used Japanese vehicles at affordable prices – Jan's Group.`,
    };
  }

  // if (
  //   (country && !Array.isArray(country) && country !== 'all_stock') ||
  //   (auction && !Array.isArray(auction))
  // ) {
  //   return {
  //     title: `High Quality Used Japanese cars in ${
  //       auction
  //         ? capitalizeWord(getNameFromParam(auction))
  //         : capitalizeWord(getNameFromParam(country))
  //     }`,
  //     description: `Buy Used Japanese vehicles in ${
  //       auction
  //         ? capitalizeWord(getNameFromParam(auction))
  //         : capitalizeWord(getNameFromParam(country))
  //     } from Jan Japan. One of the largest importers and exporters of used Japanese cars in ${
  //       auction && !Array.isArray(auction)
  //         ? capitalizeWord(getNameFromParam(auction))
  //         : capitalizeWord(getNameFromParam(country))
  //     }`,
  //   };
  // }
};

export const useVehicleDetailDynamicMetaData = (router) => {
  const { country, maker, model, carId } = router.query;

  const { data } = useVehicleDetail(
    router.query.country &&
      !Array.isArray(router.query.country) &&
      getIdFromParam(router.query.country),
    +router.query.carId
  );

  if (
    carId &&
    maker &&
    !Array.isArray(maker) &&
    model &&
    !Array.isArray(model)
  ) {
    if (data?.data) {
      const title = `Buy Used ${capitalizeWord(
        getNameFromParam(maker)
      )} ${capitalizeWord(getNameFromParam(model))}${
        country ? ` in ${capitalizeWord(getNameFromParam(country))}` : ''
      } Stock # ${carId} ${
        data?.data?.engineCode ? `Engine Code ${data?.data?.engineCode}` : ''
      } ${
        data?.data?.chassisNo ? `Chassis Code ${data?.data?.chassisNo}` : ''
      }`;

      const vehicleData = [
        { property: 'og:title', content: 'jan japan' },
        {
          property: 'og:description',
          content: `Stock No: ${data?.data?.carId} | Chassis #: ${data?.data?.chassisNo} | Model: ${data?.data?.modelName} | Engine Capacity: ${data?.data?.engineSize}CC | Reg Year/month: ${data?.data?.registrationYear}/${data?.data?.registrationMonth} | Steering: ${data?.data?.steeringName} | Engine Code: ${data?.data?.engineCode} | Chassis Code: ${data?.data?.chassisNo}`,
        },
        { property: 'og:url', content: '/car_detail/facebook_share//' },
        { property: 'og:site_name', content: 'jan japan' },
        { property: 'article:section', content: 'Car Detail' },
        {
          property: 'og:image',
          content: data?.data?.carImages?.[0]?.imagePath.replace(
            '/s_thumb',
            '/thumb'
          ),
        },
        {
          property: 'og:image',
          content: data?.data?.carImages?.[1]?.imagePath.replace(
            '/s_thumb',
            '/thumb'
          ),
        },
      ];

      return { title, vehicleData };
    }

    const title = `Buy Used ${capitalizeWord(
      getNameFromParam(maker)
    )} ${capitalizeWord(getNameFromParam(model))}${
      country ? ` in ${capitalizeWord(getNameFromParam(country))}` : ''
    } Stock # ${carId}`;

    return { title };
  }
};
