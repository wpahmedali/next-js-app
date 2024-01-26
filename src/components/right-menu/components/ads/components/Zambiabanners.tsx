import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { getRightMenuData } from '../data/right-menu-data';
import { NextRouter, useRouter } from 'next/router';
import { getIdFromParam } from 'utils/get-id-from-param';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';

const ZambiaBanners = (): JSX.Element | null => {
  const router: NextRouter = useRouter();

  const {
    query: { country },
  } = router;
  const { zambiaBanners } = getRightMenuData();

  const countryId =
    country && !Array.isArray(country) ? getIdFromParam(country) : null;

  if (countryId !== zambiaCountry.id) {
    return null;
  }

  return (
    <Fragment>
      {zambiaBanners.map((item) => (
        <div className="mb-1" key={item.alt}>
          <Link href={item.url} passHref>
            <Image
              className="sm:w-full"
              src={item.src}
              width={400}
              height={item.height}
              alt={item.alt}
              priority={true}
            />
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default ZambiaBanners;
