import Error from 'components/error';
import Loading from 'components/loading';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useTyreCategory } from 'react-query/hooks/api/tyres/zambia/tyre-category';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';

const TyreCategories = () => {
  const router: NextRouter = useRouter();
  const { page } = router.query;

  const countryId = zambiaCountry.id;

  const { data, isLoading, isError, isSuccess } = useTyreCategory(countryId);

  let pathname = router.pathname;
  pathname = pathname.replace('[country]', String(countryId));
  if (page && !Array.isArray(page)) {
    pathname = pathname.replace('/[page]', '');
  }

  return (
    <div className="max-w-full">
      <details className="px-1 pb-0 my-2 mt-0" open={true}>
        <summary className="text-sm leading-6 text-white font-semibold select-none p-3 bg-black md:text-xs">
          Categories
        </summary>
        <div className="sm:block xs:block xxs:block mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <div className="group inline-block w-full">
            <ul className="bg-white group-hover:scale-100  hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full show">
              {isLoading && <Loading />}
              {(!data || isError) && !isLoading && <Error />}
              {isSuccess &&
                data?.data?.map((item, i) => (
                  <li
                    key={item.tyreCatId}
                    className={`${
                      i % 2 === 0 ? 'bg-[#E8E8E8]' : 'bg-[#CECECE]'
                    } rounded-sm relative w-full hover:bg-black dark:hover:bg-gray-600 hover:text-white`}
                  >
                    <Link
                      href={`${pathname}/1?category=${item.tyreCatId}`}
                      className="w-full text-left p-3 flex items-center outline-none focus:outline-none"
                    >
                      <Image
                        className="object-cover h-7 w-7 rounded-full"
                        src="https://janjapan.com/resources/images/tyre/tyre-mobile.png"
                        alt="Avatar"
                        width={30}
                        height={30}
                        priority={true}
                      />
                      <span className="text-xs pl-1 flex-1 ">
                        {item.categoryName}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
};

export default TyreCategories;
