import { signUpData } from 'components/menu/components/menu-bottom-nav/data/sign-up-data';
import Dropdown from '../../../mobile-view/Dropdown';

const SignUp = (): JSX.Element => (
  <Dropdown data={signUpData} title="SignUp" tabName="sign-up" />
);

export default SignUp;
