import { NextRouter, useRouter } from 'next/router';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { useSetContext } from 'src/providers/ModelContext';

const ChassisItem = ({
  url,
  chassisName,
  chassisCount,
  hideDialog,
}): JSX.Element => {
  const router: NextRouter = useRouter();

  const setLoadingState = useDispatchLoadingState();
  const setContext = useSetContext();

  const handleOnClick = () => {
    router.push(url);
    setLoadingState({ type: 'chassisLoader' });
    hideDialog();
    setContext('');
  };

  return (
    <button
      onClick={handleOnClick}
      className="h-auto p-2 flex justify-items-start items-center content-center rounded-lg bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:shadow-lg hover:shadow-gray-200 focus:opacity-[0.85] hover:bg-black hover:text-white border border-slate-200 justify-between"
    >
      <span className="mx-2 text-xs flex items-center ">
        {chassisName.toUpperCase()}
      </span>
      <span className="mr-2">{chassisCount}</span>
    </button>
  );
};

export default ChassisItem;
