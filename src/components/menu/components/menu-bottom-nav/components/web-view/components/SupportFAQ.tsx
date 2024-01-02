import { supportFaqsData } from '../../../data/support-faqs-data';
import Dropdown from './dropdown';

const SupportFAQ = (): JSX.Element => (
  <Dropdown data={supportFaqsData} title="Support & FAQ's" tabName="support" />
);

export default SupportFAQ;
