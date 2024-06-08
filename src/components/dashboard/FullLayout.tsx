import WrapperLayout from 'components/dashboard/WrapperLayout';
import CommonLayout from './CommonLayout';

const FullLayout = ({ children }) => {
  return (
    <CommonLayout>
      <WrapperLayout>{children}</WrapperLayout>
    </CommonLayout>
  );
};

export default FullLayout;
