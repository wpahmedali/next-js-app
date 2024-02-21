import SalesTeamLayout from 'components/dashboard/SalesTeamLayout';
import SendWhatsapp from 'components/send-whatsapp';

const WhatsAppPage = () => {
  return <SendWhatsapp />;
};

export default WhatsAppPage;

WhatsAppPage.getLayout = function getLayout(page) {
  return <SalesTeamLayout>{page}</SalesTeamLayout>;
};
