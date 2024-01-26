export const getServerSideProps = async (ctx: any) => {
  return {
    redirect: {
      destination: ctx.req.url + '/1',
      permanent: false,
    },
    props: {},
  };
};

const Page = () => {
  return;
};

export default Page;
