import { motion } from 'framer-motion';
import React, { Fragment, useState } from 'react';
import Loading from 'components/loading';
import { IMakerModel } from 'components/makers/interfaces/maker-model.interface';
import ChassisDialog from './ChassisDialog';

const ModelItem = ({
  makerId,
  makerName,
  modelId,
  modelName,
  loadingMakerId,
  makerIsLoading,
  isEven,
  modelCount,
  chassis,
}: IMakerModel): JSX.Element => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  const showDialog = () => setIsShowDialog(true);
  const hideDialog = () => setIsShowDialog(false);

  return (
    <Fragment>
      <motion.div>
        <li
          onClick={showDialog}
          className={`${
            isEven ? 'bg-[#E8E8E8]' : 'bg-[#CECECE]'
          } rounded-sm relative px-3 w-full py-2 hover:bg-black hover:text-white`}
        >
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            {makerIsLoading && loadingMakerId === makerId && (
              <Loading height="h-5" width="w-5" />
            )}
            <span className="text-xs pl-1 flex-1 ">
              {modelName.toUpperCase()}
            </span>
            <span className="mr-2">{modelCount}</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
        </li>
      </motion.div>
      <ChassisDialog
        makerId={makerId}
        makerName={makerName}
        modelId={modelId}
        modelName={modelName}
        chassis={chassis}
        isShowDialog={isShowDialog}
        hideDialog={hideDialog}
      />
    </Fragment>
  );
};

export default ModelItem;
