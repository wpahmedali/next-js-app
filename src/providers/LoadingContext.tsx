import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from 'react';

type ViewActionType = {
  type: string;
};

const StateContext = createContext<string>('');
const LoadingContext = createContext<Dispatch<ViewActionType>>(() => null);

const reducerFun = (state: string, action: ViewActionType): string => {
  return action.type;
};

type LoadingContextProviderType = {
  children: ReactNode;
  initialValue?: string;
};

export const LoadingContextProvider = ({
  children,
  initialValue = 'gridLoader',
}: LoadingContextProviderType) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <LoadingContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </LoadingContext.Provider>
  );
};

export const useLoadingState = () => useContext(StateContext);
export const useDispatchLoadingState = () => useContext(LoadingContext);
