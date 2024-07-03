import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMakerModel } from 'react-query/hooks/api/marker-model';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import SearchItem from './search-item';
import { ISearchMaker } from '../interfaces/search-maker.interface';
import { useRouterParams } from 'src/hooks/router-params';

const SearchMaker = ({
  updateFilters,
  setModels,
  models: oldModels,
  resetToggle,
  dropdownState,
  setDropdownState,
}: ISearchMaker) => {
  const router = useRouter();

  const {
    query: { maker, model, makers, models },
  } = router;

  const makerIdArr = makers && !Array.isArray(makers) ? makers.split(',') : [];
  const modelIdArr = models && !Array.isArray(models) ? models.split(',') : [];

  const params = useRouterParams(router.query);

  const { data, isLoading, isError, isSuccess } = useMakerModel(params);

  let dropdownData: IDropdownData[] = [];

  if (isSuccess && data) {
    dropdownData = data.data.map((item) => ({
      id: item.makerId,
      name: item.makerName,
      image: item.cssClass.toLowerCase(),
      isChecked: false,
    }));
  }

  const getSelectedData = (selectedData: string[]) => {
    const selectedModels = data?.data
      .filter((item) =>
        selectedData.includes(`${item.makerName.toLowerCase()}-${item.makerId}`)
      )
      .flatMap((item) => item.models)
      .map((modelItem) => {
        const correspondingOldModel = oldModels.find(
          (oldModelItem) => oldModelItem.id === modelItem.modelId
        );

        return {
          id: modelItem.modelId,
          name: modelItem.modelName,
          isChecked: correspondingOldModel
            ? correspondingOldModel.isChecked
            : false,
        };
      });

    setModels(selectedModels);
    updateFilters([], 'models');
    updateFilters(selectedData, 'makers');
  };

  useEffect(() => {
    if (isSuccess && data) {
      let selectedModels = [];

      if (makerIdArr.length === 0 && params.makerId && model) {
        const foundMaker = data.data.find(
          (item) => item.makerId === +params.makerId
        );
        if (foundMaker) {
          selectedModels = foundMaker.models.map((modelItem) => ({
            id: modelItem.modelId,
            name: modelItem.modelName,
            isChecked:
              modelIdArr.length === 0
                ? modelItem.modelId === +params.modelId
                : params.modelId
                    .split(',')
                    .map(Number)
                    .includes(modelItem.modelId),
          }));
        }
      } else {
        selectedModels = data.data
          .filter((item) =>
            makerIdArr.includes(
              `${item.makerName.toLowerCase()}-${item.makerId}`
            )
          )
          .flatMap((item) => item.models)
          .map((modelItem) => ({
            id: modelItem.modelId,
            name: modelItem.modelName,
            isChecked:
              modelIdArr.length === 0
                ? +params.modelId === modelItem.modelId
                : modelIdArr.includes(
                    `${modelItem.modelName.toLowerCase()}-${modelItem.modelId}`
                  ),
          }));
      }

      setModels(selectedModels);
    }
  }, [isSuccess, maker, router.query]);

  return (
    <SearchItem
      name="Maker"
      isYear={false}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={makerIdArr}
      data={dropdownData}
      isError={!data || isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      dropdownState={dropdownState}
      setDropdownState={setDropdownState}
    />
  );
};

export default SearchMaker;
