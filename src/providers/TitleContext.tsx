import { createContext, useState, useContext, ReactNode } from 'react';

const TitleContext = createContext<{
  title: string;
  updateTitle: (title: string) => void;
}>({
  title: '',
  updateTitle: () => {},
});

export const useTitleContext = () => useContext(TitleContext);

export const TitleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>('');

  const updateTitle = (title: string) => {
    setTitle(title);
  };

  return (
    <TitleContext.Provider value={{ title, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
