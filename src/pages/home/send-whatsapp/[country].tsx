import SalesTeamLayout from 'components/dashboard/SalesTeamLayout';
import SalesTeam from 'components/sales-team';

const WhatsAppPage = () => {
  return <SalesTeam />;
};

export default WhatsAppPage;

WhatsAppPage.getLayout = function getLayout(page) {
  return <SalesTeamLayout>{page}</SalesTeamLayout>;
};
