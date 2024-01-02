import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from 'react';
import { vehicleListViews } from 'src/common/constants';

const defaultView = vehicleListViews.grid;

type ViewActionType = {
  type: 'GRID' | 'TABULAR';
};

const StateContext = createContext<string>('');
const DispatchContext = createContext<Dispatch<ViewActionType>>(() => null);

const reducerFun = (state: string, action: ViewActionType): string => {
  switch (action.type) {
    case 'GRID':
      return vehicleListViews.grid;
    case 'TABULAR':
      return vehicleListViews.tabular;
    default:
      return defaultView;
  }
};

type VehicleListViewProviderType = {
  children: ReactNode;
  initialValue?: string;
};

export const VehicleListViewProvider = ({
  children,
  initialValue = defaultView,
}: VehicleListViewProviderType) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useVehicleListView = () => useContext(StateContext);
export const useDispatchListView = () => useContext(DispatchContext);
