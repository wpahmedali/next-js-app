import TyresLayout from 'components/tyre-dashboard/zambia/tyre-layout';

export const getServerSideProps = async (ctx: any) => {
  return {
    redirect: {
      destination: ctx.req.url + '/1',
      permanent: false,
    },
  };
};
const Tyres = (): JSX.Element => {
  return;
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <TyresLayout>{page}</TyresLayout>;
};
