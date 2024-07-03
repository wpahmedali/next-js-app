import React, { useEffect, useState } from 'react';
import Size from './components/Size';
import TyreSearchButton from './components/TyreSearchButton';
import KeyWords from './components/KeyWords';
import { NextRouter, useRouter } from 'next/router';
import { ITyreFilters } from './interfaces/filters.interface';
import { getEmptyTyreFiltersData } from 'utils/get-empty-tyre-filters-data';

const TyreSearchFilter = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(true);
  const [resetToggle, setResetToggle] = useState<boolean>(false);

  const router: NextRouter = useRouter();

  const { tyreSize, keyWords } = router.query;

  const [filters, setFilters] = useState<ITyreFilters>({
    tyreSizeId: tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null,
    keyWord: keyWords && !Array.isArray(keyWords) ? keyWords : '',
  });

  useEffect(() => {
    const initialFilters = getEmptyTyreFiltersData(router.query);
    setFilters(initialFilters);
  }, [router.query]);

  const getSelectedSizeId = (id: number) =>
    setFilters((val) => ({ ...val, tyreSizeId: id }));
  const getKeyword = (text: string) =>
    setFilters((val) => ({ ...val, keyWord: text }));

  const resetButtonClick = () => {
    setFilters({
      tyreSizeId: null,
      keyWord: '',
    });
    setResetToggle(!resetToggle);
    const path = router.asPath.split('?');
    router.push(path[0]);
  };

  return (
    <details className="" open={mobileMenuOpen}>
      <summary
        className="xl:hidden text-sm leading-6 bg-black text-white p-3 dark:text-white font-semibold select-none"
        onClick={() => setMobileMenuOpen(false)}
      >
        Search By Tyre Size & Keyword
      </summary>

      <div
        className={
          mobileMenuOpen
            ? 'xl:block sm:hidden xs:hidden xxs:hidden'
            : 'sm:block xs:block xxs:block'
        }
      >
        <div className="flex flex-wrap md:mt-2 sm:mt-2 xs:mt-2 xxs:mt-2 lg:-mt-12 z-20 relative backdrop-blur-xl bg-black/70 hover:backdrop-blur-lg py-3 px-1 lg:mx-7 sm:mx-2 xs:mx-1 rounded-md md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
          <Size
            getSelectedSizeId={getSelectedSizeId}
            resetToggle={resetToggle}
          />
          <KeyWords getKeyword={getKeyword} resetToggle={resetToggle} />
          <TyreSearchButton
            filters={filters}
            resetButtonClick={resetButtonClick}
          />
        </div>
      </div>
    </details>
  );
};

export default TyreSearchFilter;
