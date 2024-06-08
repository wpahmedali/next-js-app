import { NextRouter, useRouter } from 'next/router';
import { useCountryCount } from 'src/hooks/country-count';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { useSetContext } from 'src/providers/ModelContext';

const ModelItem = ({ url, model, modelCount, hideDialog }): JSX.Element => {
  const router: NextRouter = useRouter();

  const setLoadingState = useDispatchLoadingState();
  const countryCount = useCountryCount();
  const setContext = useSetContext();

  const handleOnClick = () => {
    router.push(url);
    setLoadingState({ type: 'makerLoader' });
    hideDialog();
    setContext('SET_VALUE', '');
  };

  return (
    <button
      onClick={handleOnClick}
      className="h-auto p-2 flex justify-items-start items-center content-center rounded-lg bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:shadow-lg hover:shadow-gray-200 focus:opacity-[0.85] hover:bg-black hover:text-white border border-slate-200 justify-between"
    >
      <span className="mx-2 text-xs flex items-center ">
        {model.toUpperCase()}
      </span>
      {countryCount && <span className="mr-2">{modelCount}</span>}
    </button>
  );
};

export default ModelItem;
