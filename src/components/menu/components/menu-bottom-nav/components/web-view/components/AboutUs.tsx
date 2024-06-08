import { aboutUsData } from '../../../data/about-us-data';
import Dropdown from './dropdown';

const AboutUs = (): JSX.Element => (
  <Dropdown data={aboutUsData} title="About Us" tabName="about-us" />
);

export default AboutUs;
