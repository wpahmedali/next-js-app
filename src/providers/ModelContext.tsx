import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from 'react';

type ViewActionType = {
  type: string;
  payload?: any;
};

type StateType = {
  value: string;
  isFeature?: boolean;
};

const StateContext = createContext<StateType>({ value: '', isFeature: false });
const ModelContext = createContext<Dispatch<ViewActionType>>(() => null);

const reducerFun = (state: StateType, action: ViewActionType): StateType => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'SET_FEATURE':
      return { ...state, isFeature: action.payload };
    default:
      return state;
  }
};

type ModelContextProviderType = {
  children: ReactNode;
  initialValue?: string;
};

export const ModelContextProvider = ({
  children,
  initialValue = '',
  isFeature = false,
}: ModelContextProviderType & { isFeature?: boolean }) => {
  const [state, dispatch] = useReducer(reducerFun, {
    value: initialValue,
    isFeature,
  });

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

  const setContext = (type: string, payload?: any) => {
    dispatch({ type, payload });
  };

  return setContext;
};
