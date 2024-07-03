export const getServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: ctx.req.url + '/1',
      permanent: false,
    },
  };
};

const Page = () => {
  return;
};

export default Page;
