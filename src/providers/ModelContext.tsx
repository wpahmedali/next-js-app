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
const ModelContext = createContext<Dispatch<ViewActionType>>(() => null);

const reducerFun = (state: string, action: ViewActionType): string => {
  return action.type;
};

type ModelContextProviderType = {
  children: ReactNode;
  initialValue?: string;
};

export const ModelContextProvider = ({
  children,
  initialValue = '',
}: ModelContextProviderType) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <ModelContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </ModelContext.Provider>
  );
};

export const useModelState = () => useContext(StateContext);
export const useDispatchModelState = () => useContext(ModelContext);
export const useSetContext = () => {
  const dispatch = useDispatchModelState();

  const setContext = (type: string) => {
    dispatch({ type: type });
  };

  return setContext;
};
