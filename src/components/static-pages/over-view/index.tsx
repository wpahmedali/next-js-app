import TopImages from './components/TopImages';
import CompanyInfo from './components/CompanyInfo';
import History from './components/History';
import OfficeNetwork from './components/OfficeNetwork';
import Messages from './components/Messages';
import AwardTitle from './components/AwardTitle';
import ArticleItem from './components/ArticleItem';
import PartnerTitle from './components/PartnerTitle';
import Youtube1 from './components/youtube/Youtube1';
import Youtube2 from './components/youtube/Youtube2';
import Youtube3 from './components/youtube/Youtube3';
import PartnerArticles from './components/PartnerArticles';
import { Fragment } from 'react';

const OverView = () => {
  return (
    <Fragment>
      <div id="overview" className="flex flex-wrap" data-scroll-section>
        <TopImages />
        <div className="w-full md:w-3/5 ml-auto mr-auto">
          <CompanyInfo />
          <History />
          <OfficeNetwork />
        </div>
      </div>
      <Messages />
      <section id="awards" className="py-10 bg-gray-100" data-scroll-section>
        <AwardTitle />
        <div className="mx-auto grid max-w-full  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </section>
      <section id="partners" className="py-10 bg-gray-100" data-scroll-section>
        <PartnerTitle />
        <div className="mx-auto grid max-w-full  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
          <PartnerArticles />
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="mx-auto grid max-w-full  grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          <Youtube1 />
          <Youtube2 />
          <Youtube3 />
        </div>
      </section>
    </Fragment>
  );
};
export default OverView;
