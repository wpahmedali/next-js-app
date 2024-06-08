import { NextApiRequest, NextApiResponse } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { DehydratedState } from 'react-query';

type CtxType = {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
};

type NextMiddleware = (
  ctx: CtxType
) => Promise<{ props: { dehydratedState: DehydratedState } }>;

export const withCSR = (next: NextMiddleware) => async (ctx: CtxType) => {
  const isCSR = ctx.req.url?.startsWith('/_next');

  if (isCSR) {
    return {
      props: {},
    };
  }

  return next?.(ctx);
};
