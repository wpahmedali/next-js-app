import { NextRouter } from 'next/router';

export const gotoNewPage = (router: NextRouter, page: number) => {
  let pathname = router.pathname;
  const query = router.query;
  query.page = String(page);

  Object.keys(query).forEach((key: string) => {
    pathname = pathname.replace(`[${key}]`, String(query[key]));
  });

  const queryData = router.asPath.split('?');

  if (queryData.length === 2) {
    pathname += '?' + queryData[1];
  }

  router.push(pathname);
};
