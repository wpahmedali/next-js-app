import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from 'react';
import { interfaceMode } from 'src/common/constants';

const defaultMode = interfaceMode.inventory;

type ViewActionType = {
  type: 'INVENTORY' | 'SALE';
};

const StateContext = createContext<string>('');
const DispatchContext = createContext<Dispatch<ViewActionType>>(() => null);

const reducerFun = (state: string, action: ViewActionType): string => {
  switch (action.type) {
    case 'INVENTORY':
      return interfaceMode.inventory;
    case 'SALE':
      return interfaceMode.sale;
    default:
      return defaultMode;
  }
};

type interfaceModeProviderType = {
  children: ReactNode;
  initialValue?: string;
};

export const InterfaceModeProvider = ({
  children,
  initialValue = defaultMode,
}: interfaceModeProviderType) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useInterfaceMode = () => useContext(StateContext);
export const useDispatchInterfaceMode = () => useContext(DispatchContext);
