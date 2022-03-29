import React, { createContext, ReactNode, useMemo, useState } from 'react';

type HeaderTitleProps = {
  headerTitle: string;
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

interface HeaderTitleContextProviderProps {
  children: ReactNode;
}

const HeaderTitleContext = createContext<HeaderTitleProps>({
  headerTitle: '',
  setHeaderTitle: () => {},
});

function HeaderTitleContextProvider({
  children,
}: HeaderTitleContextProviderProps) {
  const [headerTitle, setHeaderTitle] = useState<string>('');

  const contextValue = useMemo(
    () => ({
      headerTitle,
      setHeaderTitle,
    }),
    [headerTitle, setHeaderTitle],
  );

  return (
    <HeaderTitleContext.Provider value={contextValue}>
      {children}
    </HeaderTitleContext.Provider>
  );
}

export { HeaderTitleContextProvider };
export default HeaderTitleContext;
