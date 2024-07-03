import LeftGlossary from './components/LeftGlossary';
import RightGlossary from './components/RightGlossary';

const GlossaryTerms = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-full sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold ">
          Glossary Of Terms
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
          <LeftGlossary />
          <RightGlossary />
        </div>
      </div>
    </section>
  );
};
export default GlossaryTerms;
