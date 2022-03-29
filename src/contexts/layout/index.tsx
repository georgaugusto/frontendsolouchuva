import React, { createContext, ReactNode, useMemo, useState } from 'react';

type LayoutProps = {
  navMobile: boolean;
  compact: boolean;
  subMenus: boolean;
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setCompact: React.Dispatch<React.SetStateAction<boolean>>;
  setSubMenus: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LayoutContextProviderProps {
  children: ReactNode;
}

const LayoutContext = createContext<LayoutProps>({
  navMobile: false,
  compact: true,
  subMenus: false,
  setNavMobile: () => {},
  setCompact: () => {},
  setSubMenus: () => {},
});

function LayoutContextProvider({ children }: LayoutContextProviderProps) {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [compact, setCompact] = useState<boolean>(true);
  const [subMenus, setSubMenus] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      navMobile,
      compact,
      subMenus,
      setNavMobile,
      setCompact,
      setSubMenus,
    }),
    [navMobile, compact, subMenus],
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContextProvider };
export default LayoutContext;
