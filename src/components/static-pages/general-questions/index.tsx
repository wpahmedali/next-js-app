import LeftGeneralQuestions from './components/LeftGQ';
import RightGeneralQuestions from './components/RightGQ';

const GeneralQuestions = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-full sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          General Questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <LeftGeneralQuestions />
          <RightGeneralQuestions />
        </div>
      </div>
    </section>
  );
};
export default GeneralQuestions;
