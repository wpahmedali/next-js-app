import CommonLayout from 'components/dashboard/CommonLayout';

const withlayout = () => {
  return (
    <div className="flex items-start justify-center sm:flex-col lg:flex-row md:flex-row px-16 xl:px-3 lg:px-3 sm:px-2 xs:px-2 xxs:px-2 xs:flex-col xxs:flex-col mt-2 ">
      withlayout
    </div>
  );
};

export default withlayout;

withlayout.getLayout = (page) => {
  return <CommonLayout>{page}</CommonLayout>;
};
